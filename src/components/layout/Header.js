import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import classes from './Header.module.css';

function Header() {
	return (
		<Navbar
			expand="lg"
			variant="light"
			bg="light"
			className={classes.header}
		>
			<Container fluid>
				<Navbar.Brand href="#" sticky="top">
					Luke Mico
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<NavDropdown title="About" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">
								About
							</NavDropdown.Item>
							<NavDropdown.Item href="#action4">
								About 1
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">
								About 2
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title="Porfolio"
							id="navbarScrollingDropdown"
						>
							<NavDropdown.Item href="#action3">
								Porfolio
							</NavDropdown.Item>
							<NavDropdown.Item href="#action4">
								Porfolio 1
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">
								Porfolio 2
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title="Skills"
							id="navbarScrollingDropdown"
						>
							<NavDropdown.Item href="#action3">
								Skills
							</NavDropdown.Item>
							<NavDropdown.Item href="#action4">
								Skills 1
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">
								Skills2
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="Blog" id="navbarScrollingDropdown">
							<NavDropdown.Item href="#action3">
								Blog
							</NavDropdown.Item>
							<NavDropdown.Item href="#action4">
								Blog 1
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action5">
								Blog 2
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Button variant="outline-success">Get in touch</Button>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
