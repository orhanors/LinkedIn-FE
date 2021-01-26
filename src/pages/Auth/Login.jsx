import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import { signin } from "../../api/auth";
import { isAuthenticated, setAuth } from "../../helpers/auth";
import "./auth.scss";
function Login() {
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
	});
	const { email, password, errorMsg } = formData;

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
			errorMsg: "",
			successMsg: "",
		});
	};
	const handleSubmit = async (e) => {
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

						history.push("/");
					}
				})
				.catch((err) => {
					console.log("signing error", err);
					setFormData({
						...formData,
						errorMsg:
							err?.response?.data?.errors ||
							"Something went wrong",
					});
				});
		}
	};

	const showLoginForm = () => {
		return (
			<div class='d-flex flex-column'>
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
				<Link
					className='forgot-password mb-4'
					to='/login/forgotpassword'>
					Forgot Password?
				</Link>
				{errorMsg && (
					<small className='mb-2 mt-0 text-danger text-center'>
						{errorMsg}
					</small>
				)}
				<button onClick={handleSubmit} className='sign-in-btn'>
					Sign in
				</button>
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
				<div className='login-content-container mb-5'>
					<div className='mb-4'>
						<h2 className='mb-1'>Sign in</h2>
						<p className='mb-0'>
							Stay updated on your professional world
						</p>
					</div>
					{showLoginForm()}
				</div>
				<div className='text-center'>
					<p>
						New to LinkedIn?{" "}
						<Link to='/auth/signup' className='font-weight-bold'>
							Join now
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login;
