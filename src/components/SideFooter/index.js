import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class SideFooter extends React.Component {
	render() {
		return (
			<Card className=' mt-2 sideFooter'>
				<Row>
					<Col className='text-center'>
						<Link>Informations</Link>
					</Col>
					<Col className='text-center'>
						<Link>Accessibility</Link>
					</Col>
					<Col className='text-center'>
						<Link>Service Center</Link>
					</Col>
				</Row>
				<Row>
					<Col className='text-center'>
						<Link>Privacy&Policy</Link>
					</Col>
				</Row>
				<Row>
					<Col className='text-center'>
						<Link>Options for advertisements</Link>
					</Col>
					<Col className='text-center'>
						<Link>Advertising</Link>
					</Col>
				</Row>
				<Row>
					<Col className='text-center'>
						<Link>Business services</Link>
					</Col>
					<Col className='text-center'>
						<Link>Download the LinkedIN app</Link>
					</Col>
				</Row>
				<Row>
					<Col className='text-center'>
						<Link>Other</Link>
					</Col>
				</Row>
				<Row mt-2>
					<Col className='text-center'>Prova</Col>
				</Row>
			</Card>
		);
	}
}
export default SideFooter;
