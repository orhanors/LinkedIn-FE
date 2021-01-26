import React, { useEffect, useState } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import { showErrorMsg } from "../../helpers/message";
import { signin } from "../../api/auth";
import { isAuthenticated, setAuth } from "../../helpers/auth";
import "./auth.scss";

function Login(props) {
	let history = useHistory();

	//If the user is logged in, dont redirect him to signin page
	useEffect(() => {
		if (isAuthenticated()) {
			//if admin tries to go to signin page even if he logged in, redirect him to admin page
			history.push("/");
		}
	}, [history]);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		errorMsg: false,
		loading: false,
	});

	const { email, password, errorMsg, loading } = formData;

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

		if (isEmpty(email) || isEmpty(password)) {
			setFormData({
				...formData,
				errorMsg: "All fields are required",
			});
		} else if (!isEmail(email)) {
			setFormData({
				...formData,
				errorMsg: "Invalid Email!",
			});
		} else {
			let { username, email, password } = formData;
			let body = { username, email, password };

			//If there is an error incoming response
			signin(body)
				.then((response) => {
					setAuth(response.data.token, response.data.user);

					if (isAuthenticated()) {
						//redirect admin page
						console.log("admin page");
						history.push("/");
					}
				})
				.catch((err) => {
					console.log("signing error", err);
					setFormData({
						...formData,
						errorMsg:
							err?.response?.data?.errorMessage ||
							"Something went wrong",
					});
				});
		}
	};
	const showSignupFrom = () => {
		return (
			<Form onSubmit={handleSubmit} noValidate>
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

				<button className='auth-btn mb-2' type='submit'>
					SignIn
				</button>
			</Form>
		);
	};

	return (
		<div className='signup-form'>
			<Container>
				<h3 className='text-center'>Login</h3>
				<Row>
					<Col md={12}>{showSignupFrom()}</Col>
					{errorMsg && (
						<Col md={12} className='mt-3'>
							{showErrorMsg(errorMsg)}
						</Col>
					)}

					<Col md={12}>
						<p className='sub-info'>
							Don't have an account?
							<span>
								{"  "}
								<Link to='/auth/signup'>SingUp</Link>
							</span>
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
export default Login;
