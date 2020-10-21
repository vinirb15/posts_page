
exports.up = function (knex) {
    return knex.schema.createTable('posts', function (table) {
        table.string('id').primary()
        table.text('message').notNullable()
        table.string('postId').notNullable()
        table.string('comment').notNullable()
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('posts')
};