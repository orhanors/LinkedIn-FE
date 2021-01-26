import React from "react";
import { Row, Col } from "react-bootstrap";
import Advertise from "../Advertise";
import Know from "../Know";
import MayKnow from "../MayKnow";
import _ from "lodash";
import TopSettings from "../TopSettings";
import Videos from "../Videos";
// import { EuroSymbolSharp } from "@material-ui/icons";

class Sidebar extends React.Component {
	state = {
		users: [],
		arr1: [],
		arr2: [],
		arr3: [],
		arr4: [],
	};
	componentDidMount = async () => {
		try {
			const response = await fetch(
				"https://striveschool-api.herokuapp.com/api/profile",
				{
					headers: {
						Authorization: process.env.REACT_APP_TOKEN,
					},
				}
			);
			let users = await response.json();
			users = users.filter(
				(user) =>
					user.username !== process.env.REACT_APP_USER && user.name
			);
			if (response.ok) {
				console.log("all users", users);
				const shuffledUsers = _.slice(_.shuffle(users), 0, 16);
				console.log({
					shuffledUsers,
					users,
				});
				this.setState({ users: shuffledUsers });
			} else {
				this.setState({ loadingExp: false });
			}
		} catch (e) {
			this.setState({ loadingExp: false, error: e });
		}
		console.log("HOPING THEY ARE FILTERED", this.state.users);
		const n = 4;
		const result = [[], [], [], []];

		const wordsPerLine = Math.ceil(this.state.users.length / 4);

		for (let line = 0; line < n; line++) {
			for (let i = 0; i < wordsPerLine; i++) {
				const value = this.state.users[i + line * wordsPerLine];
				result[line].push(value);
			}
		}
		this.state.arr1 = result[0];
		this.state.arr2 = result[1];
		this.state.arr3 = result[2];
		this.state.arr4 = result[3];
		console.log("TEST", this.state.arr1, this.state.arr2);
	};

	render() {
		return (
			<>
				{this.props.me && (
					<Row>
						<Col>
							<TopSettings />
						</Col>
					</Row>
				)}
				<Row>
					<Col>
						<Advertise />
					</Col>
				</Row>
				<Row>
					<Col>
						<Know
							oneProps={this.state.arr1}
							twoProps={this.state.arr2}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<MayKnow
							threeProps={this.state.arr3}
							fourProps={this.state.arr4}
						/>
					</Col>
				</Row>
				<Row>
					<Col>
						<Videos />
					</Col>
				</Row>
			</>
		);
	}
}
export default Sidebar;
