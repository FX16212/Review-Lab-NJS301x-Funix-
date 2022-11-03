import axios from 'axios';
import { useEffect, useState } from 'react';

const Products = () => {
	const [productList, setProductList] = useState([]);
	const url = 'http://localhost:8080/api/products';

	useEffect(() => {
		const fetchApi = async () => {
			axios.get(url).then((res) => setProductList(res.data));
		};
		fetchApi();
	}, []);

	return (
		<div>
			{productList.length > 0 ? (
				productList.map((product, index) => {
					return (
						<div className="grid" key={index}>
							<div className="card product-item">
								<div className="card__header">
									<h1 className="product__title">{product.title}</h1>
								</div>
								<div className="card__image">
									<img src={product.imageUrl} alt="" />
								</div>
								<div className="card__content">
									<h2 className="product__price">${product.price}</h2>
									<p className="product__description">{product.description}</p>
								</div>
								<div className="card__actions">
									<button className="btn">Add to Cart</button>
								</div>
							</div>
						</div>
					);
				})
			) : (
				<h1>No Product</h1>
			)}
		</div>
	);
};

export default Products;
