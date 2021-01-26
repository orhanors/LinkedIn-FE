import React from "react";
import { Image } from "react-bootstrap";

class Advertise extends React.Component {
	render() {
		return (
			<div className=' mb-2'>
				<Image
					style={{ width: "1100%" }}
					src='https://i.ibb.co/SKPFPHW/li-evergreen-jobs-ad-300x250-v1.jpg'
					thumbnail
					className='img'
				/>
			</div>
		);
	}
}
export default Advertise;
