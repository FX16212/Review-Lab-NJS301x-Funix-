import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const Cart = () => {
	const url = 'http://localhost:8080/api/cart';
	const url2 = 'http://localhost:8080/api/cart/cart-delete-item';
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const fetchApi = () => {
			axios.get(url).then((res) => setCart(res.data.products));
		};
		fetchApi();
	}, []);

	const handleDelete = (id) => {
		axios
			.post(url2, { productId: id })
			.then((res) => setCart(res.data.products));
	};

	return (
		<main>
			<ul>
				{cart.length > 0 ? (
					cart.map((item) => {
						return (
							<li key={item.productData.id}>
								<p>
									{item.productData.title} - {item.qty}
								</p>
								<button
									className="btn"
									type="submit"
									style={{ margin: '10px' }}>
									Edit
								</button>
								<button
									className="btn"
									type="submit"
									onClick={() => handleDelete(item.productData.id)}>
									Delete
								</button>
							</li>
						);
					})
				) : (
					<h1>No Products in Cart!</h1>
				)}
			</ul>
		</main>
	);
};

export default Cart;
