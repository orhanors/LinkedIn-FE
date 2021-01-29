import React from "react";
import { Container, Form, Row, Col, Button, Alert } from "react-bootstrap";

class EditProfileForm extends React.Component {
	render() {
		const { user } = this.props;
		return (
			<Container>
				<Form onSubmit={this.props.handleFormSubmit}>
					<Row>
						<Col>
							<Form.Group>
								<Form.Label htmlFor='name'>
									First Name
								</Form.Label>
								<Form.Control
									id='name'
									name='name'
									placeholder='First name'
									value={this.props.user.name}
									onChange={this.props.fillForm}
								/>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group>
								<Form.Label htmlFor='surname'>
									Last Name
								</Form.Label>
								<Form.Control
									id='surname'
									name='surname'
									placeholder='Last name'
									value={this.props.user.surname}
									onChange={this.props.fillForm}
								/>
							</Form.Group>
						</Col>
					</Row>

					<div className='form-disabled-info mt-5'>
						<h4>+ Record name pronunciation</h4>
						<p>
							Name pronunciation can only be added using our
							mobile app.
						</p>
					</div>

					<Form.Group>
						<Form.Label>Headline</Form.Label>
						<Form.Control
							id='title'
							as='textarea'
							value={this.props.user.title}
							rows={2}
							onChange={this.props.fillForm}
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Country/Region</Form.Label>
						<Form.Control
							id='area'
							placeholder='Last name'
							value={this.props.user.area}
							onChange={this.props.fillForm}
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Contact Info</Form.Label>
						<Form.Control
							id='email'
							placeholder='Contact Info'
							value={this.props.user.email}
							onChange={this.props.fillForm}
						/>
					</Form.Group>
					<div className='submit-button float-right mr-3 '>
						<Button type='submit'>Save </Button>
					</div>
				</Form>
			</Container>
		);
	}
}

export default EditProfileForm;
