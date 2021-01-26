import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class ProfileCard extends React.Component {
	render() {
		return (
			<div>
				<Card>
					<Container>
						<Row className='mt-3 mb-3'>
							<Col>
								<Link>Groups</Link>
							</Col>
						</Row>
						<Row className='mt-3 mb-3'>
							<Col>
								<Link>Events</Link>
							</Col>
						</Row>
						<Row className='mt-3 mb-3'>
							<Col>
								<Link>Followed Hashtags</Link>
							</Col>
						</Row>
					</Container>
					<Card.Header className='text-center card-header'>
						<Link to='#'>Discover More</Link>
					</Card.Header>
				</Card>
			</div>
		);
	}
}
export default ProfileCard;
