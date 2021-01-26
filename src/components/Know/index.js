import React from "react";
import { Row, Col, Accordion, Card, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import MessageSharpIcon from "@material-ui/icons/MessageSharp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

class Know extends React.Component {
	state = {
		users1: this.props.someProps,
		users2: this.props.otherProps,
	};
	render() {
		return (
			<div className='mb-2 youknow'>
				<Accordion>
					<Card className='youknow mb-2'>
						<Card.Body>
							<h5 style={{ color: "#707070" }}>
								People also viewed
							</h5>

							{this.props.oneProps.map((user, index) => (
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
									<Col className='bordered d-flex pl-0 py-2 justify-content-center align-items-center'>
										<MessageSharpIcon />
									</Col>
								</Row>
							))}
						</Card.Body>
						<Accordion.Collapse eventKey='0'>
							<Card.Body>
								{this.props.twoProps.map((user, index) => (
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
										<Col className='bordered d-flex pl-0 py-2 justify-content-center align-items-center'>
											<MessageSharpIcon />
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
export default withRouter(Know);
