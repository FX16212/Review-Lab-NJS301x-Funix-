import express from 'express';
import ProductsController from '../controllers/Products.controller.js';
import bodyParser from 'body-parser';

const router = express.Router();
const jsonParser = bodyParser.json();
const products = [];

// router.get('/', ProductsController.getAllProducts);

router.post('/add-product', jsonParser, (req, res) => {
	products.push(req.body.product);
});

router.get('/', (req, res) => {
	res.json(products);
});

export default router;
