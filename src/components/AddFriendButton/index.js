import React from "react";
import { Button } from "react-bootstrap";

function AddFriendButton(props) {
	const [clicked, setClicked] = React.useState(false);

	return (
		<Button
			variant={!clicked ? "primary" : "secondary"}
			className='rounded-pill mr-3 p-1 px-4'
			style={{ fontWeight: "bold", border: "none" }}>
			{!props.me && !clicked ? "Connect" : "Pending"}
		</Button>
	);
}

export default AddFriendButton;
