import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { FaLinkedin } from "react-icons/fa";
import InfoIcon from "@material-ui/icons/Info";
import "./styles.scss";
class AddFeed extends React.Component {
	state = {
		users1: this.props.someProps,
		users2: this.props.otherProps,
	};
	render() {
		return (
			<Card className='add-your-feed mb-2'>
				<Card.Body>
					<div className='d-flex justify-content-between'>
						<p className='title'>Add to your feed</p>
						<Link>
							<InfoIcon style={{ width: 20 }} />
						</Link>
					</div>
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
							<div>
								<strong>Mongo DB</strong>

								<p className='right-subtitle'>
									Company-Computer Software
								</p>
							</div>
						</Col>
						{/* <Col
							xs={3}
							className=' d-flex px-2 py-2 justify-content-start align-items-center'>
							<div className='p-1'>
								<strong>+ Follow</strong>
							</div>
						</Col> */}
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
							<div to={"#"}>
								<strong>
									Christine Lagarde
									<FaLinkedin
										className='linkedin-icon ml-1'
										icon={["fab", "fa-linkedin-in"]}
									/>
								</strong>

								<p className='right-subtitle'>
									President of the European Central Bank
								</p>
							</div>
						</Col>
						{/* <Col
							xs={3}
							className=' d-flex px-2 py-2 justify-content-start align-items-center'>
							<div to='#' className='p-1'>
								<strong>+ Follow</strong>
							</div>
						</Col> */}
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
							<div>
								<strong>
									Microsoft{" "}
									<FaLinkedin
										className='linkedin-icon ml-1'
										icon={["fab", "fa-linkedin-in"]}
									/>
								</strong>

								<p className='right-subtitle'>
									Company-Computer Software
								</p>
							</div>
						</Col>
						{/* <Col
							xs={3}
							className=' d-flex px-2 py-2 justify-content-start align-items-center'>
							<div to='#' className='p-1'>
								<strong>+ Follow</strong>
							</div>
						</Col> */}
					</Row>
					<hr />
					<Row>
						<Col>
							<p className=' bottom-text '>
								View all recommendations &#8594;
							</p>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		);
	}
}
export default AddFeed;
