import React, { useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import equals from "validator/lib/equals";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg, showSuccessMsg } from "../../helpers/message";
import { signup } from "../../api/auth";

import "./auth.scss";

function Signup(props) {
	const [formData, setFormData] = useState({
		username: "",
		name: "",
		surname: "",
		email: "",
		password: "",
		password2: "",
		successMsg: false,
		errorMsg: false,
		loading: false,
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
		loading,
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
					username: "",
					email: "",
					password: "",
					password2: "",
					errorMsg: "",
					successMsg: "Successfully created",
				});
			}
		}
	};
	const showSignupFrom = () => {
		return (
			<Form onSubmit={handleSubmit} noValidate>
				<Form.Group controlId='formGroupText'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						onChange={handleChange}
						name='name'
						value={name}
						type='text'
						placeholder='Name'
					/>
				</Form.Group>

				<Form.Group controlId='formGroupText2'>
					<Form.Label>Surname</Form.Label>
					<Form.Control
						onChange={handleChange}
						name='surname'
						value={surname}
						type='text'
						placeholder='Surname'
					/>
				</Form.Group>

				<Form.Group controlId='formGroupText3'>
					<Form.Label>Username</Form.Label>
					<Form.Control
						onChange={handleChange}
						name='username'
						value={username}
						type='text'
						placeholder='Username'
					/>
				</Form.Group>
				<Form.Group controlId='formGroupEmail'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						onChange={handleChange}
						name='email'
						value={email}
						type='email'
						placeholder='example@xyz.com'
					/>
				</Form.Group>
				<Form.Group controlId='formGroupPassword'>
					<Form.Label>Password</Form.Label>

					<Form.Control
						onChange={handleChange}
						name='password'
						value={password}
						type='password'
						placeholder='Password'
					/>
				</Form.Group>
				<Form.Group controlId='formGroupPassword2'>
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						onChange={handleChange}
						name='password2'
						value={password2}
						type='password'
						placeholder='Confirm Password'
					/>
				</Form.Group>
				<button className='mb-2 auth-btn' type='submit'>
					SignUp
				</button>
			</Form>
		);
	};

	return (
		<div className='signup-form'>
			<Container>
				<h3 className='text-center'>Signup</h3>

				<Row>
					<Col md={12}>{showSignupFrom()}</Col>
					{errorMsg && (
						<Col md={12} className='mt-3'>
							{showErrorMsg(errorMsg)}
						</Col>
					)}
					{successMsg && (
						<Col md={12} className='mt-3'>
							{showSuccessMsg(successMsg)}
						</Col>
					)}
					<Col md={12}>
						<p className='sub-info'>
							Already Have an account?
							<span>
								{"  "}
								<Link to='/auth/login'>Login</Link>
							</span>
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Signup;
