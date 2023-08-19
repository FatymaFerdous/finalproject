import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/context'
import Cookies from 'js-cookie';
import './guestcustom.css'

export default function GuestNav() {

    const { state, dispatch } = useContext(GlobalContext)


    return (
        <Navbar expand="lg" className="navbar fixed-top">
            <Container>
                <Link className='navbar-brand' to='/'>CRASHERS</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                    <Link to='/' className='nav-link'>Home</Link>
                        <Link to='/products' className='nav-link'>Products</Link>
                    </Nav>

                    <div className="d-flex gap-3">
                        <Link className="btn btn-success" to='/login'>Login</Link>
                        <Link className="btn btn-success" to='/signup'>Signup</Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
