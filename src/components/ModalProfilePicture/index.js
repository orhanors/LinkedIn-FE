import React, { Component } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import { addProfileImage } from "../../api/profile";
export default class ModalProfilePicture extends Component {
	state = {
		post: null,
	};

	fileSelectedHandler = (e) => {
		const formData = new FormData();
		formData.append("profile", e.target.files[0]);
		this.setState({ post: formData });
	};

	postImage = async () => {
		//   const url = "https://striveschool-api.herokuapp.com/api/profile/{userId}/picture"

		const response = await addProfileImage(this.state.post);
		if (response.data) {
			console.log("profile image posted succesfully");
			this.props.submitCounter();
			this.props.hidePictureModal();
		} else {
			const error = response.errors;
			console.log(error);
			<Alert variant='danger'>Something went wrong</Alert>;
		}
	};

	render() {
		return (
			<Modal
				show={this.props.showPictureModal}
				onHide=''
				backdrop='static'
				keyboard={false}>
				<Modal.Header>
					<Modal.Title>Post Profile Picture Here</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input type='file' onChange={this.fileSelectedHandler} />
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant='secondary'
						onClick={() => this.props.hidePictureModal()}>
						Cancel
					</Button>
					<Button variant='primary' onClick={this.postImage}>
						Upload
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}
