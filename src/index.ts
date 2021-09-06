import Server from './services/server';
import { ProductsDB } from '../src/services/productsdb';

const port = process.env.PORT || 8000;

Server.listen(port, () => console.log(`Server up port: ${port}`))


ProductsDB.getAll().then((data) => console.log(data));


