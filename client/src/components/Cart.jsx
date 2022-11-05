import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const Cart = () => {
	const url = 'http://localhost:8080/api/cart';
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const fetchApi = () => {
			axios.get(url).then((res) => setCart(res.data.products));
		};
		fetchApi();
	}, []);

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
								<button className="btn" type="submit">
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
