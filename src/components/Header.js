import React from 'react';
import { Navbar, Nav, NavDropdown, Container, FormControl, Form, Button } from 'react-bootstrap';
import './Header.scss';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="fixed-top top-header">
                <Container fluid>
                    <Navbar.Brand href="/">Shopthethao</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Sản phẩm</Nav.Link>
                            <Nav.Link href="#action2">Liên hệ</Nav.Link>
                            <NavDropdown title="Doanh mục" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Giày</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Quần áo thể thao</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Khác
                                </NavDropdown.Item>
                            </NavDropdown>
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
                            <Nav.Link href="#action1">Cart(0)</Nav.Link>
                            <Nav.Link href="/log-in">Login</Nav.Link>
                            <Nav.Link href="/sign-up">Sign up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div class="fix-top"></div>
        </div>
    );
};

export default Header;