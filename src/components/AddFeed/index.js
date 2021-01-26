import React from "react";
import { Row, Col, Container, Accordion, Card, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import MessageSharpIcon from "@material-ui/icons/MessageSharp";
import { FaLinkedin } from "react-icons/fa";
import InfoIcon from "@material-ui/icons/Info";

class AddFeed extends React.Component {
	state = {
		users1: this.props.someProps,
		users2: this.props.otherProps,
	};
	render() {
		return (
			<Card className=' mb-2'>
				<Card.Body>
					<Container fluid className='d-flex justify-content-between'>
						<h4>Add to your feed</h4>
						<Link>
							<InfoIcon />
						</Link>
					</Container>
					<Row>
						<Col className=' d-flex px-2 py-2 justify-content-center align-items-center'>
							<Avatar
								alt='Remy Sharp'
								src='https://miro.medium.com/max/800/1*-ivYkzeuYJedPKdEdfnNlg.png'
								className='avatar'
							/>
						</Col>
						<Col
							xs={7}
							className=' d-flex px-2 py-2 justify-content-start align-items-center'>
							<Link to={"#"}>
								<h4>
									<strong>Mongo DB</strong>
								</h4>
								<p>Company-Computer Software</p>
							</Link>
						</Col>
						<Col
							xs={3}
							className=' d-flex px-2 py-2 justify-content-start align-items-center'>
							<Link to='#' className='follow-links p-1'>
								<strong>+ Follow</strong>
							</Link>
						</Col>
					</Row>
					<Row>
						<Col className=' d-flex px-2 py-2 justify-content-center align-items-center'>
							<Avatar
								alt='Remy Sharp'
								src='https://sbilanciamoci.info/wp-content/uploads/2019/07/190703083423-01-christine-lagarde.jpg'
								className='avatar'
							/>
						</Col>
						<Col
							xs={7}
							className=' d-flex px-2 py-2 justify-content-start align-items-center'>
							<Link to={"#"}>
								<h4>
									<strong>
										Christine Lagarde
										<FaLinkedin
											className='linkedin-icon ml-1'
											icon={["fab", "fa-linkedin-in"]}
										/>
									</strong>
								</h4>
								<p>President of the European Central Bank</p>
							</Link>
						</Col>
						<Col
							xs={3}
							className=' d-flex px-2 py-2 justify-content-start align-items-center'>
							<Link to='#' className='follow-links p-1'>
								<strong>+ Follow</strong>
							</Link>
						</Col>
					</Row>
					<Row>
						<Col className=' d-flex px-2 py-2 justify-content-center align-items-center'>
							<Avatar
								alt='Remy Sharp'
								src='https://cdn.icon-icons.com/icons2/2429/PNG/512/microsoft_logo_icon_147261.png'
								className='avatar'
							/>
						</Col>
						<Col
							xs={7}
							className=' d-flex px-2 py-2 justify-content-start align-items-center'>
							<Link to={"#"}>
								<h4>
									<strong>
										Microsoft{" "}
										<FaLinkedin
											className='linkedin-icon ml-1'
											icon={["fab", "fa-linkedin-in"]}
										/>
									</strong>
								</h4>
								<p>Company-Computer Software</p>
							</Link>
						</Col>
						<Col
							xs={3}
							className=' d-flex px-2 py-2 justify-content-start align-items-center'>
							<Link to='#' className='follow-links p-1'>
								<strong>+ Follow</strong>
							</Link>
						</Col>
					</Row>
				</Card.Body>
				<Card.Header className='card-header'>
					<Link to='#'>
						<h5>
							{" "}
							<strong>View all recommendations</strong>
						</h5>
					</Link>
				</Card.Header>
			</Card>
		);
	}
}
export default AddFeed;
