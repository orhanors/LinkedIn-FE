import React from "react";
import { Image } from "react-bootstrap";

class Advertise extends React.Component {
	render() {
		return (
			<div className=' mb-2'>
				<Image
					style={{ width: "1100%" }}
					src='https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg'
					thumbnail
					className='img'
				/>
			</div>
		);
	}
}
export default Advertise;
