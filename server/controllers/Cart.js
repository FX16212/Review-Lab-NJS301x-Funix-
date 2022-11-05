import Cart from '../models/Cart.js';
import Products from '../models/Products.model.js';

const getCart = (req, res) => {
	const cart = Cart.getCart();

	const products = Products.fetchAll();

	let cartProducts = [];

	for (let product of products) {
		const cartProductData = cart.products.find((prod) => {
			return prod.id === product.id;
		});
		if (cartProductData) {
			cartProducts.push({ productData: product, qty: cartProductData.qty });
		}
	}

	res.status(200).json({ pageTitle: 'Your Cart', products: cartProducts });
};

const postCart = (req, res) => {
	const prodId = req.body.productId;

	const product = Products.findByID(prodId);

	if (prodId) {
		const productPrice = product.price;
		Cart.addProduct(prodId, productPrice);
	}
};

export default {
	getCart,
	postCart,
};
