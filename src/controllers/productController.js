const fetch = require('node-fetch');

module.exports = {
    list: async (req, res) => {
        fetch("https://api.bluelytics.com.ar/v2/latest")
        .then(response => response.json())
        .then(products => {
            return res.json(products);
        })
    },
}