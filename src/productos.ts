/*Creamos nuestra clase con los metodos a utilizar 
en la carpeta index.js*/
import {getRepository} from "typeorm";
import { Productos } from "./entities/productos.entity";



class Producto {
  public productos:any;
  constructor() {
    //this.productos = getRepository(Productos);
  }
  async leer() {
    const productoRepo = getRepository(Productos);
    const productos = await productoRepo.find()
    return productos;
  }
  async leerPorId(id:number) {
    const productoRepo = getRepository(Productos);
    const producto = await productoRepo.findOne(id)
    return producto;
  }
  async guardar(dato:any) {
    const productoRepo = getRepository(Productos);
    const producto = new Productos();
    producto.nombre = dato.nombre;
    producto.precio = dato.precio;
    producto.url = dato.url;

    await productoRepo.save(producto)
    return producto;
  }  
  async actualizar(dato:any, id:any){
    const productoRepo = getRepository(Productos);
    const producto = await productoRepo.findOne(id)
    if(!producto){
      return {"error": "Producto no ha sido encontrado"};
    }    
    producto.nombre = dato.nombre;
    producto.precio = dato.precio;
    producto.url = dato.url;

    await productoRepo.save(producto)
    return producto
    
  }

  async borrar(id:any) {
    const productoRepo = getRepository(Productos);
    const producto = await productoRepo.findOne(id)
    if(!producto){
      return {"error": "Producto no ha sido encontrado"};
    }    
    
    await productoRepo.delete(producto);
    return producto
  } 
    
}


export default Producto;
