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

const getEditProduct = (req, res, next) => {
	const editMode = req.query.edit;

	if (!editMode) {
		return res.status(404).json({ msg: 'Not Edit Mode' });
	}
	const prodId = req.params.productId;
	const product = products.findByID(prodId);

	res.json({
		editing: editMode,
		product: product,
	});
};

const postEditProduct = (req, res, next) => {
	const prodId = req.body.productId;
	const updatedTitle = req.body.title;
	const updatedPrice = req.body.price;
	const updatedImageUrl = req.body.imageUrl;
	const updatedDesc = req.body.description;
	const updatedProduct = new Product(
		prodId,
		updatedTitle,
		updatedImageUrl,
		updatedDesc,
		updatedPrice
	);
	updatedProduct.save();
};
const postDeleteProduct = (req, res, next) => {
	const prodId = req.body.productId;
	Product.deleteById(prodId);
	res.redirect('/admin/products');
};

export default {
	getAddProduct,
	postAddProduct,
	getProducts,
	getEditProduct,
	postEditProduct,
	postDeleteProduct,
};
