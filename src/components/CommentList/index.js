import React from "react";
import { Spinner, Button, Row, Col } from "react-bootstrap";
class CommentList extends React.Component {
	state = {
		comments: [],
		loading: true,
	};

	fetchComments = async () => {
		this.setState({ loading: true });
		try {
			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/" +
					this.props.id,

				{
					headers: new Headers({
						Authorization: process.env.REACT_APP_TOKEN,
					}),
				}
			);
			let comments = await response.json();
			comments = comments.reverse();
			console.log(comments);
			setTimeout(() => {
				this.setState({ comments: comments, loading: false });
			}, 2000);
		} catch (e) {
			console.log("error: ", e);
		}
	};

	componentDidMount = () => {
		this.fetchComments();
	};

	componentDidUpdate = (previousProps) => {
		if (previousProps.submitCounter !== this.props.submitCounter) {
			console.log("ComponentDidUpdate is working...");
			this.fetchComments();
		}
	};

	deleteComment = async (commentID) => {
		alert("YAAAY");
		try {
			const response = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/" +
					commentID,
				{
					method: "DELETE",
					headers: {
						Authorization: process.env.REACT_APP_TOKEN,
					},
				}
			);
			if (response.ok) {
				// checking the ok property which stores the successful result of the operation
				alert("Comment deleted successfully");
				this.props.onClick();
			} else {
				alert("Something went wrong!");
			}
		} catch (err) {
			console.log(err);
		}
	};
	render() {
		return (
			<div className='mb-5'>
				{this.state.loading ? (
					<Spinner
						animation='grow'
						variant='primary'
						style={{ marginLeft: "45%" }}
					/>
				) : (
					<>
						{this.state.comments.map((comment, index) => {
							let variant = "";

							switch (comment.rate) {
								case 1:
									variant = "danger";
									break;
								case 2:
									variant = "warning";
									break;
								case 3:
									variant = "secondary";
									break;
								default:
									variant = "success";
									break;
							}
							return (
								<div>
									{this.state.comments.length > 0 && (
										<Row key={index} className='my-3'>
											<Col md={2}>
												<img
													src='https://pbs.twimg.com/media/Ea3jz_1WoAANHhD.png'
													style={{
														objectFit: "cover",
														borderRadius: "50%",
													}}
													width='40px'
													height='40px'
												/>
											</Col>
											<Col
												xs={10}
												style={{
													background: "#f2f2f2",
													borderBottomRightRadius:
														"8px",
													borderTopRightRadius: "8px",
													borderBottomLeftRadius:
														"8px",
												}}
												className='commentDelete text-dark  d-flex justify-content-between align-items-center'>
												{comment.comment}

												<span
													style={{
														display:
															comment.author ===
															process.env
																.REACT_APP_USERNAME
																? "inline"
																: "none",
													}}>
													<Button
														variant='outline-danger'
														onClick={() => {
															this.deleteComment(
																comment._id
															);
														}}
														className='mr-2'>
														X
													</Button>
													<Button
														variant='outline-info'
														onClick={() =>
															this.props.editCm(
																comment
															)
														}>
														E
													</Button>
												</span>
											</Col>
										</Row>
									)}
								</div>
							);
						})}
					</>
				)}
			</div>
		);
	}
}

export default CommentList;
