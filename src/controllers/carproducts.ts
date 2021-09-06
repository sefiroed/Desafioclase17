import {Request, Response} from 'express';
import {carProductsPersistence} from '../persistence/carproducts';

class CarProduct {
  
  getProductsCar (req : Request, res : Response) {
    const id = Number(req.params.id);
    const product = carProductsPersistence.get(id);
    if(id){
      console.log(product);
      if(!product){
        return res.status(404).json({
          msg: "Product not found"
        })
      }else{   
        res.json({product})
      }     
      return res.status(404).json({
        msg: "ID invalidate"
      })
    }
    if (product.length < 1) {
      return res.status(400).json({
        error: 'No products loaded',
      });
    }
    res.json({
      data: carProductsPersistence.get()
    })
    
  }
  

  addProductsCar (req : Request, res : Response) {  
    const body = req.body;
    const product = carProductsPersistence.add(body);

    if (!product) {
      return res.status(400).json({
        msg: 'Product invalidate',
      });
    } else {
      res.json({
        data: product,
      });
    }
      
  }

  deleteProductsCar (req : Request, res : Response) {
    const id = String(req.params.id);
    const product = carProductsPersistence.find(id);

    if(!product){
      return res.status(404).json({
        msg: "Product not found",
      })
    }

    carProductsPersistence.delete(id);
    res.json({
      msg: "Product deleted",
    })
  }
}


export const carProductsController = new CarProduct();