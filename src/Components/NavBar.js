import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavBar = () => {
    return (
        // This component needs to render 4 <NavLink> components. They will be for /, /movies, /directors, /actors <-- in this order(test checks for this).
        // <div className={'navbar'}>
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Inventory Management System</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/ItemLookup">Item Look-up</Nav.Link>
                    <Nav.Link href="/AdjustInventory">Adjust Inventory</Nav.Link>
                    <Nav.Link href="/OrderInventory">Order Inventory</Nav.Link>
                    <Nav.Link href="/About">About this Project</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default NavBar;