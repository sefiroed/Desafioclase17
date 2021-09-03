import {getConnectionManager, ConnectionManager, Connection, ConnectionOptions} from "typeorm";
import { Productos } from "../entities/productos.entity";

//Inicializamos nuestra base de datos MYSQL

export const config: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 8889,
    username: "root",
    password: "root",
    database: "myapp_test",
    entities: [
        Productos
    ],
    synchronize: true,
    logging: true
}





// export class ConnectionDB {
//     connection: Connection
//     constructor(){
//         const connectionManager = new ConnectionManager();
//         this.connection = connectionManager.create({
//             type: "mysql",
//             host: "localhost",
//             port: 8889,
//             username: "root",
//             password: "root",
//             database: "test",
//         });
//     } 

//     async connect(){
//         try {
//             await this.connection.connect(); // performs connection
//             console.log('Connect database sucessfull')
//         } catch (error) {
//             console.log('Error while try to connect database')
//             throw new Error()
//         }
//     }
// }