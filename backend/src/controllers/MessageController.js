const knex = require('../database/index');


module.exports = {
    async index(req, res) {
        const results = await knex('posts');
        return res.json(results);
    }
}