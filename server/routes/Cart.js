import express from 'express';
import bodyParser from 'body-parser';
import cartController from '../controllers/Cart.js';

const router = express.Router();
const jsonParser = bodyParser.json();

router.get('/', cartController.getCart);

router.post('/add-to-cart', jsonParser, cartController.postCart);

router.post(
	'/cart-delete-item',
	jsonParser,
	cartController.postCartDeleteProduct
);

export default router;
