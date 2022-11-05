import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<header className="main-header">
			<nav className="main-header__nav">
				<div className="main-header__item-list">
					<div className="main-header__item">
						<Link to="/">Products</Link>
					</div>
					<div className="main-header__item">
						<Link to="/add-product">Add Product</Link>
					</div>
					<div className="main-header__item">
						<Link to="/cart">Cart</Link>
					</div>
					<div className="main-header__item">
						<Link to="/orders">Orders</Link>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
