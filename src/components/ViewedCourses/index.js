import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import InfoIcon from "@material-ui/icons/Info";

class ViewedCourses extends React.Component {
	render() {
		return (
			<Card className=' mt-2'>
				<Card.Body>
					<Container fluid className='d-flex justify-content-between'>
						<h4>Today's most viewed courses</h4>
						<Link>
							<InfoIcon />
						</Link>
					</Container>
					<Row>
						<Col className=' d-flex justify-content-start align-items-center'>
							<Link to={"#"}>
								<h4>
									<strong>1.Mongo DB</strong>
								</h4>
								<p>Company-Computer Software</p>
							</Link>
						</Col>
					</Row>
					<Row>
						<Col className=' d-flex  justify-content-start align-items-center'>
							<Link to={"#"}>
								<h4>
									<strong>2.Mongo DB</strong>
								</h4>
								<p>Company-Computer Software</p>
							</Link>
						</Col>
					</Row>
					<Row>
						<Col className=' d-flex  justify-content-start align-items-center'>
							<Link to={"#"}>
								<h4>
									<strong>3.Mongo DB</strong>
								</h4>
								<p>Company-Computer Software</p>
							</Link>
						</Col>
					</Row>
				</Card.Body>
				<Card.Header className='card-header'>
					<Link to='#'>
						<h6>
							<strong>Show more on LinkedIN Learning</strong>
						</h6>
					</Link>
				</Card.Header>
			</Card>
		);
	}
}
export default ViewedCourses;
