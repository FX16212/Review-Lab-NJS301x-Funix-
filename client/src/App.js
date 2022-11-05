import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Products from './components/Products';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Products />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/add-product" element={<AddProduct />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
