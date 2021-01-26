import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import HelpIcon from "@material-ui/icons/Help";

class TopSettings extends React.Component {
	render() {
		return (
			<div className='top-settings mt-2 mb-2 '>
				<ListGroup variant='flush' className='top-settings '>
					<ListGroup.Item>
						<Link
							to='#'
							className='linkA d-flex justify-content-between'>
							<span>Edit Public Profile & URL</span> <HelpIcon />
						</Link>
					</ListGroup.Item>
					<ListGroup.Item>
						{" "}
						<Link
							to='#'
							className='linkA d-flex justify-content-between'>
							<span>Add profile in another language</span>{" "}
							<HelpIcon />
						</Link>
					</ListGroup.Item>
				</ListGroup>
			</div>
		);
	}
}
export default withRouter(TopSettings);
