import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { div, withRouter } from "react-router-dom";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

class Videos extends React.Component {
	render() {
		return (
			<div className='mb-2 '>
				<Card className='youknow'>
					<Card.Body>
						<Container>
							<p>
								User, learn what hiring managers look for in
								answers to top interview questions
							</p>
						</Container>
						<Row>
							<Col className=' d-flex px-2 py-2 justify-content-center align-items-center'>
								<PlayCircleOutlineIcon />
							</Col>
							<Col
								xs={7}
								className='bordered d-flex px-2 py-2 justify-content-start align-items-center'>
								<div>
									<h5>Do you have any question for me?</h5>
								</div>
							</Col>
						</Row>
						<Row>
							<Col className=' d-flex px-2 py-2 justify-content-center align-items-center'>
								<PlayCircleOutlineIcon />
							</Col>
							<Col
								xs={7}
								className='bordered d-flex px-2 py-2 justify-content-start align-items-center'>
								<div>
									<h5>
										Tell me about a time you disagreed with
										someone.
									</h5>
								</div>
							</Col>
						</Row>
						<Row>
							<Col className=' d-flex px-2 py-2 justify-content-center align-items-center'>
								<PlayCircleOutlineIcon />
							</Col>
							<Col
								xs={7}
								className='bordered d-flex px-2 py-2 justify-content-start align-items-center'>
								<div>
									<h4>Why should we hire you?</h4>
								</div>
							</Col>
						</Row>
					</Card.Body>
					<Card.Header className=' d-flex px-2 py-2 justify-content-center align-items-center'>
						<div>See all questions</div>
					</Card.Header>
				</Card>
			</div>
		);
	}
}
export default withRouter(Videos);
