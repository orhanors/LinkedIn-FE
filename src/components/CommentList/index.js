import React from "react";
import { ListGroup } from "react-bootstrap";
import { Spinner, Alert } from "react-bootstrap";
import "./styles.scss";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
class CommentList extends React.Component {
	state = {
		comments: [],
		isLoading: true,

		deletedSize: 0,
		errorMessage: false,
	};

	getComments = async () => {
		console.log("this.props?.postId: ", this.props.postId);
		try {
			let response = await fetch(
				`${process.env.REACT_APP_BE_URL}/posts/${this.props?.postId}/comments/`
			);

			if (response.ok) {
				let comments = await response.json();
				console.log("commentss: ", comments.data.comments);
				this.setState({
					comments: comments.data.comments.reverse(),
					isLoading: false,
				});
			} else {
				this.setState({ isLoading: false, errorMessage: true });
			}
		} catch (e) {
			this.setState({ isLoading: false, errorMessage: true });
		}
	};

	handleDelete = async (e) => {
		let id = e.currentTarget.id;
		try {
			let response = await fetch(
				`${process.env.REACT_APP_BE_URL}/comments/${id}`,
				{
					method: "DELETE",
				}
			);

			if (response.ok) {
				let filteredComments = this.state.comments.filter(
					(comment) => comment._id !== id
				);
				this.setState({
					comments: filteredComments,
					isloading: false,
					deletedSize: this.state.deletedSize + 1,
				});
			} else {
				alert("something went wrong :(");
			}
		} catch (err) {
			console.log(err);
			this.setState({ isLoading: false, errorMessage: true });
		}
	};

	// componentWillUnmount() {
	// 	this.getComments();
	// }

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.submittedSize !== this.props.submittedSize) {
			this.getComments();
			// this.setState({ update: !this.state.update });
		}
		if (prevProps.fetchComment !== this.props.fetchComment) {
			this.getComments();
		}
	}
	render() {
		let body;

		if (!this.state.isLoading && this.state.comments.length !== 0) {
			body = (
				<div className='mb-5'>
					{this.state.comments.map((comment, index) => {
						return (
							<div className='d-flex flex-row'>
								<img
									className='comment-user-avatar mt-1'
									style={{
										width: 30,
										height: 30,
										marginRight: "0.7rem",
										borderRadius: "50%",
									}}
									src={comment?.userId?.image}
									alt='comment-user-avatar'
								/>
								<div
									key={index}
									className='comment-item d-flex justify-content-between mb-3'>
									<div className='d-flex flex-column'>
										<div className=' d-flex '>
											<Link
												to={`/profile/${comment?.userId?._id}`}>
												<p className='comment-username'>
													{comment?.userId?.name +
														" " +
														comment?.userId
															?.surname}
												</p>
											</Link>

											{/* <MoreHorizIcon className='d-flex float-right' /> */}
										</div>

										<small className='comment-user-title'>
											{comment?.userId?.title}
										</small>
										<p
											style={{ textAlign: "left" }}
											className='float-left'>
											{comment?.comment}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			);
		} else if (
			this.state.comments.length === 0 &&
			!this.state.isLoading &&
			!this.state.errorMessage
		) {
			body = (
				<div className='d-flex justify-content-center align-items-center mt-3'></div>
			);
		} else {
			body = (
				<div className='d-flex justify-content-center align-items-center mt-3'>
					{/* <p style={{ color: "red" }} variant='danger'>
						Something went wrong!
					</p> */}
				</div>
			);
		}

		return body;
	}
}

export default CommentList;
