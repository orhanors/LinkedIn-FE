import React from "react";
import { Card, Row, Col, Button, ListGroup } from "react-bootstrap";
import PencilEdit from "../PencilEdit"; 
import PlusEdit from "../PlusEdit"

function SkillsAndEndorsement(props) {
	return (
		<Card className='mt-4 p-4'>
			<Card.Body>
			<Row>
				<Col className='d-flex justify-content-between align-items-center'
						xs={12}>
						<Card.Title>
							Skills & endorsements
							</Card.Title>
						<PlusEdit
									color='#0b67c2'
									me={props.me}
									onClicked={props.onClicked}
								/>
					</Col>
				<Col xs={12} className=' d-flex  endorsement'>
						<Button
						variant='outline-primary'
						className='rounded-pill ml-3'>
						Take skill quiz
					</Button>
				</Col>
				<Col xs={12}>
					<ListGroup
						className='d-flex mt-3'
						variant='flush'>
						<ListGroup.Item className='d-flex align-items-center justify-content-between'>
							<div className='d-flex align-items-center '>
											<div className='ml-2'>
												<h6>Software Engineering</h6>
											</div>
										</div>
										<div>
											<PencilEdit
												me={props.me}
												color='#0b67c2'
											/>
										</div>
						</ListGroup.Item>
						<ListGroup.Item className='d-flex align-items-center justify-content-between'>
							<div className='d-flex align-items-center '>
											<div className='ml-2'>
												<h6>Javascript</h6>
											</div>
										</div>
										<div>
											<PencilEdit
												me={props.me}
												color='#0b67c2'
											/>
										</div>
						</ListGroup.Item>
						<ListGroup.Item className='d-flex align-items-center justify-content-between'>
							<div className='d-flex align-items-center '>
											<div className='ml-2'>
												<h6>React JS</h6>
											</div>
										</div>
										<div>
											<PencilEdit
												me={props.me}
												color='#0b67c2'
											/>
										</div>
						</ListGroup.Item>
					</ListGroup>
				</Col>
			</Row>
			<Card.Footer
				className='text-primary text-center'
				style={{ fontWeight: "bold" }}>
				Show more <i className='fas fa-caret-down'></i>
				</Card.Footer>
				</Card.Body>
		</Card>
	);
}

export default SkillsAndEndorsement;
