const fetch = require('node-fetch');

module.exports = {
    list: async (req, res) => {
        fetch('http://localhost:3080/api/products')
        .then(response => response.json())
        .then(products => {
            return res.json(products);
        })
    },
}