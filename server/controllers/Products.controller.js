import Products from '../models/Products.model.js';

const getAllProducts = (req, res) => {
	res.json(Products);
};

export default {
	getAllProducts,
};
