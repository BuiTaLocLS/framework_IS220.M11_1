import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Nav, NavDropdown, Container, FormControl, Form, Button } from 'react-bootstrap';
import { Link, useHistory } from "react-router-dom";

import { CartContext } from '../contexts/CartContext';
import AuthService from '../customize/auth.service';
import getSessionStorage from "../customize/getSessionStorage"
import useFetch from '../customize/fetch';
import './Header.scss';

import { AuthContext } from '../contexts/AuthContext';
const length = (cart) => {
    sessionStorage.setItem('listCart', JSON.stringify(cart));
    return cart.length
}


const Header = () => {
    let history = useHistory();
    const { isAuthenticated, name, handleSetAuth } = useContext(AuthContext);
    const { cart } = useContext(CartContext);
    const [userID, setUserID] = useState(
        getSessionStorage('userID', false)
    );

    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        if(localStorage.getItem("user") === null){
            localStorage.setItem("user", JSON.stringify(""));
        }
        const user1 = AuthService.getCurrentUser();
        if (user1) {
        setCurrentUser(user1.accountID);
        }
    }, [currentUser]);

    const [search, setSearch] = useState("");
    console.log('userID: ', userID)
    // const { data: user, loading, isError } = useFetch(`http://localhost:54610/api/User/GetbyID/${userID}`);

    // console.log("user", user)

    const handleOnChangeSearch = (event) => {
        setSearch(event.target.value);

    }

    const handleLogout = () => {
        AuthService.logout();
        setCurrentUser(undefined);
        history.push("/");
    }

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
                            <Nav.Link><Link to="/catalog/">Sản phẩm</Link></Nav.Link>

                            <NavDropdown title="Doanh mục" id="navbarScrollingDropdown">
                                <NavDropdown.Item><Link to="/catalog/3">Giày thể thao</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/catalog/5">Quần áo bóng đá</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/catalog/7">Túi thể thao</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/catalog/6">Bó gói bóng đá</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>
                                    <Link to="/catalog">Khác</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link><Link to="/contact">Liên hệ</Link></Nav.Link>
                        </Nav>
                        <Form className="d-flex me-5">
                            <Form.Control
                                id="seachBar"
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={search}
                                onChange={(event) => handleOnChangeSearch(event)}
                            />
                            <Nav.Link><Link to={`/catalog/${search}`}><Button variant="outline-success">Tìm</Button></Link></Nav.Link>
                        </Form>
                        <Nav
                            className="float-end my-2 my-lg-0 me-5"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Nav.Link><Link to="/list-cart">Cart({length(cart)})</Link></Nav.Link>
                            {
                                currentUser ?(
                                <>
                                    <Nav.Link><Link to="/profile">{currentUser}</Link></Nav.Link>
                                    <button type="button" className="btn btn-outline-danger" onClick={() => handleLogout()}>Đăng xuất</button>
                                </>)
                            
                                :(
                                <>
                                    <Nav.Link><Link to="/log-in">Login</Link></Nav.Link>
                                    <Nav.Link><Link to="/sign-up">Sign up</Link></Nav.Link>
                                </>
                                )
                            }




                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div class="fix-top"></div>
        </div >
    );
};

export default Header;