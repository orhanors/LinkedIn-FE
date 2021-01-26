import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

export default class Interests extends React.Component {
	render() {
		return (
			<>
				<Card className='mt-4'>
					<Card.Body>
						<Row>
							<Col className='col-6'>
								<Card.Title className='d-flex'>
									Interests
								</Card.Title>
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
								<div className='ml-3'>
									<h6>TE Connectivity</h6>
									<p
										className='text-muted'
										style={{ fontSize: "14px" }}>
										{" "}
										319,197 followers
									</p>
								</div>
							</Col>
							<Col className='d-flex ' md={6}>
								<div>
									<img
										src='https://placehold.it/300x300'
										alt='placeholder'
										width='56px'
									/>
								</div>
								<div className='ml-3'>
									<h6>UBS</h6>
									<p
										className='text-muted'
										style={{ fontSize: "14px" }}>
										921,990 followers
									</p>
								</div>
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
								<div className='ml-3'>
									<h6>Infor</h6>
									<p
										className='text-muted'
										style={{ fontSize: "14px" }}>
										{" "}
										510,062 followers
									</p>
								</div>
							</Col>
							<Col className='d-flex ' md={6}>
								<div>
									<img
										src='https://placehold.it/300x300'
										alt='placeholder'
										width='56px'
									/>
								</div>
								<div className='ml-3'>
									<h6>Business Analyst Professional-BA</h6>
									<p
										className='text-muted'
										style={{ fontSize: "14px" }}>
										188,890 followers
									</p>
								</div>
							</Col>
						</Row>
					</Card.Body>

					<Card.Footer
						className='text-primary text-center'
						style={{ fontWeight: "bold", color: "#126BC4" }}>
						See all
					</Card.Footer>
				</Card>
			</>
		);
	}
}
