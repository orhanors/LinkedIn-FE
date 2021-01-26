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

	getUser = async () => {
		this.setState({ loading: true });
		const response = await getCurrentUser();
		if (!response.errors) {
			this.setState({
				myProfile: response.data,
				MyExperience: response.data.experiences,
				loading: false,
				loadingExp: false,
			});
		}
	};

	componentDidMount = () => {
		if (this.props.match.params.id == "me") {
			this.props.changeMe();
		} else {
			this.props.changeNotMe();
		}
		this.getUser();
	};

	componentDidUpdate = (previousProps, previousState) => {
		if (previousState.submitCounter !== this.state.submitCounter) {
			this.getUser();
		}

		if (previousProps.match.params.id !== this.props.match.params.id) {
			if (this.props.match.params.id === "me") {
				this.props.changeMe();
			} else {
				this.props.changeNotMe();
			}
			this.getUser();
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
