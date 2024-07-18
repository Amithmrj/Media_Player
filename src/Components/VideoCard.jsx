import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { AddToHistory, deleteVideoApi } from '../Services/allApi';


function VideoCard({ displvideo, setdeleteVideoStatus, buttonPresent }) {
  console.log(displvideo);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  //function to add to history
  const handleShow = async () => {            //to get history api called inside handleshow
    setShow(true);
    let caption = displvideo.caption
    let url = displvideo.embeddedLink
    
    let time = new Date()                                       
    let timeStamp = new Intl.DateTimeFormat('en-US', { timeStyle: 'medium', dateStyle: 'medium', timeZone:'Asia/Kolkata' }).format(time)    //buit in javascript for formatting timestamps
                                                                                                                                        //got it from stack ovrflow
    // let timeStamp = new Intl.DateTimeFormat('en-GB', { year: 'numeric',month: 'numeric',day: 'numeric',hour: '2-digit',minute: '2-digit',second: '2-digit' }).format(time)

    let reqBody = {
      caption, url, timeStamp
    }
    const response = await AddToHistory(reqBody)
    console.log(response);

  }

  //function to delete
  const handleDelete = async (id) => {
    const responce = await deleteVideoApi(id)
    console.log(responce);
    setdeleteVideoStatus(true)
  }

  //function to drag videocard
  const vdeoDragging =(e, vdeoIdd)=>{
    console.log('card with ',vdeoIdd, 'have dragged');
    e.dataTransfer.setData("videoIdd",vdeoIdd)                    //to transfer the drag data from event e, should be key value pair inside setData [videoIdd is key
  }

  return (
    <>
      <Card className='mt-4'  onClick={handleShow} style={{ width: '100%' }} draggable onDragStart={(e)=>vdeoDragging(e,displvideo?.id)}>
        {!buttonPresent &&<Card.Img width={'100%'} height={'300px'} drop variant="top"
          src={displvideo?.imageUrl} />}
        <Card.Body className='d-flex'>
          <Card.Text className='me-auto'>
            {displvideo?.caption.slice(0, 20)}...
          </Card.Text>
          {!buttonPresent && <Button variant="danger" onClick={() => handleDelete(displvideo?.id)}><FontAwesomeIcon icon={faTrashCan} /></Button>}   {/*only show button if buttonPresent is true, its passed as true from category*/}
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>                  {/*This for a open a modal when clicking the videocard */}
        <Modal.Header closeButton>
          <Modal.Title>{displvideo?.caption}...</Modal.Title>
        </Modal.Header>                                         {/*To autoplay youtube add ?autoplay=1 in the src of iframe */}
        <Modal.Body>
          <iframe width="100%" height="400" src={`${displvideo?.embeddedLink}?autoplay=1`}
            title="Neeraj Madhav - BALLAATHA JAATHI [Official Video] ft. Dabzee | Baby Jean"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" ></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard