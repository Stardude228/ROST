import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
} from 'reactstrap';
import './cssFiles/Header.css'
import { Link, useHistory } from 'react-router-dom';
import Logo from '../assets/images/Rost.png'
import CartModal from '../pages/Cart';
import Return from '../assets/icons/return.svg'
// import Search from './Search';

const Header = () => {

    const history = useHistory()
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <img style={{ cursor: "pointer" }} width="25" src={Return} onClick={() => history.goBack()} />
                <Link to="/"><img className="logo" src={Logo} /><NavbarBrand className="HeaderLinks">ROST</NavbarBrand></Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <CartModal />
                        </NavItem>
                        <NavItem className="mt-2">
                            <Link to="/" className="HeaderLinks">
                                Home
                            </Link>
                        </NavItem>
                        <NavItem className="mt-2">
                            <Link to="/products" className="HeaderLinks">
                                Products
                            </Link>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className="HeaderLinks">
                                Options
                            </DropdownToggle>
                            <DropdownMenu className="bg-dark HeaderDropdownMenu" right>

                                <Link to="/iphone" className="HeaderLinks">
                                    <DropdownItem className="HeaderDropdownItems">
                                        Iphone
                                    </DropdownItem>
                                </Link>

                                <Link to="/samsung" className="HeaderLinks">
                                    <DropdownItem className="HeaderDropdownItems">
                                        Samsung
                                    </DropdownItem>
                                </Link>

                                <Link to="/xiaomi" className="HeaderLinks">
                                    <DropdownItem className="HeaderDropdownItems">
                                        Xiaomi
                                    </DropdownItem>
                                </Link>

                                <Link to="/soon" className="HeaderLinks">
                                    <DropdownItem className="HeaderDropdownItems">
                                        Soon
                                    </DropdownItem>
                                </Link>

                            </DropdownMenu>
                        </UncontrolledDropdown>
                        {!!localStorage.getItem("token") ? (
                            <NavItem className="mt-2">
                                <Link to="/auth/logout" className="HeaderLinks">
                                    Logout
                                </Link>
                            </NavItem>
                        ) : (
                                <NavItem className="mt-2">
                                    <Link to="/auth/login" className="HeaderLinks">
                                        Login
                                    </Link>
                                </NavItem>
                        )}
                        {/* <Search/> */}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Header; 