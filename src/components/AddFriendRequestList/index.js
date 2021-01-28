import React, { useState, useEffect } from "react";

function AddFriendRequestList(props) {
	const [friendRequestList, setFriendRequestList] = useState([]);

	useEffect(() => {
		setFriendRequestList(props.currentUserProfile.friendRequests);
	}, []);
	return <div></div>;
}

export default AddFriendRequestList;
