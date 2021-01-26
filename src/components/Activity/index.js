import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
function Activity(props) {
	return (
		<Card className='mt-4 p-4'>
			<Card.Body>
				<Row>
					<Col className='col-6'>
						<Card.Title className='d-flex'>Activity</Card.Title>

						<ul
							className='d-flex pl-0 '
							style={{ listStyle: "none" }}>
							<li className='mx-4 text-secondary'>
								13 followers{" "}
							</li>
							<li
								className='mx-3 text-primary'
								style={{ fontWeight: "bold" }}>
								Manage followers
							</li>
						</ul>
					</Col>
					<Col className='col-6 text-right text-primary'>
						<Card.Text>See all</Card.Text>
					</Col>
				</Row>
				<Row>
					<Col className='d-flex' md={6}>
						<div>
							<img
								src='https://placehold.it/300x300'
								alt='placeholder'
								width='56px'
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
					</Col>
					<Col className='d-flex' md={6}>
						<div>
							<img
								src='https://placehold.it/300x300'
								alt='placeholder'
								width='56px'
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
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
}
export default withRouter(Activity);
