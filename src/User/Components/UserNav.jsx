import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../Context/context'
import Cookies from 'js-cookie';
import './custom.css'

export default function UserNav() {

    const { state, dispatch } = useContext(GlobalContext)


    return (
        <Navbar expand="lg" className="navbar fixed-top">
            <Container>
                <Link className='navbar-brand' to='/'>CRASHERS</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                    <Link to='/' className='nav-link'>Home</Link>
                        <Link to='/category' className='nav-link'>Category</Link>
                        <Link to='/products' className='nav-link'>Products</Link>
                    </Nav>

                    <div className="d-flex gap-3">
                        <Link to='/profile' className="btn btn-outline-success d-flex align-items-center gap-3">
                            <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" style={{ height: '3vh', objectFit: 'contain' }} alt="" />
                            Profile
                        </Link>

                        <Link className="btn btn-success" to='/cart'>Cart</Link>
                        <button className="btn btn-success"
                            onClick={() => {
                                Cookies.remove('token')
                                dispatch({ type: "USER_LOGOUT" })
                            }}
                        >Sign Out</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
