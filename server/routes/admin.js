import express from 'express';
import bodyParser from 'body-parser';
import adminController from '../controllers/admin.js';

const router = express.Router();
const jsonParser = bodyParser.json();

router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);

router.post('/add-product', jsonParser, adminController.postAddProduct);

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', jsonParser, adminController.postEditProduct);

router.post('/delete-product', jsonParser, adminController.postDeleteProduct);

export default router;
