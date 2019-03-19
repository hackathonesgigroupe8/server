const axios = require('axios');
const config = require('./config');

module.exports = {
    getArticles: function(callback) {
        axios.get('https://api.ozae.com/gnw/articles?key='+ config.ozae.apiKey +'&edition=en-us-ny&hours=6&options[newsonfire]=1&order[col]=social_score&order[srt]=DESC')
            .then(function (response) {
                // handle success
                console.log(response);
                callback(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                callback('Error - Look the console');
            });
    },
};
