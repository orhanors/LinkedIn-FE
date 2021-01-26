import React from "react";
import {
	Col,
	Container,
	Row,
	Dropdown,
	DropdownButton,
	InputGroup,
} from "react-bootstrap";
import "./styles.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

class Footer extends React.Component {
	state = { selectedlanguageTitle: "English (English)", lang: "en" };
	changeLanguageHandler = (e) => {
		this.setState({ lang: e.target.value });
		console.log(e.targe.value);
	};
	render() {
		const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
			<a
				href=''
				ref={ref}
				onClick={(e) => {
					e.preventDefault();
					onClick(e);
				}}>
				{children}
				<KeyboardArrowDownIcon />
			</a>
		));
		return (
			<Container className='footercontainer my-4'>
				<footer>
					<Row className='py-3 ml-2'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/1024px-LinkedIn_Logo_2013.svg.png'
							width='84'
							height='21'
							alt='linkedin logo'
						/>
					</Row>
					<Row>
						<Col xs={2}>
							<ul>
								<li>
									<a href='#'>About</a>
								</li>
								<li>
									<a href='#'>Community Guidelines</a>
								</li>

								<li>
									<Dropdown>
										<Dropdown.Toggle
											as={CustomToggle}
											id='dropdown-custom-components'>
											<a href='#'>Privacy & Terms</a>
										</Dropdown.Toggle>
										<Dropdown.Menu>
											<Dropdown.Item
												className='dropdownitems'
												href='#'>
												Privacy policy
											</Dropdown.Item>
											<Dropdown.Item
												className='dropdownitems'
												href='#'>
												User Agreement
											</Dropdown.Item>
											<Dropdown.Item
												className='dropdownitems'
												href='#'>
												Cookie Policy
											</Dropdown.Item>
											<Dropdown.Item
												className='dropdownitems'
												href='#'>
												Copyright Policy
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</li>
							</ul>
						</Col>
						<Col xs={2}>
							<ul>
								<li>
									<a href='#'>Accessibility</a>
								</li>
								<li>
									<a href='#'>Careers</a>
								</li>
								<li>
									<a href='#'> Ad Choices</a>
								</li>
								<li>
									<a href='#'> Mobile</a>
								</li>
							</ul>
						</Col>
						<Col xs={2}>
							<ul>
								<li>
									<a href='#'>Talent Solutions</a>
								</li>
								<li>
									<a href='#'>Marketing Solutions</a>
								</li>
								<li>
									<a href='#'>Advertising</a>
								</li>
								<li>
									<a href='#'>Small Business</a>
								</li>
							</ul>
						</Col>
						<Col xs={3}>
							<Row>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									data-supported-dps='24x24'
									fill='currentColor'
									className='mercado-match'
									width='24'
									height='24'
									focusable='false'>
									<path d='M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 16.25A1.25 1.25 0 1113.25 17 1.25 1.25 0 0112 18.25zm1.41-5.46L13 13v1h-2v-2.21l1.49-.79C13.82 10.34 14 9.77 14 9.3c0-.78-.92-1.3-2.3-1.3A7.12 7.12 0 008 9.24V7a8 8 0 013.7-1c3 0 4.3 1.55 4.3 3.3a3.91 3.91 0 01-2.59 3.49z'></path>
								</svg>
								<div className='d-flex flex-column mx-2 helpsection'>
									<a href='#'>Questions?</a>
									<p className='text-muted'>
										Visit our Help Center.
									</p>
								</div>
							</Row>
							<Row className='my-3'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									data-supported-dps='24x24'
									fill='currentColor'
									className='mercado-match'
									width='24'
									height='24'
									focusable='false'>
									<path d='M9.18 2l-4.3 2.52L6.22 8l-.52.91-3.7.55v5l3.64.54.54.93-1.34 3.53L9.14 22l2.29-2.9h1.09l2.3 2.9 4.32-2.52L17.79 16l.53-.93 3.68-.53v-5L18.32 9l-.51-.9 1.36-3.51L14.86 2l-2.33 3h-1zM12 9a3 3 0 11-3 3 3 3 0 013-3z'></path>
								</svg>
								<div className='d-flex flex-column mx-2 helpsection'>
									<a href='#'>
										Manage your account and privacy
									</a>
									<p className='text-muted'>
										Go to your Settings.
									</p>
								</div>
							</Row>
						</Col>
						<Col xs={3}>
							<label className='text-muted my-0 py-0'>
								Select Language
							</label>
							<DropdownButton
								as={InputGroup.Prepend}
								variant='light'
								title={this.state.selectedlanguageTitle}
								value={this.state.lang}
								id='input-group-dropdown-down'
								drop='down'
								className='py-0'
								onChange={this.changeLanguageHandler}>
								<Dropdown.Item href='#' value='en'>
									English
								</Dropdown.Item>

								<Dropdown.Item href='#' value='pl'>
									Polish
								</Dropdown.Item>
								<Dropdown.Item href='#' value='de'>
									Dutch
								</Dropdown.Item>
							</DropdownButton>
						</Col>
					</Row>
				</footer>
			</Container>
		);
	}
}
export default Footer;
