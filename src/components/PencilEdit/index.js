import React from "react";

function PencilEdit(props) {
	return (
		<i
			className={
				props.me === true ? "fas fa-pencil-alt ml-3 mr-1 p-2" : "d-none"
			}
			style={{ color: props.color }}
			onClick={() => props.onClicked()}></i>
	);
}

export default PencilEdit;
