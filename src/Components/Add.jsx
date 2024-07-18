//Upload New Video ↑
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import { uploadVideoApi } from '../Services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setuploadVideoStatus}) {

  const [show, setShow] = useState(false);              //Its the usestate of one of the react bootstrap
  const [video, setVideo] = useState({                  //usestate created for adding data
    id: "",
    caption: "",
    imageUrl: "",
    embeddedLink: ""
  })

  console.log(video);

  const getEmbedLiink = (e) => {                  /*function to get the youtube link */

    // console.log(e.target.value);

    const texxt = e.target.value                           //the link coming from the label feild is stored in the texxt
    if (texxt.endsWith("?festure=shared")) {
      console.log(texxt.slice(-26, -15));
      var linnk = `https://www.youtube.com/embed/${texxt.slice(-26, -15)}`
    }
    else {
      console.log(texxt.slice(-11));
      linnk = `https://www.youtube.com/embed/${texxt.slice(-11)}`
    }
    setVideo({ ...video, embeddedLink:linnk })

  }

  const handleClose = () => setShow(false);       //part of moral
  const handleShow = () => setShow(true);         //part of moral

  const handleUpload = async () => {                                    //to upload data
    const { id, caption, imageUrl, embeddedLink } = video
    console.log(id, caption, imageUrl, embeddedLink);
    if (!id || !caption || !imageUrl || !embeddedLink) {
      toast.info('please fill in the form completely')
    }
    else {
      const responce = await uploadVideoApi(video)
      console.log(responce);

      if (responce.status >= 200 && responce.status < 300) {           //to emply the modal after upload
        toast.success('video uploaded successfully')
        setuploadVideoStatus(responce.data)                          //once uploaded then add data to uploadVideoStatus
        setVideo ({
          id: "",
          caption: "",
          imageUrl: "",
          embeddedLink: ""
        })
        handleClose()
      } else {
        console.log(responce);
        toast.error('something went wrong')
      }
    }
  }

  return (
    <>
      <div className='d-flex'>
        <h5 className='me-1 mt-2'>Upload New Video</h5>
        <button onClick={handleShow} className='btn '><FontAwesomeIcon icon={faCloudArrowUp} size="2xl" /></button>
      </div>

      <Modal show={show} onHide={handleClose}>                {/*The popup when cicking upload video */}
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faFilm} className='me-2' style={{ color: 'blue' }} /> Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Fill the following details</p>
          <Form className='border rounded p-3 border-secondary'>                                                        {/*Form inside pop up--it is taken from a bootstrap form */}

            <Form.Group className='mb-3'>
              <Form.Control type="text" placeholder="Enter the video Id" defaultValue=""
                onChange={(e) => setVideo({ ...video, id: e.target.value })} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control type="text" placeholder="Enter Video Caption"
                onChange={(e) => setVideo({ ...video, caption: e.target.value })} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control type="text" placeholder="Enter Video Image Url "
                onChange={(e) => setVideo({ ...video, imageUrl: e.target.value })} />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control type="text" placeholder="Enter Youtube video Link"
                onChange={(e) => getEmbedLiink(e)} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <button className='btn' style={{ backgroundColor: 'blue', color: 'white' }} onClick={handleUpload}>
            Upload
          </button>
        </Modal.Footer>
      </Modal>
      {/* <ToastContainer position='top-center' theme="colored" autoClose={2000} />                       */}
    </>
  )
}

export default Add


