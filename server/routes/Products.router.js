import express from 'express';
import ProductsController from '../controllers/Products.controller.js';

const router = express.Router();

router.get('/', ProductsController.getAllProducts);

router.get('/:productId', ProductsController.getProduct);

export default router;
