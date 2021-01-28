import React from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { friendRequest } from "../../api/friendship";
function AddFriendButton(props) {
	const [clicked, setClicked] = React.useState(false);

	const handleButtonClick = (e) => {
		sendRequest();
	};

	const sendRequest = async () => {
		const requestedUserId = props.myProfile._id;
		const response = await friendRequest(requestedUserId);
		if (response.data) {
			console.log("send request", response.data);
			setClicked(true);
		}
	};
	return (
		<span>
			{props.me ? (
				""
			) : (
				<Button
					variant={!clicked ? "primary" : "secondary"}
					disabled={clicked ? true : false}
					className='rounded-pill mr-3 p-1 px-4'
					style={{ fontWeight: "bold", border: "none" }}
					onClick={(e) => handleButtonClick(e)}>
					{!props.me && !clicked ? "Connect" : "Pending"}
				</Button>
			)}
		</span>
	);
}

export default withRouter(AddFriendButton);
