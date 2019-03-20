const axios = require('axios');

module.exports = {
    toLang: function (source, lang) {
        axios.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=EN&tl=" + lang + "&dt=t&q=" + encodeURI(source))
            .then(function (response) {
                return response.data[0][0][0];
            })
    }
};