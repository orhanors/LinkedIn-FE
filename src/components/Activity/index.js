import React from "react";
import { Card, Row, Col, ListGroup } from "react-bootstrap";
import { withRouter } from "react-router-dom";
function Activity(props) {
	return (
		<Card className='mt-4 p-4'>
			<Card.Body>
				<Row>
					<Col className='col-6'>
						<Card.Title className='d-flex'>Activity</Card.Title>
					</Col>
					<Col className='col-6 text-right text-primary'>
						<Card.Text>See all</Card.Text>
					</Col>
				</Row>
				<Row>
					<Col className='d-flex' md={12}>
						<ListGroup className='d-flex' variant='flush'>
									<ListGroup.Item className='d-flex align-items-center justify-content-between'>
										<div className='d-flex align-items-center '>
						<div>
							<img
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png'
								alt='placeholder'
											width='56px'
											height='56px'
							/>
						</div>
						<div className='ml-2'>
							<h6>
								Just finished the course: "JavaScript...#Async!
							</h6>
							<p className='text-secondary'>
								{props.myProfile.name} shared this
							</p>
								</div>
								</div>
							</ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}
export default withRouter(Activity);
