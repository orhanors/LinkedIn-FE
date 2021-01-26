import React from "react";
import { Card, Row, Col, Button, ListGroup } from "react-bootstrap";
import PencilEdit from "../PencilEdit";

function SkillsAndEndorsement(props) {
	return (
		<Card className='mt-4'>
			<Row className=' p-4'>
				<Col md={6}>
					<h4 className='text-dark'>Skills & endorsements</h4>
					<Button
						variant='outline-primary'
						className='rounded-pill mt-3 p-1 px-4'>
						Take skill quiz
					</Button>
				</Col>
				<Col md={6} className=' d-flex justify-content-end endorsement'>
					<div>
						{props.me && (
							<h5 className='text-secondary'>Add a new Skill</h5>
						)}
					</div>
					<div className='endorsement'>
						<PencilEdit color='#0b67c2' me={props.me} />
					</div>
				</Col>
				<Col xs={12}>
					<ListGroup
						variant='flush'
						className='mt-3 text-dark'
						style={{ fontWeight: "bold" }}>
						<ListGroup.Item>Software engineer</ListGroup.Item>
						<ListGroup.Item>JavaScript</ListGroup.Item>
						<ListGroup.Item>React JS</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
			<Card.Footer
				className='text-primary text-center'
				style={{ fontWeight: "bold" }}>
				Show more <i className='fas fa-caret-down'></i>
			</Card.Footer>
		</Card>
	);
}

export default SkillsAndEndorsement;
