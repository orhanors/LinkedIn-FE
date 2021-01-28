import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import StopIcon from "@material-ui/icons/Stop";
import BookmarkIcon from "@material-ui/icons/Bookmark";

class ProfileCard extends React.Component {
	render() {
		return (
			<div>
				<Card className='ProfileCard mb-3'>
					<Card.Img
						variant='top'
						src='http://lorempixel.com/output/sports-q-c-1920-480-7.jpg'
						className='ProfileCardImg'
					/>

					{Object.values(this.props?.meProfile).length !== 0 && (
						<>
							<Row className='d-flex justify-content-center'>
								<img
									className='avatarProfile'
									src={this.props.meProfile.user.image}
									roundedCircle
								/>
							</Row>

							<Card.Body>
								<Card.Title className='text-center'>
									{this.props.meProfile.user.name}{" "}
									{this.props.meProfile.user.surname}{" "}
								</Card.Title>
								<Card.Text className='text-center'>
									{this.props.meProfile.user.title}
								</Card.Text>

								<Row className='BorderCardProfile mt-3 pt-3'>
									<Col className='d-flex justify-content-between'>
										<span>Connections</span>
										<span>2</span>
									</Col>
								</Row>
								<Row className='mb-3 '>
									<Col className='d-flex justify-content-between'>
										<span>Grow your Network</span>
									</Col>
								</Row>
								<Row className='mt-3 pt-3 BorderCardProfile'>
									<Col className='d-flex justify-content-between'>
										<span>Who viewed your profile</span>
										<span>28</span>
									</Col>
								</Row>
								<Row className='mt-3 pt-3 BorderCardProfile'>
									<Col
										className='d-flex justify-content-start align-items-center'
										md='2'>
										<StopIcon className='gold-box' />
									</Col>
									<Col className='d-flex justify-content-start align-items-center'>
										See all premium features
									</Col>
								</Row>
								<Row className='mt-3 pt-3 BorderCardProfile'>
									<Col
										className='d-flex justify-content-start align-items-center'
										md='2'>
										<BookmarkIcon className='' />
									</Col>
									<Col className='d-flex justify-content-start align-items-center'>
										Saved Items
									</Col>
								</Row>
							</Card.Body>
						</>
					)}
				</Card>
			</div>
		);
	}
}
export default ProfileCard;
