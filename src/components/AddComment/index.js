import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

class AddComment extends React.Component {
	state = {
		addComment: {
			comment: null,
			rate: 1,
			elementId: this.props.id,
		},
		errMessage: "",
	};

	updateCommentField = (e) => {
		let addComment = { ...this.state.addComment };
		let currentId = e.currentTarget.id;

		addComment[currentId] = e.currentTarget.value;

		this.setState({ addComment });
	};

	componentDidUpdate = (previousProps) => {
		if (
			previousProps.editedCm.editCounter !==
			this.props.editedCm.editCounter
		) {
			this.setState({
				addComment: {
					comment: this.props.editedCm.comment.comment,
					rate: this.props.editedCm.comment.rate,
					elementId: this.props.id,
				},
			});
		}
	};

	submitComment = async (e) => {
		e.preventDefault();
		try {
			let response;

			if (this.props.editedCm.comment._id) {
				response = await fetch(
					"https://striveschool-api.herokuapp.com/api/comments/" +
						this.props.editedCm.comment._id,
					{
						method: "PUT",
						body: JSON.stringify(this.state.addComment),
						headers: new Headers({
							"Content-Type": "application/json",
							Authorization: process.env.REACT_APP_TOKEN,
						}),
					}
				);
			} else {
				response = await fetch(
					"https://striveschool-api.herokuapp.com/api/comments/",
					{
						method: "POST",
						body: JSON.stringify(this.state.addComment),
						headers: new Headers({
							"Content-Type": "application/json",
							Authorization: process.env.REACT_APP_TOKEN,
						}),
					}
				);
			}

			if (response.ok) {
				alert(
					`Comment ${
						this.props.editedCm.comment._id ? "edited!" : "saved!"
					}`
				);
				this.props.clearEditCommentState();
				this.setState({
					addComment: {
						comment: "",
						rate: 1,
						elementId: this.props.id,
					},
					errMessage: "",
				});

				this.props.onClick();
			} else {
				console.log("an error occurred");
				let error = await response.json();
				this.setState({
					errMessage: error.message,
				});
			}
		} catch (e) {
			console.log(e); // Error
			this.setState({
				errMessage: e.message,
			});
		}
	};

	render() {
		return (
			<>
				<Form
					className='mt-4'
					onSubmit={this.submitComment}
					style={{
						width: "100%",
						height: "50%",
					}}>
					<Row className='no-gutters'>
						{this.props.meProfile.username && (
							<Col xs={2}>
								<img
									height='40px'
									width='40px'
									style={{
										objectFit: "cover",
										borderRadius: "50%",
									}}
									src={this.props.meProfile.image}
								/>
							</Col>
						)}
						<Col xs={10}>
							<Form.Group>
								<Form.Control
									type='text'
									name='comment'
									id='comment'
									placeholder='Your comment'
									value={this.state.addComment.comment}
									onChange={this.updateCommentField}
									required
									className='rounded-pill py-3'
								/>
							</Form.Group>
						</Col>
						{this.state.addComment.comment && (
							<Col xs={2}>
								<Button
									variant='primary'
									type='submit'
									className='py-0 px-4 rounded-pill mt-0 mb-2'>
									{this.props.editedCm.comment._id
										? "Edit"
										: "Post"}
								</Button>
							</Col>
						)}
					</Row>
				</Form>
			</>
		);
	}
}

export default AddComment;
