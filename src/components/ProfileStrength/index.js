import React from "react";
import { Card } from "react-bootstrap";

class ProfileStrength extends React.Component {
	state = {
		myExp: this.props.exp,
	};

	profileStrng = () => {
		let title = "";
		if (this.state.myExp.length < 3) {
			title = "Beginner";
		} else if (this.state.myExp.length > 2 && this.state.myExp.length < 5) {
			title = "Intermediate";
		} else if (this.state.myExp.length > 4 && this.state.myExp.length < 7) {
			title = "Expert";
		} else if (this.state.myExp.length > 6) {
			title = "All-Star";
		}
		return title;
	};

	componentDidUpdate = (previousProps) => {
		if (previousProps.exp.length !== this.props.exp.length) {
			this.setState({ myExp: this.props.exp });
		}
	};

	render() {
		return (
			<Card className='mt-4 p-4'>
				<div className='d-flex justify-content-between'>
					<h4
						className='text-secondary'
						style={{ fontWeight: "normal" }}>
						Profile Strength:{" "}
						<strong className='text-dark'>
							{this.profileStrng()}
						</strong>
					</h4>

					<div>
						<i
							className='fas fa-caret-down fa-2x mr-1 py-0 px-2 '
							style={{ color: "#666666" }}></i>
					</div>
				</div>
				<div className='mt-4 progressBar d-flex'>
					<div
						className='ml-1'
						style={{
							background:
								this.state.myExp.length >= 1
									? "linear-gradient(90deg, rgba(83,76,194,1) 28%, rgba(68,102,191,1) 66%)"
									: "#e1e9ee",
						}}></div>
					<div
						className='ml-1'
						style={{
							background:
								this.state.myExp.length >= 2
									? "linear-gradient(90deg, rgba(66,105,192,1) 28%, rgba(51,130,189,1) 80%)"
									: "#e1e9ee",
						}}></div>
					<div
						className='ml-1'
						style={{
							background:
								this.state.myExp.length >= 3
									? "linear-gradient(90deg, rgba(48,135,188,1) 28%, rgba(34,159,186,1) 80%)"
									: "#e1e9ee",
						}}></div>
					<div
						className='ml-1'
						style={{
							background:
								this.state.myExp.length >= 4
									? "linear-gradient(90deg, rgba(31,163,186,1) 28%, rgba(26,167,165,1) 80%)"
									: "#e1e9ee",
						}}></div>
					<div
						className='ml-1'
						style={{
							background:
								this.state.myExp.length >= 5
									? "linear-gradient(90deg, rgba(27,163,151,1) 28%, rgba(33,153,116,1) 80%)"
									: "#e1e9ee",
						}}></div>
					<div
						className='ml-1'
						style={{
							background:
								this.state.myExp.length >= 6
									? "linear-gradient(90deg, rgba(34,152,110,1) 28%, rgba(40,138,69,1) 80%)"
									: "#e1e9ee",
						}}></div>
					<div
						className='ml-1'
						style={{
							background:
								this.state.myExp.length >= 7
									? "linear-gradient(90deg, rgba(40,137,65,1) 28%, rgba(42,112,50,1) 80%) "
									: "#e1e9ee",
						}}></div>
				</div>
			</Card>
		);
	}
}

export default ProfileStrength;
