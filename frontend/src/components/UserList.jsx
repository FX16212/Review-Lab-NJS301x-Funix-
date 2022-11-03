import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const AddUser = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:5000/api/user').then((res) => {
			setUsers(res.data);
		});
	}, []);

	return (
		<ul>
			{users.map((user, index) => {
				return <li key={index}>{user}</li>;
			})}
		</ul>
	);
};

export default AddUser;
