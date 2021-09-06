import {Router} from 'express';
import { carProductsController } from '../controllers/carproducts';

const router = Router();

router.get('/', carProductsController.getProductsCar)
router.get('/:id', carProductsController.getProductsCar)
router.post('/', carProductsController.addProductsCar)
router.delete('/:id', carProductsController.deleteProductsCar)

export default router;