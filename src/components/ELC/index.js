import React from "react";
import PencilEdit from "../PencilEdit";
import PlusEdit from "../PlusEdit";
import { Card, Row, Col, ListGroup } from "react-bootstrap";
import Moment from "react-moment";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

export default class ELC extends React.Component {
	state = { MyExperience: this.props.MyExperience, visible: 3 };

	loadmore = () =>
		this.setState((e) => {
			return { visible: e.visible + 2 };
		});

	handleEdit = (exp) => {
		this.props.onClicked();
		this.props.editExp(exp);
	};

	render() {
		return (
			<>
				<Card className='mt-4 p-4'>
					<Card.Body>
						<Row>
							<Col
								className='d-flex justify-content-between align-items-center'
								xs={12}>
								<Card.Title>Experience</Card.Title>
								<PlusEdit
									color='#0b67c2'
									me={this.props.me}
									onClicked={this.props.onClicked}
								/>
							</Col>
						</Row>
						<Row>
							<Col xs={12}>
								<ListGroup variant='flush'>
									{this.props.MyExperience &&
										this.props.MyExperience.slice(
											0,
											this.state.visible
										).map((experience, index) => (
											<ListGroup.Item
												className='d-flex align-items-center justify-content-between'
												key={index}>
												<div className='d-flex'>
													<div>
														<img
															src={
																experience.image
																	? experience.image
																	: "https://placehold.it/300x300"
															}
															alt='placeholder'
															width='56px'
															height='56px'
															style={{
																objectFit:
																	"cover",
															}}
														/>
													</div>
													<div className='ml-2'>
														<h5>
															{experience.role}
														</h5>
														<h6>
															{experience.company}
														</h6>
														<p className='d-flex'>
															<Moment
																date={
																	experience.startDate
																}
																format='YYYY/MM/DD'
															/>
															{"  "} - {"  "}
															<Moment
																date={
																	experience.endDate
																}
																format='YYYY/MM/DD'
															/>
														</p>
													</div>
												</div>
												<div>
													<PencilEdit
														me={this.props.me}
														color='#0b67c2'
														onClicked={() =>
															this.handleEdit(
																experience
															)
														}
													/>
												</div>
											</ListGroup.Item>
										))}
								</ListGroup>
							</Col>
						</Row>
					</Card.Body>
					{this.state.visible < this.state.MyExperience.length && (
						<ListGroup.Item
							action
							style={{ border: "none" }}
							onClick={this.loadmore}>
							Show more
							<KeyboardArrowDownIcon />
						</ListGroup.Item>
					)}
				</Card>
				<Card className='p-4'>
					<Card.Body>
						<Row>
							<Col
								className='d-flex justify-content-between align-items-center'
								xs={12}>
								<Card.Title>
									Licenses and Certifications
								</Card.Title>
								{this.props.me && (
									<h3 className='text-primary'>+</h3>
								)}
							</Col>
						</Row>
						<Row>
							<Col xs={12}>
								<ListGroup className='d-flex' variant='flush'>
									<ListGroup.Item className='d-flex align-items-center justify-content-between'>
										<div className='d-flex align-items-center '>
											<div>
												<img
													src='https://placehold.it/300x300'
													alt='placeholder'
													width='56px'
													height='56px'
												/>
											</div>
											<div className='ml-2'>
												<h6>CSS: Selectors</h6>
											</div>
										</div>
										<div>
											<PencilEdit
												me={this.props.me}
												color='#0b67c2'
											/>
										</div>
									</ListGroup.Item>
									<ListGroup.Item className='d-flex align-items-center'>
										<div>
											<img
												src='https://placehold.it/300x300'
												alt='placeholder'
												width='56px'
											/>
										</div>
										<div className='ml-2'>
											<h6>Journalist</h6>
										</div>
									</ListGroup.Item>
								</ListGroup>
							</Col>
						</Row>
					</Card.Body>
				</Card>
				<Card className='p-4'>
					<Card.Body>
						<Row>
							<Col
								className='d-flex justify-content-between align-items-center'
								xs={12}>
								<Card.Title>
									Licenses and Certifications
								</Card.Title>{" "}
								{this.props.me && (
									<h3 className='text-primary'>+</h3>
								)}
							</Col>
						</Row>
						<Row>
							<Col xs={12}>
								<ListGroup className='d-flex' variant='flush'>
									<ListGroup.Item className='d-flex align-items-center justify-content-between'>
										<div className='d-flex align-items-center justify-content-between'>
											<div>
												<img
													src='https://placehold.it/300x300'
													alt='placeholder'
													width='56px'
												/>
											</div>
											<div className='ml-2'>
												<h6>Learning ECMA scripts</h6>
											</div>
										</div>
										<div>
											<PencilEdit
												me={this.props.me}
												color='#0b67c2'
											/>
										</div>
									</ListGroup.Item>
									<ListGroup.Item className='d-flex align-items-center'>
										<div>
											<img
												src='https://placehold.it/300x300'
												alt='placeholder'
												width='56px'
											/>
										</div>
										<div className='ml-2'>
											<h6>Learning ECMA scripts</h6>
										</div>
									</ListGroup.Item>
								</ListGroup>
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</>
		);
	}
}
