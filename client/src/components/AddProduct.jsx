import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
	const url = 'http://localhost:8080/api/products/add-product';
	const [title, setTitle] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');

	const handleSubmit = () => {
		axios
			.post(url, {
				product: {
					title,
					description,
					imageUrl,
					price,
				},
			})
			.then((res) => console.log(res.data));
	};

	return (
		<div className="product-form">
			<div className="form-control">
				<label htmlFor="title">Title</label>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<label htmlFor="Image Url">Image Url</label>
				<input
					type="text"
					value={imageUrl}
					onChange={(e) => setImageUrl(e.target.value)}
				/>

				<label htmlFor="price">Price</label>
				<input
					type="text"
					name={price}
					onChange={(e) => setPrice(e.target.value)}
				/>

				<label htmlFor="description">Description</label>
				<textarea
					type="text"
					name={description}
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>
			<button className="btn btn-success" type="submit" onClick={handleSubmit}>
				Add Product
			</button>
		</div>
	);
};

export default AddProduct;
