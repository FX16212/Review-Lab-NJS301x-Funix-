import Products from '../models/Products.model.js';

const getAllProducts = (req, res) => {
	const products = Products.fetchAll();
	res.json({
		products: products,
		pageTitle: 'All Products',
	});
};

const getProduct = (req, res) => {
	const prodId = req.params.productId;
	const product = Products.findById(prodId);
	return res.json({
		product: product,
		pageTitle: product.title,
	});
};

export default {
	getAllProducts,
	getProduct,
};
