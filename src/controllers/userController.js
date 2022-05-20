const fetch = require('node-fetch');

module.exports = {
    list: async (req, res) => {
        fetch('http://localhost:3080/api/users')
        .then(response => response.json())
        .then(users => {
            return res.json(users);
        })
    },
}