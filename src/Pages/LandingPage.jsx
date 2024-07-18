import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
const navigate = useNavigate()

  return (
    <>
      <Row className='d-flex justify-content-center align-tems-center mt-5 mb-5'>        {/* React bootstrap rows and columns */}
        <Col lg={1}></Col>             
        <Col lg={5}>
          <h1>Welcome to <span style={{ color: 'blue' }}>media Player</span></h1>
          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet deleniti aliquam eos culpa unde suscipit similique, maxime cum nesciunt! Natus unde
            dolorem, consequatur aliquam dicta quo! Accusantium, architecto cupiditate. Perspiciatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium, quos. Ducimus mollitia facere, error assumenda quasi eveniet quibusdam voluptate. Itaque hic, perferendis error magni sapiente officia
            quas omnis? Distinctio, possimus. lore</p>
          <button onClick={()=>navigate('/home')} className='btn mt-5' style={{ color: 'white', backgroundColor: 'blue' }}>Get started <i class="fa-solid fa-arrow-right"></i></button>
        </Col>
        <Col lg={1}></Col>
        <Col lg={5}>
          <img src="https://i.pinimg.com/originals/2b/a0/59/2ba0596c28d8d5d0415adc30077e24b3.gif" width={'500px'} alt="Img1" />    {/*https://media1.tenor.com/m/lhlDEs5fNNEAAAAC/music-beat.gif */}
        </Col>
      </Row>

      <div className="container d-flex justify-content-center align-items-center mt-5 flex-column">
        <h3>Features</h3>
        <div className='d-flex justify-content-center align-items-center mt-5'>

          <Card className='p-4 m-4' style={{ width: '26rem' }}>                           {/*card 1*/}
            <Card.Img variant="top" style={{ width: '100%', height: '300px' }} src="https://media.giphy.com/media/P1xvuSBd7XnXy/giphy.gif" />
            <Card.Body>
              <Card.Title className='text-center'>Managing video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-4 m-3' style={{ width: '26rem' }}>                             {/*card 2*/}
            <Card.Img variant="top" style={{ width: '100%', height: '300px' }} src="https://cdn.dribbble.com/users/1443878/screenshots/3853432/media/a3e287f1f0694b6053510b205817d35e.gif" />
            <Card.Body>
              <Card.Title className='text-center'>Categorized video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className='p-4 m-3' style={{ width: '26rem' }}>                              {/*card 3*/}
            <Card.Img variant="top" style={{ width: '100%', height: '300px' }} src="https://i.pinimg.com/originals/18/de/42/18de42ff1fc8b8d5e04a37687dae47ca.gif" />
            <Card.Body>
              <Card.Title className='text-center'>Watch history</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className='w-100 d-flex justify-content-center align-items-center mt-5'>
        <div className='row border border-2 p-5' style={{width:'83.5%',borderColor:'white'}}>
          <div className="col-md-6">                                                                 {/*Normal bootstap rows and columns */}
            <h3 style={{color:'blue', fontWeight:'600'}}>Simple fast and powerful</h3>
            <h6 className='mt-4'>
            <span style={{fontSize:'26px'}}>Play Everything</span> : Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, 
            commodi dolorum iste unde atque alias debitis voluptates nesciunt
            </h6>
            <h6 className='mt-3'>
            <span style={{fontSize:'26px'}}>Play Everything</span> : Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam,
             commodi dolorum iste unde atque alias debitis voluptates nesciunt
            </h6>
            <h6 className='mt-3'>
            <span style={{fontSize:'26px'}}>Play Everything</span> : Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam,
             commodi dolorum iste unde atque alias debitis voluptates nesciunt
            </h6>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
          <iframe width="100%" height="340" src="https://www.youtube.com/embed/q6e_b0NERCA" title="Leo - Ordinary Person Video | Thalapathy Vijay 
          | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
           web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

        </div>

      </div>
    </>
  )
}

export default LandingPage