import React from "react";
import { Card, Row, Col } from "react-bootstrap";

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
										src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/TE_Connectivity_logo.svg/1200px-TE_Connectivity_logo.svg.png'
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
										src='https://www.ozartsnashville.org/wp-content/uploads/2016/08/ubs-logo.jpg'
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
										src='https://malignel.transilien.com/wp-content/uploads/2014/04/information-logo.png'
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
										src='http://im.gifbt.com/in/business-analyst-world/business-analyst-world-logo-125x125.jpg'
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
