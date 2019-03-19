
module.exports = {
    countries : [{"name" : "France", "code" : "FR"}, {"name" : "Spain", "code" : "ES"}, {"name" : "Germany", "code" : "DE"}, {"name" : "Italy", "code" : "IT"},{"name" : "Portugal", "code" : "PT"}, {"name" : "Great Britain", "code" : "GB"}],
    get: function(callback) {
        callback(this.countries);
    },
};
