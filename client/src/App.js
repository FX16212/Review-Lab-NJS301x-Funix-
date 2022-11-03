import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Products />} />
					<Route path="/add-product" element={<AddProduct />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
