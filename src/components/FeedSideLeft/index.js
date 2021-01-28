import React from "react";
import ProfileCard from "../ProfileCard";
import { Row, Col } from "react-bootstrap";

class FeedSideLeft extends React.Component {
	render() {
		return (
			<div>
				<Row>
					<Col>
						<ProfileCard meProfile={this.props.meProfile} />
					</Col>
				</Row>
			</div>
		);
	}
}
export default FeedSideLeft;
