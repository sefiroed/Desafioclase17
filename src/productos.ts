/*Creamos nuestra clase con los metodos a utilizar 
en la carpeta index.js*/
import {getRepository} from "typeorm";
import { Productos } from "./entities/productos.entity";
import {Producto} from './entities/formatoknex'
import { mySQLDB } from './db/connectionsknex';




class ProductosPersistencia {
  constructor() {
    //this.productos = getRepository(Productos);
  }
  async leer() {
    const producto: Producto[] = await mySQLDB.from('productos').select();
    return producto;
  }
  async leerPorId(id:number) {
    const producto: Producto[] = await mySQLDB
    .from('productos')
    .where('id','=',id)
    .limit(1)
    .select();
    if(producto.length > 0){
      return producto[0];
    }
    return undefined;
  }
  async guardar(dato:any) {
    
    const producto: Producto = {
      nombre: dato.nombre,
      precio: dato.precio,
      url: dato.url
    };


    await mySQLDB.from('productos').insert(producto);
    return producto;
  }  
  async actualizar(dato:any, id:any){
    
    const existProducto: Producto[] = await mySQLDB
    .from('productos')
    .where('id','=',id)
    .limit(1)
    .select();

    if(existProducto.length === 0){
      return {"error": "Producto no ha sido encontrado"};
    }    
    const producto: Producto = {
      nombre: dato.nombre,
      precio: dato.precio,
      url: dato.url
    };

    // await productoRepo.save(producto)
    await mySQLDB
    .from('productos')
    .where('id','=',id)
    .update(producto);

    return producto
    
  }

  async borrar(id:any) {
    const producto: Producto[] = await mySQLDB
    .from('productos')
    .where('id','=',id)
    .limit(1)
    .select();
    
    if(!producto){
      return {"error": "Producto no ha sido encontrado"};
    }    
    
    await mySQLDB
    .from('productos')
    .where('id','=',id)
    .del();
    return producto
  } 
    
}


export default ProductosPersistencia;
