const storage = require('node-persist');
const datasets = require('../datasets/index.js');

module.exports = {

    getDataset: function (dataset, callback) {
        callback(datasets.getDataset(dataset));
    },
    initRequest: function(code, datasetObj, callback){
        console.log('-- Request for : ' + code + ' with the dataset ' + datasetObj.name);
        let result = {
            notation: 0,
            nbArticles: 234434,
            specializedRepresentation: 3,
            generalistRepresentation: 1,
            topicsInMedia: ['Biodiversity', 'Blabla', 'Test'],
            topicsRepresentation: [{'Biodiversity' : 3 },{'Biodiversity' : -3 }],
            negativeQuotedEnterprises: ['Bayer', 'Gouvernement Francais', 'Total'],
            positiveQuotedEnterprises: ['WWF', 'Toto', 'Titi']
        };
        callback(result);
    }

};
