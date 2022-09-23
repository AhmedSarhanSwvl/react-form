import { useState } from 'react';
import './App.css';

function App() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [city, setCity] = useState('');
	const [zipCode, setZipCode] = useState('');

	const submitForm = (e) => {
		e.preventDefault();

		const data = {
			name,
			email,
			phone,
			password,
			confirmPassword,
			city,
			zipCode,
		};
		console.log('data', data);
	};
	return (
		<div className="App" onSubmit={submitForm}>
			<form>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="two-col_grid">
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="phone">Phone</label>
						<input
							type="tel"
							name="phone"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
					</div>
				</div>
				<div className="two-col_grid">
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input
							type="password"
							name="confirmPassword"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
				</div>
				<div className="two-col_grid">
					<div className="form-group">
						<label htmlFor="city">City</label>
						<input
							type="text"
							name="city"
							value={city}
							onChange={(e) => setCity(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="zipCode">Zip Code</label>
						<input
							type="text"
							name="zipCode"
							value={zipCode}
							onChange={(e) => setZipCode(e.target.value)}
						/>
					</div>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default App;
