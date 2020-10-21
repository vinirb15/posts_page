
exports.up = function (knex) {
    return knex.schema.createTable('posts', function (table) {
        table.increments('id').primary()
        table.string('message', 253).notNullable()
    }).then(function () {
        return knex.schema.createTable('comments', function (table) {
            table.increments('id').primary();
            table.string('comment', 253).notNullable();
            table.integer('postId', 20).unsigned().references('id').inTable('posts');
        });
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('posts')
};