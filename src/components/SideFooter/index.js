import React from "react";
import { Link } from "react-router-dom";

class SideFooter extends React.Component {
	render() {
		return (
			<>
				<div className='d-flex flex-column align-items-center justify-content-center w-100 mt-4'>
					<div className='d-flex justify-content-between'>
						<Link className='grey-text mr-4 pr-2' to='/'>
							<small>About</small>
						</Link>
						<Link className='grey-text mr-4 pr-2' to='/'>
							<small>Accessibility</small>
						</Link>
						<Link className='grey-text' to='/'>
							<small>Help Center</small>
						</Link>
					</div>
					<div className='d-flex justify-content-between'>
						<Link className='grey-text mr-4 pr-2' to='/'>
							<small>Privacy & Terms</small>
						</Link>
						<Link className='grey-text mr-4 pr-2' to='/'>
							<small>Ad Choices</small>
						</Link>
						<Link className='grey-text' to='/'>
							<small>Advertising</small>
						</Link>
					</div>
					<div className='d-flex justify-content-between'>
						<Link className='grey-text mr-4 pr-2' to='/'>
							<small>Business Services</small>
						</Link>
						<Link className='grey-text' to='/'>
							<small>Get the LinkedIn app</small>
						</Link>
					</div>
					<div className='mb-3'>
						<Link className='grey-text' to='/'>
							<small>More</small>
						</Link>
					</div>
					<div className='d-flex justify-content-between'>
						<div className='d-flex align-items-center'>
							<small
								className='font-weight-bold'
								style={{
									marginRight: 1,
									color: "rgb(10, 102, 194)",
								}}>
								Linked
							</small>
							<i
								className='fab fa-linkedin mr-2'
								style={{ color: "rgb(10, 102, 194)" }}></i>
						</div>
						<small className='black-text'>
							LinkedIn Corporation © 2020
						</small>
					</div>
				</div>
			</>
		);
	}
}
export default SideFooter;
