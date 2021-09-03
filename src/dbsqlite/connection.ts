import knex from 'knex';

export const sqliteDB = knex({
    client: 'sqlite3',
    connection: { filename: './midbligera.sqlite' },
    useNullAsDefault: true,
  });


sqliteDB.schema.hasTable('cars').then((exists) => {
    if (!exists) {
        console.log('NO EXISTE LA TABLA CARS. VAMOS A CREARLA');
        sqliteDB.schema
        .createTable('cars', (table) => {
            table.increments('id');
            table.string('name');
            table.integer('año');
        })
        .then(() => {
            console.log('DONE');
        });
    }
});