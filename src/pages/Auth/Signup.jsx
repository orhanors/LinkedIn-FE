import React, { useState } from "react";
import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import equals from "validator/lib/equals";
import isEmpty from "validator/lib/isEmpty";
import { signup } from "../../api/auth";
import "./auth.scss";
const Login = () => {
	const [formData, setFormData] = useState({
		username: "",
		name: "",
		surname: "",
		email: "",
		password: "",
		password2: "",
		successMsg: false,
		errorMsg: false,
	});

	const {
		username,
		name,
		surname,
		email,
		password,
		password2,
		successMsg,
		errorMsg,
	} = formData;

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
			errorMsg: "",
			successMsg: "",
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		//Validate inputs

		if (
			isEmpty(email) ||
			isEmpty(username) ||
			isEmpty(password) ||
			isEmpty(password2)
		) {
			setFormData({
				...formData,
				errorMsg: "All fields are required",
				successMessage: "",
			});
		} else if (!isEmail(email)) {
			setFormData({
				...formData,
				errorMsg: "Invalid Email!",
				successMessage: "",
			});
		} else if (!equals(password, password2)) {
			setFormData({
				...formData,
				errorMsg: "Passwords are not same",
				successMessage: "",
			});
		} else {
			let { name, surname, username, email, password } = formData;
			let body = { name, surname, username, email, password };

			const response = await signup(body);
			if (response.errors) {
				setFormData({
					...formData,
					errorMsg: response.errors,
					successMsg: "",
				});
			} else {
				setFormData({
					name: "",
					surname: "",
					username: "",
					email: "",
					password: "",
					password2: "",
					errorMsg: "",
					successMsg: "Successfully created! Please login",
				});
			}
		}
	};

	const showSignupForm = () => {
		return (
			<div class='d-flex flex-column mt-4'>
				<div className='login-input-wrap mb-4'>
					<p className='login-label mb-0'>Name</p>
					<input
						type='text'
						name='name'
						onChange={handleChange}
						value={name}></input>
				</div>

				<div className='login-input-wrap mb-4'>
					<p className='login-label mb-0'>Surname</p>
					<input
						type='text'
						name='surname'
						onChange={handleChange}
						value={surname}></input>
				</div>

				<div className='login-input-wrap mb-4'>
					<p className='login-label mb-0'>Username</p>
					<input
						type='text'
						name='username'
						onChange={handleChange}
						value={username}></input>
				</div>
				<div className='login-input-wrap mb-4'>
					<p className='login-label mb-0'>Email</p>
					<input
						type='email'
						name='email'
						onChange={handleChange}
						value={email}></input>
				</div>
				<div className='login-input-wrap mb-2'>
					<p className='login-label mb-0'>Password</p>
					<input
						type='password'
						name='password'
						onChange={handleChange}
						value={password}></input>
				</div>

				<div className='login-input-wrap mb-2'>
					<p className='login-label mb-0'>Confirm Password</p>
					<input
						type='password'
						name='password2'
						onChange={handleChange}
						value={password2}></input>
				</div>

				{errorMsg && (
					<small className='mb-2 mt-0 text-danger text-center'>
						{errorMsg}
					</small>
				)}

				{successMsg && (
					<small className='mb-2 mt-0 text-success text-center'>
						{successMsg}
					</small>
				)}
				<hr />

				<button onClick={handleSubmit} className='sign-in-btn'>
					Sign up
				</button>

				<div className='text-center'>
					<p className='mt-2'>
						Already have an account?{" "}
						<Link to='/auth/login' className='font-weight-bold'>
							Login
						</Link>
					</p>
				</div>
			</div>
		);
	};

	return (
		<div
			id='login-main-container'
			className='d-flex flex-column justify-content-center align-items-center'>
			<div>
				<div className='login-top-container d-flex align-items-center justify-content-start'>
					<div className='login-title d-flex mb-3'>
						<h4>Linked</h4>
						<i className='fab fa-linkedin ml-1'></i>
					</div>
				</div>
				<div className='signup-content-container mb-5'>
					<div className='mb-4'>
						<h2 className='mb-1'>Sign up</h2>
						<p className='mb-0'>
							Become a member of LinkedIn family
						</p>
					</div>
					{showSignupForm()}
				</div>
			</div>
		</div>
	);
};

export default Login;
