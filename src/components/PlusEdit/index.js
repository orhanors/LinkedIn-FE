import React from "react";

export default function PlusEdit(props) {
	return (
		<i
			className={
				props.me === true ? " fas fa-plus  ml-3 mr-1 p-2" : "d-none"
			}
			style={{ color: props.color }}
			onClick={() => props.onClicked()}></i>
	);
}
