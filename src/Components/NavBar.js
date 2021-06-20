import React from 'react';
import { Navbar, Nav,} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar = () => {
    return (
        <div style={{position: 'fixed', width: '100%'}}>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Inventory Management System</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/ItemLookup">Item Look-up</Nav.Link>
                    <Nav.Link href="/Orders">Orders</Nav.Link>
                    <Nav.Link href="/About">About this Project</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};
export default NavBar;