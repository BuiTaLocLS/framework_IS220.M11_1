import React from 'react';
import { Navbar, Nav, NavDropdown, Container, FormControl, Form, Button } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";

import './Header.scss';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="fixed-top top-header">
                <Container fluid>
                    <Navbar.Brand className="logo-branch"><Link to="/">Shopthethao</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link><Link to="/catalog">Sản phẩm</Link></Nav.Link>

                            <NavDropdown title="Doanh mục" id="navbarScrollingDropdown">
                                <NavDropdown.Item><Link to="/catalog">Giày thể thao</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/catalog">Quần áo bóng đá</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/catalog">Túi thể thao</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/catalog">Bó gói bóng đá</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/catalog">Khác</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link><Link to="/contact">Liên hệ</Link></Nav.Link>
                        </Nav>
                        <Form className="d-flex me-5">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav
                            className="float-end my-2 my-lg-0 me-5"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link><Link to="/list-cart">Cart(0)</Link></Nav.Link>
                            <Nav.Link><Link to="/log-in">Login</Link></Nav.Link>
                            <Nav.Link><Link to="/sign-up">Sign up</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div class="fix-top"></div>
        </div >
    );
};

export default Header;