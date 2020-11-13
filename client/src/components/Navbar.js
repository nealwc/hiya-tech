import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab, Image} from 'react-bootstrap';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';
// import Card from './Card';

import '../index.css';


import UserInfoContext from '../utils/UserInfoContext';
import AuthService from '../utils/auth';

import Logo from '../utils/Photo/hiyadraft2fxd.png';


function AppNavbar() {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  // get username out of context object to display in nav
  const { username } = useContext(UserInfoContext);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top"  style={{'outline': '2px solid #0275d8', marginBottom: '60px', backgroundImage: ''}} >
      {/* bg="dark" variant="dark" expand="lg" sticky="top" style={{'outline': '2px solid #0275d8'}} */}
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
          <Image src={Logo} rounded style={{'width': '200px'}} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto'>
              {/* if user is logged in show create a post and logout */}
              {username ? (
                <>
                  <Nav.Link as={Link} to='/postform' style={{color: '#0275d8'}} id="create">
                    <strong>Post an Item</strong>
                  </Nav.Link>
                  <Nav.Link onClick={AuthService.logout} style={{color: '#0275d8'}} id="logout"><strong>Logout</strong></Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)} style={{color: '#0275d8'}} id="login"><strong>Login/Sign Up</strong></Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal size='lg' show={showModal} onHide={() => setShowModal(false)} aria-labelledby='signup-modal'>
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey='login'>
          <Modal.Header closeButton>
            <Modal.Title id='signup-modal'>
              <Nav variant='pills'>
                <Nav.Item>
                  <Nav.Link eventKey='login'>Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='signup'>Sign Up</Nav.Link>
                </Nav.Item>
                
              </Nav>
              
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey='login'>
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey='signup'>
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
}

export default AppNavbar;
