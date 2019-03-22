const datasets = require('../datasets/index.js');
const store = require('./store.js');
const axios = require('axios');
const config = require('../config');

module.exports = {

    getDataset: function (dataset, callback) {
        callback(datasets.getDataset(dataset));
    },

    initRequest: function (code, datasetObj, callback) {
        console.log('--- ℹ️  | Request for ' + code + ' with the dataset ' + datasetObj.id);
        store.getStoredData(code, datasetObj.id, function (obj) {
            if (obj !== false) {
                callback(obj);
            }
            else {
                console.log('--- ℹ️ | Data not found, request for generation');
                let sources;
                let filterLibrary = ["Libération", "France 24", "LCI", "Die Zeit", "Spiegel online", "Stuttgart", "China","London","Tgcom24","Italia","rai news", "Allemagne", "Restauration rapide", "Europe", "Union européenne", "Risque", "", "Le Havre", "France 3","En Garde!", "L'Appartement", "Elle", "En passant", "France", "Le Matin", "Le Soir", "Le Nouvel Observateur", "Le Monde", "Equipe de France", "Île de France", "Union Européenne", "Euro", "Liban", "France", "Location", "Moyen-Orient", "État", "Le Parisien", "Challenges","La Tribune", "Les Echos", "Le Figaro", "L'Humanité", "France Soir", "France Info", "Metro", "20 minutes", "L'Equipe", "Midi-Olympique", "Le Dauphiné libéré", "Le Progrès", "Ouest-France", "Le Télégramme de Brest", "Paris-Normandie", "Nice-matin", "Var-matin", "Corse-Matin", "L'Yonne républicaine", "La Voix du Nord", "La Provence", "Le Républicain Lorrain", "L'Union de Reims", "La Liberté de l'Est L'Alsace Le Pays", "La Montagne", "Le Berry Républicain", "Le Populaire", "Le Journal du Centre", "Courrier International", "Elle", "L'Européen", "L'Express", "Marianne", "Le Monde Diplomatique", "Le Nouvel Observateur ", "Le Point", "Le Monde de l'Education", "Sciences et Avenir", "L'Etudiant", "Phosphore", "Télérama", "Le journal on line de SaÔne-et-Loire", "Le Bien public", "SaÔne-et-Loire", "Les Clefs de l'actualité", "Junior", "Dernières Nouvelles d'Alsace", "L'indépendant", " L'indépendant de Perpignan", "L' Equipe ", "Midi-Olympique", "l'Opinion", "La Dépêche du Midi" , "Paris" , "France" , "Ile-de-France"];
                let generalists = ["news.sfr.fr", "www.repubblica.it","www.rainews.it","www.newitaliane.it","www.zeit.de","www.focus.de", "www.spiegle.de", "www.bbc.uk", "www.radiohc.cu", "www.lepoint.fr","www.francebleu.fr","www.bfmtv.com", "www.bienpublic.com","www.lci.fr", "www.linfo.re", "www.ledauphine.com", "www.francetvinfo.fr", "www.sudouest.fr", "www.boursorama.com", "www.infonormandie.com", "www.arcinfo.ch", "www.lemonde.fr", "www.franceinfo.fr","www.franceinfo.fr", "actus.clicanoo.re", "www.liberation.fr", "www.lejdd.fr", "www.huffingtonpost.fr" ];
                let stats = {
                    id: code + '_' + datasetObj.id,
                    notation: 0,
                    nbArticles: 0,
                    specializedRepresentation: 0,
                    generalistRepresentation: 0,
                    topicsInMedia: [],
                        topicsRepresentation: [],
                    negativeQuotedEnterprises: [],
                    positiveQuotedEnterprises: [],
                    articles: [],
                    negArticles: [],
                    negTopics: []
                };
                let aggregatedText = "";
                let aggregatedGeneralists = 0;
                let aggregatedSpecialists = 0;
                const renderStats = async () => {
                    var topics;
                    for (let i = 0; i < datasetObj.countries.length; i++) {
                        if (datasetObj.countries[i].code === code) {
                            sources = datasetObj.countries[i].datas;
                            topics = Object.values(datasetObj.countries[i].topics);
                        }
                    }

                    console.log('--- 🏁 | Subjects to be generated : ' + topics);

                    async function asyncForEach(array, callback) {
                        for (let index = 0; index < array.length; index++) {
                            await callback(array[index], index, array);
                        }
                    }

                    // Navigate in topics
                    await asyncForEach(topics, async (topic, index) => {
                        // Get articles in topics
                        console.log('--- ⏳ | ' + (index + 1) + '/' + (topics.length) + ' | Request articles for "' + topic + '" ...');
                        let globalArticlesOfCateg = [];
                        await axios({
                            url: 'https://api.ozae.com/gnw/articles?date=20150317__20190320&edition=' + code.toLowerCase() + '-' + code.toLowerCase() + '&key=' + config.ozae.apiKey + '&query=' + topic + '',
                            method: 'get',
                            timeout: 1000000,
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        }).then(res => {
                            let dataFetched = res.data;
                            let articlesOfCateg = {categ: topic, list: []};
                            console.log('--- ⌛ | ' + (index + 1) + '/' + (topics.length) + ' | Analysing ' + dataFetched.metadata.count + ' articles for "' + topic);
                            // Save and get information
                            stats.nbArticles += parseInt(dataFetched.metadata.count);
                            stats.topicsRepresentation = topics;
                            for (let i = 0; i < dataFetched.articles.length; i++) {
                                if(generalists.includes(dataFetched.articles[i].source.subdomain)){
                                    aggregatedGeneralists += 1;
                                }
                                else{
                                    aggregatedSpecialists += 1;
                                }
                                aggregatedText += ' ' + dataFetched.articles[i].name;
                                articlesOfCateg.list.push({
                                    name: dataFetched.articles[i].name,
                                    url: dataFetched.articles[i].url,
                                    id: dataFetched.articles[i].id,
                                    score: dataFetched.articles[i].article_score * dataFetched.articles[i].social_score
                                });
                                globalArticlesOfCateg.push({
                                    name: dataFetched.articles[i].name,
                                    url: dataFetched.articles[i].url,
                                    id: dataFetched.articles[i].id,
                                    score: dataFetched.articles[i].article_score * dataFetched.articles[i].social_score
                                })
                            }

                            stats.articles.push(articlesOfCateg);


                        }).catch(err => {
                                console.log(err);
                                console.log('--- ⌛ | ' + (index + 1) + '/' + (topics.length) + ' | ❌ Failed to fetch articles for "' + topic + '"');
                            }
                        );

                        // Get  sentiments in articles
                        function compare(a, b) {
                            // Use toUpperCase() to ignore character casing
                            let comparison = 0;
                            if (a.score < b.score) {
                                comparison = 1;
                            } else if (a.score > b.score) {
                                comparison = -1;
                            }
                            return comparison;
                        }

                        // Tri sur les plus influents (score)
                        let articlesSortedByScore = globalArticlesOfCateg.sort(compare).slice(1,15);

                        let sentimentalsNeg = [];
                        console.log('--- ⌛ | ' + (index + 1) + '/' + (topics.length) + ' |  Fetch most negatives topics for "' + topic + '" (' + articlesSortedByScore.length + ')');
                        await asyncForEach(articlesSortedByScore, async (article) =>  {
                            console.log('- \r');
                            await axios({
                                url: 'https://api.dandelion.eu/datatxt/sent/v1/?lang=en&url='+ article.url +'&token=' + config.dandelion.apiKey,
                                method: 'get',
                                timeout: 1000000,
                                headers: {
                                    'Content-Type': 'application/json',
                                }
                            }).then(res => {
                                if(res.data.sentiment.score < 0){
                                    sentimentalsNeg.push({
                                        url : article.url,
                                    })
                                }
                            }).catch(err =>{
                                console.log('--- ❌ | Failed to fetch ' + article.url);
                            });
                        });
                        stats.negArticles.push(sentimentalsNeg);
                    });

                    function chunkString(str, len) {
                        let _size = Math.ceil(str.length / len),
                            _ret = new Array(_size),
                            _offset
                        ;

                        for (let _i = 0; _i < _size; _i++) {
                            _offset = _i * len;
                            _ret[_i] = str.substring(_offset, _offset + len);
                        }

                        return _ret;
                    }

                    console.log('--- ⏳ | Render & save global report');

                    // Recuperations des tendances sur cette catégorie par chunck des titres agrégées
                    console.log('--- ⏳ | Ask for globals trends');
                    let chunks = chunkString(aggregatedText, 2000);
                    await asyncForEach(chunks, async (chunk) => {
                        await axios({
                            url: 'https://api.dandelion.eu/datatxt/nex/v1/?text=' + encodeURI(chunk.slice(0, 3700).replace('-', ' ').replace(':', ' ').replace('.', ' ')) + '&include=categories&token=' + config.dandelion.apiKey,
                            method: 'get',
                            timeout: 1000000,
                        }).then(res => {
                            for (let j = 0; j < res.data.annotations.length; j++) {
                                stats.topicsInMedia.push(res.data.annotations[j].label);
                            }
                        }).catch(err => {
                                console.log(err)
                            }
                        );
                    });

                    let topicsMedia = stats.topicsInMedia.reduce(function (acc, curr) {
                        if (typeof acc[curr] === 'undefined') {
                            acc[curr] = 1;
                        } else {
                            acc[curr] += 1;
                        }
                        return acc;
                    }, {});

                    function sortProperties(obj, isNumericSort) {
                        isNumericSort = isNumericSort || false; // by default text sort
                        let sortable = [];
                        for (var key in obj)
                            if (obj.hasOwnProperty(key))
                                sortable.push([key, obj[key]]);
                        if (isNumericSort)
                            sortable.sort(function (a, b) {
                                return a[1] - b[1];
                            });
                        else
                            sortable.sort(function (a, b) {
                                var x = a[1].toLowerCase(),
                                    y = b[1].toLowerCase();
                                return x < y ? -1 : x > y ? 1 : 0;
                            });
                        return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
                    }
                    let top = sortProperties(topicsMedia, true).reverse();
                    let topicsFiltered = top.filter((el => !filterLibrary.includes(el[0]))).slice(1, 51);


                    // Recuperations des tendances negatives sur cette catégorie
                    console.log('--- ⏳ | Ask for negatives trends');
                    let gettedNetatives = stats.negArticles.flat();
                    await asyncForEach(gettedNetatives, async (articleneg) =>  {
                        console.log('--- ⌛ |  Fetch most negatives topics for ');
                        console.log(articleneg.url);
                        await axios({
                            url: 'https://api.dandelion.eu/datatxt/nex/v1/?lang=en&url='+ articleneg.url +'&token=' + config.dandelion.apiKey,
                            method: 'get',
                            timeout: 1000000,
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        }).then(res => {
                            for (let j = 0; j < res.data.annotations.length; j++) {
                                stats.negTopics.push(res.data.annotations[j].label);
                            }
                        }).catch(err => {
                            console.log(err)
                        });
                    });
                    function sortProperties(obj, isNumericSort) {
                        isNumericSort = isNumericSort || false; // by default text sort
                        let sortable = [];
                        for (var key in obj)
                            if (obj.hasOwnProperty(key))
                                sortable.push([key, obj[key]]);
                        if (isNumericSort)
                            sortable.sort(function (a, b) {
                                return a[1] - b[1];
                            });
                        else
                            sortable.sort(function (a, b) {
                                var x = a[1].toLowerCase(),
                                    y = b[1].toLowerCase();
                                return x < y ? -1 : x > y ? 1 : 0;
                            });
                        return sortable; // array in format [ [ key1, val1 ], [ key2, val2 ], ... ]
                    }
                    console.log('--- ⏳ | Prepare and store report');
                    stats.specializedRepresentation = aggregatedSpecialists*100/stats.nbArticles;
                    stats.generalistRepresentation = aggregatedGeneralists*100/stats.nbArticles;
                    stats.notation = -2 + ((3 * (aggregatedSpecialists/100)) + (3 * (aggregatedGeneralists/100)) + ( 2 *((stats.nbArticles + stats.negArticles.length )/stats.nbArticles)));
                    stats.negTopics = sortProperties(stats.negTopics, true).reverse();
                    stats.negTopics = stats.negTopics.filter((el => !filterLibrary.includes(el[1])));
                    stats.topicsInMedia = topicsFiltered;
                    store.storeData(stats);
                    console.log('--- √ | Send.');
                };
                renderStats().catch();
            }
        });


    }
};
