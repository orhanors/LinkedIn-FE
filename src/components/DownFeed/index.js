import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";

import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";

import Collapse from "@material-ui/core/Collapse";

import IconButton from "@material-ui/core/IconButton";

import { Row, Col, Container } from "react-bootstrap";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
	root: {
		borderRadius: "0.8rem",
		fontSize: "0.8rem",
	},
	media: {
		height: 0,
		paddingTop: "56.25%",
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: "rotate(180deg)",
	},
}));

export default function DownFeed() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.root}>
			<CardContent>
				<Container fluid className='d-flex justify-content-between'>
					<h4>LinkedIn news</h4>
					<Link>
						<InfoIcon />
					</Link>
				</Container>
				<Row>
					<Col className=' d-flex px-2 py-2 justify-content-start align-items-center'>
						<Link to={"#"}>
							<h4>
								<strong>
									<FiberManualRecordIcon /> sued
								</strong>
							</h4>
							<p>Company-Computer Software</p>
						</Link>
					</Col>
				</Row>
				<Row>
					<Col className=' d-flex px-2 py-2 justify-content-start align-items-center'>
						<Link to={"#"}>
							<h4>
								<strong>
									<FiberManualRecordIcon /> sued
								</strong>
							</h4>
							<p>Company-Computer Software</p>
						</Link>
					</Col>
				</Row>
				<Row>
					<Col className=' d-flex px-2 py-2 justify-content-start align-items-center'>
						<Link to={"#"}>
							<h4>
								<strong>
									<FiberManualRecordIcon /> sued
								</strong>
							</h4>
							<p>Company-Computer Software</p>
						</Link>
					</Col>
				</Row>
				<Row>
					<Col className=' d-flex px-2 py-2 justify-content-start align-items-center'>
						<Link to={"#"}>
							<h4>
								<strong>
									<FiberManualRecordIcon /> sued
								</strong>
							</h4>
							<p>Company-Computer Software</p>
						</Link>
					</Col>
				</Row>
			</CardContent>
			<Collapse in={expanded} timeout='auto' unmountOnExit>
				<CardContent>
					<Row>
						<Col className=' d-flex px-2 py-2 justify-content-start align-items-center'>
							<Link to={"#"}>
								<h4>
									<strong>
										<FiberManualRecordIcon /> sued
									</strong>
								</h4>
								<p>Company-Computer Software</p>
							</Link>
						</Col>
					</Row>
					<Row>
						<Col className=' d-flex px-2 py-2 justify-content-start align-items-center'>
							<Link to={"#"}>
								<h4>
									<strong>
										<FiberManualRecordIcon /> sued
									</strong>
								</h4>
								<p>Company-Computer Software</p>
							</Link>
						</Col>
					</Row>
					<Row>
						<Col className=' d-flex px-2 py-2 justify-content-start align-items-center'>
							<Link to={"#"}>
								<h4>
									<strong>
										<FiberManualRecordIcon /> sued
									</strong>
								</h4>
								<p>Company-Computer Software</p>
							</Link>
						</Col>
					</Row>
					<Row>
						<Col className=' d-flex px-2 py-2 justify-content-start align-items-center'>
							<Link to={"#"}>
								<h4>
									<strong>
										<FiberManualRecordIcon /> sued
									</strong>
								</h4>
								<p>Company-Computer Software</p>
							</Link>
						</Col>
					</Row>
					<Row>
						<Col className=' d-flex px-2 py-2 justify-content-start align-items-center'>
							<Link to={"#"}>
								<h4>
									<strong>
										<FiberManualRecordIcon /> sued
									</strong>
								</h4>
								<p>Company-Computer Software</p>
							</Link>
						</Col>
					</Row>
					<Row>
						<Col className=' d-flex px-2 py-2 justify-content-start align-items-center'>
							<Link to={"#"}>
								<h4>
									<strong>
										<FiberManualRecordIcon /> sued
									</strong>
								</h4>
								<p>Company-Computer Software</p>
							</Link>
						</Col>
					</Row>
					<Row>
						<Col className=' d-flex px-2 py-2 justify-content-start align-items-center'>
							<Link to={"#"}>
								<h4>
									<strong>
										<FiberManualRecordIcon /> sued
									</strong>
								</h4>
								<p>Company-Computer Software</p>
							</Link>
						</Col>
					</Row>
				</CardContent>
			</Collapse>

			<IconButton
				className={clsx(classes.expand, {
					[classes.expandOpen]: expanded,
				})}
				onClick={handleExpandClick}
				aria-expanded={expanded}
				aria-label='show more'>
				<p>Show more</p>
				<ExpandMoreIcon />
			</IconButton>
		</Card>
	);
}
