import { readFileSync, writeFileSync } from 'fs';
import path from 'path';
const directory = path.join('data', 'products.json');

const getProductsFromFile = () => {
	return JSON.parse(readFileSync(directory, 'utf8'));
};
class Products {
	constructor(id, title, imageUrl, description, price) {
		this.id = id;
		this.title = title;
		this.imageUrl = imageUrl;
		this.description = description;
		this.price = price;
	}

	save() {
		const products = getProductsFromFile();

		if (this.id) {
			const existingProductIndex = products.findIndex(
				(prod) => prod.id === this.id
			);
			const updatedProducts = [...products];
			updatedProducts[existingProductIndex] = this;

			writeFileSync(directory, JSON.stringify(updatedProducts));
		} else {
			this.id = Math.random().toString();

			products.push(this);
			writeFileSync(directory, JSON.stringify(products));
		}
	}

	static fetchAll() {
		return getProductsFromFile();
	}

	static findByID(id) {
		const products = getProductsFromFile();

		return products.find((prod) => prod.id === id);
	}
}

export default Products;
