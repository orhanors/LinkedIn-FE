import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import StopIcon from "@material-ui/icons/Stop";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import { Link } from "react-router-dom";
import "./styles.scss";
class ProfileCard extends React.Component {
	showProfileCard = () => {
		return (
			<div>
				<Card className='ProfileCard mb-3'>
					<Card.Img
						variant='top'
						src='https://coverfiles.alphacoders.com/372/37275.jpg'
						className='ProfileCardImg'
					/>

					{this.props?.meProfile && (
						<>
							{console.log(
								"test the test: ",
								this.props.meProfile
							)}
							<Row className='d-flex justify-content-center'>
								<img
									className='avatarProfile'
									src={this.props.meProfile.image}
									roundedCircle
								/>
							</Row>

							<Card.Body>
								<Link to='profile/me'>
									<Card.Title className='text-center left-side-title'>
										{this.props.meProfile.name}{" "}
										{this.props.meProfile.surname}{" "}
									</Card.Title>
								</Link>

								<small className='text-center left-side-info'>
									{this.props.meProfile.title}
								</small>
								<hr />
								<Row className='mt-3 pt-3'>
									<Col className='d-flex justify-content-between'>
										<span className='left-side-views'>
											Who viewed your profile
										</span>
										<span className='numeric-info '>2</span>
									</Col>
								</Row>
								<Row className='mt-2 left-side-views'>
									<Col className='d-flex justify-content-between'>
										<span>Connections</span>
										<span className='numeric-info '>
											{
												this.props.meProfile?.friends
													?.length
											}
										</span>
									</Col>
								</Row>

								<Row className='mt-3 pt-3 '>
									<Col
										className='d-flex justify-content-start align-items-center'
										md='2'>
										<StopIcon className='gold-box ' />
									</Col>
									<Col className='left-side-bottom d-flex justify-content-start align-items-center'>
										See all premium features
									</Col>
								</Row>
								<Row className='mt-3 pt-3 '>
									<Col
										className='d-flex justify-content-start align-items-center'
										md='2'>
										<BookmarkIcon />
									</Col>
									<Col className='ml-0 left-side-bottom d-flex justify-content-start align-items-center'>
										Saved Items
									</Col>
								</Row>
							</Card.Body>
						</>
					)}
				</Card>
			</div>
		);
	};

	render() {
		return <div>{this.showProfileCard()}</div>;
	}
}
export default ProfileCard;
