import React from "react";
import { Card } from "react-bootstrap";

function Dashboard() {
	return (
		<Card style={{ backgroundColor: "#dce6f1" }} className='mt-4 p-4'>
			<h4 style={{ fontWeight: "normal" }} className='text-dark'>
				Your Dashboard
			</h4>
			<h5
				style={{ fontWeight: "normal", fontStyle: "italic" }}
				className='text-secondary'>
				Private to you
			</h5>
			<div
				className='d-flex justify-content-between bg-light mt-3 p-3 dashBoardContent'
				style={{ borderRadius: "10px" }}>
				<div style={{ width: "33.3%", borderRight: "1px solid gray" }}>
					<h3
						className='text-primary'
						style={{ fontWeight: "normal" }}>
						22
					</h3>
					<p>Who viewed your profile</p>
				</div>
				<div
					className='ml-3'
					style={{ width: "33.3%", borderRight: "1px solid gray" }}>
					<h3
						className='text-primary'
						style={{ fontWeight: "normal" }}>
						78
					</h3>
					<p>Post views</p>
				</div>
				<div className='ml-3' style={{ width: "33.3%" }}>
					<h3
						className='text-primary'
						style={{ fontWeight: "normal" }}>
						13
					</h3>
					<p>Search apperances</p>
				</div>
			</div>
			<div
				className='d-flex  bg-light mt-3 p-3 dashBoardContent'
				style={{ borderRadius: "10px" }}>
				<div>
					<i
						className='fas fa-bookmark mr-2'
						style={{ color: "#666666" }}></i>
				</div>
				<div>
					<h6 className='text-dark mb-0'>My items</h6>
					<p className='text-secondary my-0'>
						Keep track of your jobs, courses and articles
					</p>
				</div>
			</div>
		</Card>
	);
}

export default Dashboard;
