import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
	const [productList, setProductList] = useState([]);
	const url1 = 'http://localhost:8080/api/products';
	const url2 = 'http://localhost:8080/api/cart/add-to-cart';

	useEffect(() => {
		const fetchApi = () => {
			axios.get(url1).then((res) => setProductList(res.data.products));
		};
		fetchApi();
	}, []);

	const navigate = useNavigate();

	const addToCart = (id) => {
		axios.post(url2, { productId: id });
		navigate('/cart');
	};

	return (
		<div>
			{productList.length > 0 ? (
				productList.map((product) => {
					return (
						<div className="grid" key={product.id}>
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
									<button className="btn">Detail</button>
									<button className="btn" onClick={() => addToCart(product.id)}>
										Add to Cart
									</button>
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
