import React, { useState } from 'react';
import axios from 'axios';
import UserList from './UserList';

const Home = () => {
	const url = 'http://localhost:5000/api/add-user';
	const [name, setName] = useState('');

	const handleSubmit = (e) => {
		axios.post(url, {
			name: name,
		});
	};

	return (
		<div className="container">
			<div className="container__item">
				<form className="form" onSubmit={handleSubmit}>
					<input
						type="test"
						value={name}
						className="form__field"
						placeholder="Enter Username"
						onChange={(e) => setName(e.target.value)}
					/>
					<button
						type="submit"
						className="btn btn--primary btn--inside uppercase">
						Send
					</button>
				</form>
			</div>
			<UserList />
		</div>
	);
};

export default Home;
