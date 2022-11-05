import Product from '../models/Products.model.js';

const getAddProduct = (req, res) => {
	res.json({ editing: false });
};

const postAddProduct = (req, res) => {
	const title = req.body.title;
	const imageUrl = req.body.imageUrl;
	const price = req.body.price;
	const description = req.body.description;
	const product = new Product(null, title, imageUrl, description, price);
	product.save();
};

const getProducts = (req, res) => {
	const products = Product.fetchAll();
	res.json(products);
};

export default {
	getAddProduct,
	postAddProduct,
	getProducts,
};
