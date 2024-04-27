import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuffer } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
//import PopOver from '../popover/PopOver';
//import { useAppContext } from '../../../context';


const NavBar = () => {
    //const { state: { user } } = useAppContext()
    const [isSticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, [])

    const scrollTop = () => window['scrollTo']({ top: 0, behavior: 'smooth' });
    return (
        <Navbar className={`navbar navbar-expand-lg navbar-light ${isSticky ? "navStyle" : "navDefault"}`} expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" onClick={scrollTop} className="navBrn">
                    <FontAwesomeIcon icon={faBuffer} className="brnIcon" /> Easy <span className="navHighlight">Consulting</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto mainNav" activeKey="/">
                        <Nav.Item>
                            <Nav.Link as={Link} to="#home"  className="nav-link" onClick={() => window['scrollTo']({ top: 0, behavior: 'smooth' })}>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#blogs" className="nav-link">Blogs</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#careers" className="nav-link">Careers</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#contact" className="nav-link">Contact Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#about-us" className="nav-link">About-us</Nav.Link>
                        </Nav.Item>
                       
                        {/* <Nav.Item>
                            {
                                user.email ?
                                    <div>
                                        <PopOver />
                                    </div> :
                                    <Link to="/login">
                                        <button className="loginBtn">Login</button>
                                    </Link>
                            }
                        </Nav.Item> */}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;