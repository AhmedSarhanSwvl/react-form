import { useReducer } from 'react';
import './App.css';

const initialValues = {
	name: '',
	email: '',
	phone: '',
	password: '',
	confirmPassword: '',
	city: '',
	zipCode: '',
};
const reducerFunction = (prevState, newState) => {
	return { ...prevState, ...newState };
};
function App() {
	const [formValues, setFormValues] = useReducer(
		reducerFunction,
		initialValues
	);

	const onChangeHandler = (event) => {
		const { name, value } = event.target;
		setFormValues({ [name]: value });
	};

	const {
		name,
		email,
		phone,
		password,
		confirmPassword,
		city,
		zipCode,
	} = formValues;
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
					<label htmlFor="name">Username</label>
					<input
						type="text"
						name="name"
						value={name}
						onChange={onChangeHandler}
					/>
				</div>
				<div className="two-col_grid">
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							name="email"
							value={email}
							onChange={onChangeHandler}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="phone">Phone</label>
						<input
							type="tel"
							name="phone"
							value={phone}
							onChange={onChangeHandler}
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
							onChange={onChangeHandler}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input
							type="password"
							name="confirmPassword"
							value={confirmPassword}
							onChange={onChangeHandler}
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
							onChange={onChangeHandler}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="zipCode">Zip Code</label>
						<input
							type="text"
							name="zipCode"
							value={zipCode}
							onChange={onChangeHandler}
						/>
					</div>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default App;
