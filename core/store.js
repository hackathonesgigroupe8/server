let store = require('json-fs-store')('./cache/');

module.exports = {
    getStoredData: function (code, datasetId, callback) {
        store.load(code + '_' + datasetId, function (err, object) {
            if (err) {
                callback(false);
            }
            callback(object);
        });
    },
    storeData: function (res) {
        store.add(res, function (err) {
            // called when the file has been written
            // to the /path/to/storage/location/12345.json
            if (err) throw err; // err if the save failed
        });
    }
};
