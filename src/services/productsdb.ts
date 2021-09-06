import { mySQLDB } from './db';

class ProductosPersistenciaDB {
  async getAll() {
    return mySQLDB.from('productos').select();
  }

  async get(id:number) {
    return mySQLDB.from('productos').where({ id: id }).select();
  }

  async add(data:string) {
    return mySQLDB('productos').insert(data);
  }

  async update(id:number, data:any) {
    return mySQLDB.from('productos').where({ id }).update(data);
  }

  async delete(id:number) {
    return mySQLDB.from('productos').where({ id }).del();
  }

  async query(query:any) {
    return mySQLDB.from('productos').where(query);
  }
}

export const ProductsDB = new ProductosPersistenciaDB();
