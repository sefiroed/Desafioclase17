import knex from 'knex';

export const sqliteDB = knex({
    client: 'sqlite3',
    connection: { filename: './mydb.sqlite' }, 
    useNullAsDefault: true 
});

  
  
sqliteDB.schema.hasTable('mensajes').then((exists) => {
if (!exists) {
    console.log('NO EXISTE LA TABLA MENSAJE. VAMOS A CREARLA');
    sqliteDB.schema
    .createTable('mensajes', (table) => {
        table.increments();
        table.string('email');
        table.string('date');
        table.string('text');
    })
    .then(() => {
        console.log('DONE');
    });
}
});
  
export const mySQLDB = knex({
client: 'mysql',
connection: {
    host: '127.0.0.1',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'myapp_test',
},
pool: { min: 0, max: 7 },
});

mySQLDB.schema.hasTable('productos').then((exists) => {
if (!exists) {
    console.log('NO EXISTE LA TABLA productos. VAMOS A CREARLA');
    mySQLDB.schema
    .createTable('productos', (productosTable) => {
        productosTable.increments();
        productosTable.string('nombre').notNullable();
        productosTable.integer('precio').notNullable();
        productosTable.string('url').notNullable();
    })
    .then(() => {
        console.log('DONE');
    });
}
});
  
export const productosTable = mySQLDB.from('productos');