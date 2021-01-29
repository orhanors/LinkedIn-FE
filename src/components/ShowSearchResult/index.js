import React from "react";
import { ListGroup } from "react-bootstrap";

import { Link } from "react-router-dom";
import "./styles.scss";
class ShowSearchResult extends React.Component {
	state = { users: [] };
	handleClickOutside = () => {
		this.props.hideSearchBar();
	};

	componentDidUpdate(prevProps) {
		if (prevProps.users !== this.props.users) {
			this.setState({
				users: this.props.users,
				keyword: this.props.keyword,
			});
		}
	}
	render() {
		const { users } = this.props;
		console.log("searched", users);
		return (
			//     <Button variant="primary" onClick={handleShow}>
			//     Launch demo modal
			//   </Button>
			<div
				className='search-result-container'
				style={{
					display: this.props.show ? "block" : "none",
				}}>
				<div className='search-result-popup'>
					<ListGroup>
						{users.length > 0 &&
							users.map((user) => {
								return (
									<Link to={`/profile/${user._id}`}>
										<div
											key={user._id}
											className='search-result-item d-flex flex-row'>
											<img
												style={{
													width: 15,
													height: 15,
													borderRadius: "50%",
												}}
												className='user-avatar mr-2'
												src={user.image}
												alt='user-avatar'
											/>
											<span className='user-name mr-2'>
												{user.name} {user.surname}{" "}
												&middot;
											</span>

											<span className='user-info '>
												{user.title &&
													user.title.substring(0, 14)}
												...
											</span>
										</div>
									</Link>
								);
							})}
					</ListGroup>
				</div>
			</div>
		);
	}
}

export default onClickOutside(ShowSearchResult);
