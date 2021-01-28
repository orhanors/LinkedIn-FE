import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import InfoIcon from "@material-ui/icons/Info";
import "./styles.scss";

class ViewedCourses extends React.Component {
	render() {
		return (
			<Card className=' mt-2'>
				<div className='viewed-container mb-3 pt-3 pb-2'>
					<div className='d-flex justify-content-between align-items-center mb-2'>
						<p className='title mb-1 ml-3'>
							Today's most viewed courses
						</p>
						<div className='infoicon-container d-flex justify-content-center align-items-center mr-3'>
							<InfoIcon style={{ width: 20 }} />
						</div>
					</div>
					<Link
						className='profile-link mb-1 d-flex justify-content-between align-items-center'
						to='/'>
						<div className='news-post d-flex flex-column px-3'>
							<div className='d-flex align-items-center'>
								<p className='link-number'>1.</p>
								<p className='link-title'>
									The Six Morning Habits to High Perfor...
								</p>
							</div>
							<p className='link-subtitle'>
								Pete Mockaitis | How to Be Awesome at Your J...
							</p>
						</div>
						<i className='grey-text fas fa-external-link-alt mr-3'></i>
					</Link>
					<Link
						className='profile-link mb-1 d-flex justify-content-between align-items-center'
						to='/'>
						<div className='news-post d-flex flex-column px-3'>
							<div className='d-flex align-items-center'>
								<p className='link-number'>2.</p>
								<p className='link-title'>
									Time Management for Busy People
								</p>
							</div>
							<p className='link-subtitle'>
								Madecraft and Samantha Bennett
							</p>
						</div>
						<i className='grey-text fas fa-external-link-alt mr-3'></i>
					</Link>
					<Link
						className='profile-link mb-1 d-flex justify-content-between align-items-center'
						to='/'>
						<div className='news-post d-flex flex-column px-3'>
							<div className='d-flex align-items-center'>
								<p className='link-number'>3.</p>
								<p className='link-title'>
									Diversity, Inclusion and Belonging
								</p>
							</div>
							<p className='link-subtitle'>Stacey Gordon</p>
						</div>
						<i className='grey-text fas fa-external-link-alt mr-3'></i>
					</Link>
					<Link to='/'>
						<p className='link-bottom ml-3'>
							Show more on LinkedIn Learning
						</p>
					</Link>
				</div>
			</Card>
		);
	}
}
export default ViewedCourses;
