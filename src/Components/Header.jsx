import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar className="bg-dark">                   {/*This header nav bar is from react bootstrap */}  
    <Container>
      <Navbar.Brand>

      <FontAwesomeIcon icon={faVideo} bounce style={{color:"blue", fontSize:'30px'}}/>{' '}    {/*fontawesome installed code */}
        <span style={{color:'white', fontSize:'30px'}} className='ms-2'>Media Player</span>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header