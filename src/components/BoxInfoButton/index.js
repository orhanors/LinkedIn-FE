import React from "react";
import { Button } from "react-bootstrap";

function BoxInfoButton(props) {
	return (
		<Button
			variant='primary'
			className='rounded-pill mr-3 p-1 px-4'
			style={{ fontWeight: "bold", border: "none" }}>
			{props.me ? "Add profile section" : "Message"}
		</Button>
	);
}

export default BoxInfoButton;
