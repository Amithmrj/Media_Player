import React from 'react'
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div  className='w-100 justify-content-center align-items-center d-flex flex-column mt-5'>
      <div className='w-100 row p-2'>
        <div className="col-md-3">
        <div className='Website'>
        {/* <i class="fa-solid fa-video fa-2x " style={{color:'blue'}}></i>  -->   Normal font-awesome with cdn link */}
        <FontAwesomeIcon icon={faVideo} style={{color:"blue", fontSize:'30px'}}/>     {/*Installed fontawesome */}
          <span style={{fontSize:'30px', color:'white'}} className='ms-2'>Media Player</span>
          <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta minima recusandae, quibusdam voluptate illum quos 
             saepe voluptatum consequatur non magni quasi sed nulla ullam quod in. Quas fugit molestiae labore.</p>
        </div>
        </div>
        <div className="col-md-3">
        <div className='link'>
          <h4>Links</h4>
          <p className='mt-3'><Link to={'/'}>Landing Page</Link></p>    {/*Here landing page is linked to base url---"/" */}
          <p><Link to={'/home'} >Home</Link ></p>                       {/*Home is linked to base+/home-----"/home" */}
          <p><Link to={'/watch-history' }>Watch History</Link></p> 
        </div>
        </div>
        <div className="col-md-3">
        <div className='guides' >
          <h4>Guides</h4>
          <p className='mt-3'>React</p>
          <p>React Bootstrap</p>
          <p>Bootwatch</p>
        </div>
        </div>
        <div className="col-md-3">
        <div className='contact'>
          <h4>Contacts</h4>
          <div className='d-flex mt-3'>
            <input type="text" className='form-control' placeholder='Enter your Email Id'/>
            <button className='btn  ms-2' style={{color:'white',backgroundColor:'blue'}}>Subscribe</button>
          </div>
          <div className='d-flex justify-content-center mt-3'>
          {/* <FontAwesomeIcon icon={faFacebook} /> */}
          <i class="fa-brands fa-facebook fa-2x "></i>
          <i class="fa-brands fa-instagram fa-2x ms-5"></i>
          <i class="fa-brands fa-x-twitter fa-2x ms-5"></i>
          <i class="fa-brands fa-linkedin fa-2x ms-5"></i>
          </div>
        </div>
        </div>
        


      </div>
    </div>
  )
}

export default Footer