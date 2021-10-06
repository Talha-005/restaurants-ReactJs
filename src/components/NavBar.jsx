import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faHome, faList, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Restaurant API</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link ><Link className='nav-items' to='/'><FontAwesomeIcon icon={faHome} color='rgba(0, 0, 0, 0.918)' />&ensp;Home</Link></Nav.Link>
                            <Nav.Link ><Link className='nav-items' to='/create'><FontAwesomeIcon icon={faPlus} color='rgba(0, 0, 0, 0.918)' />&ensp;Create</Link></Nav.Link>
                            <Nav.Link ><Link className='nav-items' to='/list'><FontAwesomeIcon icon={faList} color='rgba(0, 0, 0, 0.918)' />&ensp;List</Link></Nav.Link>
                            <Nav.Link ><Link className='nav-items' to='/search'><FontAwesomeIcon icon={faSearch} color='rgba(0, 0, 0, 0.918)' />&ensp;Search</Link></Nav.Link>
                           {
                               localStorage.getItem('login')?
                               <Nav.Link ><Link className='nav-items' to='/logout'><FontAwesomeIcon icon={faUser} color='rgba(0, 0, 0, 0.918)' />&ensp;Logout</Link></Nav.Link>:
                               <Nav.Link ><Link className='nav-items' to='/login'><FontAwesomeIcon icon={faUser} color='rgba(0, 0, 0, 0.918)' />&ensp;Login</Link></Nav.Link>
                           }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
