import { readFileSync, readFile, writeFile } from 'fs';
import path from 'path';
const directory = path.join('data', 'cart.json');

class Cart {
	static getCart() {
		return JSON.parse(readFileSync(directory, 'utf8'));
	}

	static addProduct(id, productPrice) {
		readFile(directory, (err, fileContent) => {
			let cart = { products: [], totalPrice: 0 };
			if (!err) {
				cart = JSON.parse(fileContent);
			}

			const existingProductIndex = cart.products.findIndex(
				(prod) => prod.id === id
			);

			const existingProduct = cart.products[existingProductIndex];

			let updatedProduct;

			if (existingProduct) {
				updatedProduct = { ...existingProduct };
				updatedProduct.qty = updatedProduct.qty + 1;
				cart.products = [...cart.products];
				cart.products[existingProductIndex] = updatedProduct;
			} else {
				updatedProduct = { id: id, qty: 1 };
				cart.products = [...cart.products, updatedProduct];
			}
			cart.totalPrice = cart.totalPrice + +productPrice;
			writeFile(directory, JSON.stringify(cart), (err) => {
				console.log(err);
			});
		});
	}
}

export default Cart;
