import React from "react";
import AddFeeds from "../AddFeed";
import { Container, Row, Col } from "react-bootstrap";

import ViewedCourses from "../ViewedCourses";

import SideFooter from "../SideFooter";

class FeedSideRight extends React.Component {
	render() {
		return (
			<Container>
				<Row>
					<Col>
						<AddFeeds />
					</Col>
				</Row>

				<Row>
					<Col>
						<ViewedCourses />
					</Col>
				</Row>

				<Row>
					<Col>
						<SideFooter />
					</Col>
				</Row>
			</Container>
		);
	}
}
export default FeedSideRight;
