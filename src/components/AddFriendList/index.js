import React, { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { acceptFriendRequest, rejectFriendRequest } from "../../api/friendship";
import "./styles.scss";
function AddFriendList(props) {
	const [friendRequestList, setFriendRequestList] = useState([]);
	//list-group-item
	useEffect(() => {
		setFriendRequestList(props.currentUserProfile.friendRequests);
	}, [props.currentUserProfile]);
	const changeBehavior = (e) => {
		e.target.closest(`.list-group-item`).style.display = "none";
		props.updateNavBar();
	};
	const handleAccept = async (e) => {
		const reqUserId = e.target.name;
		const response = await acceptFriendRequest(reqUserId);
		if (response.data) {
			changeBehavior(e);
		}
	};

	const handleDeny = async (e) => {
		const reqUserId = e.target.name;
		const response = await rejectFriendRequest(reqUserId);
		if (response.data) {
			changeBehavior(e);
		}
	};
	return (
		<div className='addFriendList-container'>
			{props.showFriendList && (
				<div className='addFriendList'>
					<ListGroup>
						{friendRequestList.length === 0 ? (
							<ListGroup.Item>
								There is no request{" "}
							</ListGroup.Item>
						) : (
							<div>
								{friendRequestList.map((req) => {
									return (
										<ListGroup.Item
											id={req._id}
											key={req._id}>
											<div className='d-flex justify-content-between'>
												<div className='d-flex flex-row'>
													<img
														style={{
															width: 30,
															height: 30,
															borderRadius: "50%",
														}}
														alt='req'
														src={req.image}
													/>
													<p className='ml-2'>
														{req.name +
															" " +
															req.surname}
													</p>
												</div>

												<div>
													<button
														name={req._id}
														onClick={handleAccept}
														className='accept mr-1'>
														Accept
													</button>
													<button
														name={req.id}
														onClick={handleDeny}
														className='deny'>
														Deny
													</button>
												</div>
											</div>
										</ListGroup.Item>
									);
								})}
							</div>
						)}
					</ListGroup>
				</div>
			)}
		</div>
	);
}

export default AddFriendList;
