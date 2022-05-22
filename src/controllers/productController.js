const fetch = require('node-fetch');

module.exports = {
    list: async (req, res) => {
        fetch("https://api.coinbase.com/v2/prices/spot?currency=USD")
        .then(response => response.json())
        .then(products => {
            return res.json(products);
        })
    },
}