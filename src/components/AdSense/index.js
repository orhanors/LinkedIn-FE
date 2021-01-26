import React from "react";
import { Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class AdSense extends React.Component {
	render() {
		return (
			<Card className=' mt-2 p-2'>
				<Link>
					<Image
						style={{ width: "1100%" }}
						src='https://i.ibb.co/SKPFPHW/li-evergreen-jobs-ad-300x250-v1.jpg'
						thumbnail
						className='img'
					/>
				</Link>
			</Card>
		);
	}
}
export default AdSense;
