const knex = require('../database/index');


module.exports = {
    async index(req, res) {
        const results = await knex('posts')
        .orderBy('id', 'desc')
        return res.json(results)
    },

    async single(req, res, next) {
        const { id } = req.params
        try {
            const results = await knex('posts')
                .select('*')
                .where('id', id)
            return res.json(results)
        } catch (error) {
            next(error)
        }
    },

    async find(req, res, next) {
        try {
            const { title } = req.params
            const results = await knex('posts')
                .select('*')
                .where('message', 'like', '%'+title+'%')
            return res.json(results)
        } catch (error) {
            next(error);
        }
    },

    async create(req, res, next) {
        const { message } = req.body

        try {
            await knex('posts')
            .insert({
                message
            })
            return res.status(201).send()

        } catch (error) {
            next(error)
        }
    },

    async comments(req, res) {
        const { id } = req.params

        const results = await knex('comments')
        .join('posts', 'posts.id', '=', 'comments.postId')
        .select('comments.*')
        .where('posts.id', id)
        .orderBy('comments.id', 'asc')
        return res.json(results)
    },

    async createMenssage(req, res, next) {
        const { id } = req.params
        const { comment } = req.body

        try {
            await knex('comments')
            .insert({
                postId: id,
                comment
            })
            return res.status(201).send()

        } catch (error) {
            next(error)
        }
    },
}