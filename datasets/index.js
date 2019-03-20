const config = require('../config.js');
const eea_ip_2018 = require('./eea_ip_2018.js');


module.exports = {
    getDataset: function (dataset) {
        if(config.datasets.includes(dataset)){
            /**
             * Add the cases in the dataset
             */
            let data;
            switch (dataset) {
                case 'eea_ip_2018' :
                     data = eea_ip_2018.dataset;
            }
            return data;
        }
    }
};