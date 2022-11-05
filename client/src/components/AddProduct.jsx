import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
	const url = 'http://localhost:8080/api/admin/add-product';
	const [title, setTitle] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');

	const navigate = useNavigate();

	const handleSubmit = () => {
		axios.post(url, {
			title,
			description,
			imageUrl,
			price,
		});
		navigate('/products');
	};

	return (
		<main>
			<form className="product-form">
				<div className="form-control">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="Image Url">Image Url</label>
					<input
						type="text"
						value={imageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="price">Price</label>
					<input
						type="text"
						name={price}
						onChange={(e) => setPrice(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="description">Description</label>
					<textarea
						type="text"
						name={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				<button className="btn" type="submit" onClick={handleSubmit}>
					Add Product
				</button>
			</form>
		</main>
	);
};

export default AddProduct;
