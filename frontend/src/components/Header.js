import React from 'react';
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown, } from "react-bootstrap";
import { logout } from "../actions/userAction.js"
const Header = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const logoutHandler = () => {
        dispatch(logout())
    }
    return (
        <header className="header">
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect className="top">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>ProShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link><i className="fas fa-shopping-cart">Cart</i></Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <linkContainer to='/profile'>
                                        <NavDropdown.Item>
                                            Profile
                                        </NavDropdown.Item>
                                    </linkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : <LinkContainer to="/login">
                                <Nav.Link><i className="fas fa-user">login</i></Nav.Link>
                            </LinkContainer>}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </header >
    )
}
export default Header;
