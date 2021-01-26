import React from "react";
import { Row, Col, Container, Accordion, Card, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

class MayKnow extends React.Component {
	render() {
		return (
			<div className='mb-2 youknow'>
				<Accordion>
					<Card className='youknow'>
						<Card.Body>
							<Container>
								<h5 style={{ color: "#707070" }}>
									People you may know
								</h5>
							</Container>
							{this.props.threeProps.map((user, index) => (
								<Row key={index}>
									<Col className=' d-flex px-0 py-2 justify-content-center align-items-start'>
										<img
											width='56px'
											height='56px'
											alt='Remy Sharp'
											style={{
												objectFit: "cover",
												borderRadius: "50%",
											}}
											src={user.image}
											// className="avatar"
										/>
									</Col>
									<Col
										xs={7}
										className='bordered d-flex pl-2 py-2 justify-content-start align-items-center'>
										<Link
											to={"/profile/" + user._id}
											className='text-dark'>
											<h6 style={{ fontWeight: "bold" }}>
												{user.name} {user.surname}
											</h6>
											<p style={{ color: "#707070" }}>
												{user.title}
											</p>
										</Link>
									</Col>
									<Col className='bordered d-flex px-2 py-2 justify-content-center align-items-center'>
										<AddCircleOutlineIcon />
									</Col>
								</Row>
							))}
						</Card.Body>

						<Accordion.Collapse eventKey='0'>
							<Card.Body>
								{this.props.fourProps.map((user, index) => (
									<Row key={index}>
										<Col className=' d-flex px-0 py-2 justify-content-center align-items-start'>
											<img
												width='56px'
												height='56px'
												alt='Remy Sharp'
												style={{
													objectFit: "cover",
													borderRadius: "50%",
												}}
												src={user.image}
												// className="avatar"
											/>
										</Col>
										<Col
											xs={7}
											className='bordered d-flex pl-2 py-2 justify-content-start align-items-center'>
											<Link
												to={"/profile/" + user._id}
												className='text-dark'>
												<h6
													style={{
														fontWeight: "bold",
													}}>
													{user.name} {user.surname}
												</h6>
												<p style={{ color: "#707070" }}>
													{user.title}
												</p>
											</Link>
										</Col>
										<Col className='bordered d-flex px-2 py-2 justify-content-center align-items-center'>
											<AddCircleOutlineIcon />
										</Col>
									</Row>
								))}
							</Card.Body>
						</Accordion.Collapse>
						<Card.Header className=' d-flex px-2 py-2 justify-content-center align-items-center'>
							<Accordion.Toggle
								as={Button}
								variant='link'
								eventKey='0'>
								Show more <ArrowDropDownIcon />
							</Accordion.Toggle>
						</Card.Header>
					</Card>
				</Accordion>
			</div>
		);
	}
}
export default withRouter(MayKnow);
