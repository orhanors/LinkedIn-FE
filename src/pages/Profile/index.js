import React from "react";
import { Col, Alert, Spinner } from "react-bootstrap";
import BoxInfo from "../../components/BoxInfo";
import ProfileStrength from "../../components/ProfileStrength";
import Dashboard from "../../components/Dashboard";
import ModalForm from "../../components/ModalForm";
import Activity from "../../components/Activity";
import ELC from "../../components/ELC";
import SkillsAndEndorsement from "../../components/SkillsAndEndorsement";
import Interests from "../../components/Interests";
import ModalExperience from "../../components/ModalExperience";
import Sidebar from "../../components/Sidebar";
import { getCurrentUser } from "../../api/profile";

class Profile extends React.Component {
	state = {
		myProfile: {},
		show: false,
		submitCounter: 0,
		showModalExperience: false,
		MyExperience: [],
		editExperience: { experience: {} },
		submitExpCounter: 0,
		loading: true,
		loadingExp: true,
	};

	fetchProfile = async () => {
		this.setState({ loading: true });

		const url =
			this.props.match.params.id === "me"
				? "https://striveschool-api.herokuapp.com/api/profile/me"
				: "https://striveschool-api.herokuapp.com/api/profile/" +
				  this.props.match.params.id;
		try {
			let response = await fetch(url, {
				headers: {
					Authorization: process.env.REACT_APP_TOKEN,
				},
			});

			let myProfile = await response.json();
			console.log(myProfile);

			if (response.ok) {
				this.fetchExperience(myProfile._id);
				this.setState({ myProfile, loading: false });
			} else {
				this.setState({ loading: false });
				<Alert variant='danger'>Something went wrong</Alert>;
			}
		} catch (error) {
			console.log(error);
		}
	};
	fetchExperience = async (id) => {
		this.setState({ loadingExp: true });
		try {
			let response = await fetch(
				`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
				{
					headers: {
						Authorization: process.env.REACT_APP_TOKEN,
					},
				}
			);
			let MyExperience = await response.json();
			console.log("here experience", MyExperience);
			MyExperience = MyExperience.reverse();

			if (response.ok) {
				this.setState({ MyExperience, loadingExp: false });
			} else {
				this.setState({ loadingExp: false });
				<Alert variant='danger'>Something went wrong</Alert>;
			}
		} catch (err) {
			console.log(err);
		}
	};

	componentDidMount = () => {
		if (this.props.match.params.id === "me") {
			this.props.changeMe();
		} else {
			this.props.changeNotMe();
		}
		this.fetchProfile();
	};

	componentDidUpdate = (previousProps, previousState) => {
		if (previousState.submitCounter !== this.state.submitCounter) {
			this.fetchProfile();
		}

		if (previousState.submitExpCounter !== this.state.submitExpCounter) {
			this.fetchExperience(this.state.myProfile._id);
		}
		if (previousProps.match.params.id !== this.props.match.params.id) {
			if (this.props.match.params.id === "me") {
				this.props.changeMe();
			} else {
				this.props.changeNotMe();
			}
			this.fetchProfile();
		}
	};

	render() {
		console.log("profile props:", this.props.location.pathname);
		return (
			<>
				{this.state.show && (
					<ModalForm
						show={this.state.show}
						hide={() =>
							this.setState({
								show: false,
							})
						}
						myProfile={this.state.myProfile}
						submitCounter={() =>
							this.setState({
								submitCounter: this.state.submitCounter + 1,
							})
						}
					/>
				)}

				<Col md={8}>
					{this.state.loading ? (
						<Spinner
							animation='border'
							variant='success'
							style={{ marginLeft: "45%" }}
						/>
					) : (
						<BoxInfo
							id={this.state.myProfile._id}
							me={this.props.me}
							myProfile={this.state.myProfile}
							onClicked={() => {
								this.setState({ show: true });
							}}
							submitCounter={() =>
								this.setState({
									submitCounter: this.state.submitCounter + 1,
								})
							}
						/>
					)}
					{this.props.me && (
						<>
							<ProfileStrength exp={this.state.MyExperience} />

							<Dashboard />
						</>
					)}
					<>
						<Activity myProfile={this.state.myProfile} />

						{this.state.showModalExperience && (
							<ModalExperience
								id={this.state.myProfile._id}
								showModalExperience={
									this.state.showModalExperience
								}
								hide={() =>
									this.setState({
										showModalExperience: false,
										editExperience: { experience: {} },
									})
								}
								submitExpCounter={() =>
									this.setState({
										submitExpCounter:
											this.state.submitExpCounter + 1,
									})
								}
								editExp={this.state.editExperience}
							/>
						)}

						{this.state.loadingExp ? (
							<Spinner
								animation='border'
								variant='success'
								style={{ marginLeft: "45%" }}
							/>
						) : (
							<ELC
								me={this.props.me}
								onClicked={() => {
									this.setState({
										showModalExperience: true,
									});
								}}
								MyExperience={this.state.MyExperience}
								editExp={(experience) =>
									this.setState({
										editExperience: {
											experience: experience,
										},
									})
								}
								submitExpCounter={() =>
									this.setState({
										submitExpCounter:
											this.state.submitExpCounter + 1,
									})
								}
							/>
						)}

						<SkillsAndEndorsement me={this.props.me} />
						<Interests />
					</>
				</Col>
				<Col md={4} className='px-5'>
					<Sidebar me={this.props.me} />
				</Col>
			</>
		);
	}
}
export default Profile;
