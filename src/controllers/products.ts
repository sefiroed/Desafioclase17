import {Request, Response, NextFunction} from 'express';
// import { request } from 'node:https';
import {productsPersistence} from '../persistence/products';


class Product {
  
  getProducts (req : Request, res : Response) {
    const id = Number(req.params.id);
    const product = productsPersistence.get(id);
    if(id){
      if(!product){
        return res.status(404).json({
          msg: "Product not found",
        })
      }else{   
        res.json({product})
      }
      return res.status(404).json({
        msg: "ID invalidate",
      })
    }
    if (product.length < 1) {
      return res.status(400).json({
        error: 'No products loaded',
      });
    }
    res.json({
      data: productsPersistence.get()
    })
    
  }

  checkAddProducts(req: Request, res: Response, next: NextFunction) {
    const { name, description, codeproduct, url, price, stock } = req.body
    let params = false;
    if (name === undefined) {
      return params;
    }

    if (description === undefined) {
        return params;
    }

    if (isNaN(price)) {
        return params;
    }

    if (isNaN(codeproduct)) {
        return params;
    }

    if (url === undefined) {
        return params;
    }

    if (isNaN(stock)) {
        return params;
    }

    params = true;

    next();
  }

  addProducts (req : Request, res : Response) {
    
    const body = req.body;
    const product = productsPersistence.add(body);

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

  updateProducts (req : Request, res : Response) {
    const body = req.body;
    const id = req.params.id;
    const newItem = productsPersistence.update(id,body);
    const product = productsPersistence.find(id);
    if(!product){
      return res.status(200)
      .json({ 
        msg: "Product not found",
      })
    }

    res.json({
      msg: "Update products",
      data: newItem
    })
  }

  deleteProducts (req : Request, res : Response) {
    const id = String(req.params.id);
    const product = productsPersistence.find(id);

    if(!product){
      return res.status(404).json({
        msg: "Product not found",
      })
    }

    productsPersistence.delete(id);
    res.json({
      msg: "Product deleted",
    })
  }
}


export const productsController = new Product();