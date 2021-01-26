import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import PencilEdit from "../PencilEdit";

function OpenToWork(props) {
	return (
		<>
			<Card>
				<Card.Header
					className='d-flex justify-content-between'
					style={{ background: "#f9fafb" }}>
					<div>
						<h6>Open to work</h6>
						<h6 style={{ fontWeight: "normal" }}>
							Data Scientist and Software Engineer roles
						</h6>
						<h6 className='text-primary'>See all details</h6>
					</div>
					<div>
						<PencilEdit color='#666666' me={props.me} />
					</div>
				</Card.Header>
				<ListGroup variant='flush'>
					<ListGroup.Item className='py-0 text-secondary'>
						<i
							className='fas fa-eye'
							style={{ color: "black" }}></i>{" "}
						Only recruiters
					</ListGroup.Item>
				</ListGroup>
			</Card>
		</>
	);
}

export default OpenToWork;
