import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { editCurrentUser } from "../../api/profile";
class ModalForm extends React.Component {
	state = {
		info: this.props.myProfile,
	};

	handleChange = (e) => {
		this.setState({
			info: {
				...this.state.info,
				[e.target.id]: e.target.value,
			},
		});
	};

	// handleSubmit = (e) => {
	//   e.preventDefault();
	//   this.changeInfo();
	// };

	changeInfo = async (e) => {
		e.preventDefault();
		const {
			name,
			surname,
			email,
			username,
			bio,
			title,
			area,
		} = this.state.info;

		const data = {
			name,
			surname,
			email,
			username,
			bio,
			title,
			area,
		};
		const response = await editCurrentUser(data);
		if (response.ok) {
			alert("UPDATED SUCCESFULLY");
			this.props.submitCounter();
			this.props.hide();
		} else {
			const error = response;
			console.log(error);
		}
	};

	render() {
		return (
			<>
				<Modal show={this.props.show} onHide={() => this.props.hide()}>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form onSubmit={this.changeInfo}>
							<Form.Group>
								<Form.Label htmlFor='name'>Name</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter your First Name'
									id='name'
									value={this.state.info.name}
									onChange={(e) => this.handleChange(e)}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Surname</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter your Last Time'
									id='surname'
									value={this.state.info.surname}
									onChange={(e) => this.handleChange(e)}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Email</Form.Label>
								<Form.Control
									type='email'
									placeholder='Enter your email'
									id='email'
									value={this.state.info.email}
									onChange={(e) => this.handleChange(e)}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Bio</Form.Label>
								<Form.Control
									as='textarea'
									rows={3}
									id='bio'
									value={this.state.info.bio}
									onChange={(e) => this.handleChange(e)}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Title</Form.Label>
								<Form.Control
									type='text'
									placeholder='Enter your Job Title'
									id='title'
									value={this.state.info.title}
									onChange={(e) => this.handleChange(e)}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Area</Form.Label>
								<Form.Control
									type='text'
									placeholder='City or Country'
									id='area'
									value={this.state.info.area}
									onChange={(e) => this.handleChange(e)}
								/>
							</Form.Group>
							{/* <Form.Group >
                <Form.Label>ImageUrl</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="image Url"
                  id="image"
                  value={this.state.info.image}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group> */}
							<Form.Group>
								<Form.Label>username</Form.Label>
								<Form.Control
									type='text'
									placeholder='username'
									value={this.state.info.username}
									onChange={(e) => this.handleChange(e)}
								/>
							</Form.Group>
							<Button variant='primary' type='submit'>
								Submit Changes
							</Button>
							{/* <Button variant="secondary" onClick={() => this.props.hide()}>
                Close
              </Button> */}
						</Form>
					</Modal.Body>
				</Modal>
			</>
		);
	}
}

export default ModalForm;
