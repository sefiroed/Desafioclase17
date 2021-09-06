
exports.up = function(knex) {
    return knex.schema
        .createTable('productos', (productosTable) => {
            productosTable.increments();
            productosTable.string('nombre').notNullable();
            productosTable.integer('precio').notNullable();
            productosTable.string('url').notNullable();
        });
};

exports.down = function(knex) {
    return knex.schema.dropTable('productos');
};
