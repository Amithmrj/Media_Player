// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
// import { faFilm } from '@fortawesome/free-solid-svg-icons';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
// import { uploadVideoapi } from '../services/callApi';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// function Add({setUploadVideoStatus}) {
//   const [show, setShow] = useState(false);
//   const[video,setVideo]=useState({
//     id:"",
//     caption:"",
//     imageUrl:"",
//     embedLink:""
//   })
//   console.log(video);
//   const getEmbedlink =(e)=>{
//     // console.log(e.target.value);
//     const text=e.target.value;
//     if(text.startsWith('https://www.youtube.com/watch?v=')){
//       console.log(text.slice(-11));
//       const link=`https://www.youtube.com/embed/${text.slice(-11)}`
//       setVideo({...video,embedLink:link})
//     }else{
//       console.log(text.slice(17, 28));
//       const link=`https://www.youtube.com/embed/${text.slice(17, 28)}`
//       setVideo({...video,embedLink:link})
//     }
    
//   }
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const handleUpload =async()=>{
//     const{id,caption,imageUrl,embedLink}=video
//     console.log(id,caption,imageUrl,embedLink);
//     if(!id || !caption ||!imageUrl || !embedLink){
//       toast.info('please fill the form completely')
//     }else{
//       const response= await uploadVideoapi(video)
//       console.log(response);
//       if(response.status>=200 && response.status<300){
//         toast.success('video uploaded successfully')
//         setUploadVideoStatus(response.data)
//         setVideo({
//           id:"",
//           caption:"",
//           imageUrl:"",
//           embedLink:""
//         })
//         handleClose()
//       }else{
//         console.log(response);
//         toast.error('something went wrong')
//       }
//     }
//   }
//   return (
//  <>
//      <div className='d-flex align-items-center'>
//        <h5 className='me-3 mt-2'>Upload New Video</h5>
//     <button  onClick={handleShow} className='btn'>   <FontAwesomeIcon icon={faCloudArrowUp} size='xl' /></button>
//      </div>
//      <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title><FontAwesomeIcon icon={faFilm} className='me-2 text-warning' /> Upload Videos</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Please fill the following details</p>
//           <Form  className='border border-secondary rounded p-3'>
//           <Form.Group>
          
//           <Form.Control className='mb-3'
          
//             type="text"
//             placeholder="Enter the Video ID"
//            onChange={(e)=>setVideo({...video,id:e.target.value})}
//           />
         
//         </Form.Group>
//         <Form.Group>
          
//           <Form.Control className='mb-3'
          
//             type="text"
//             placeholder="Enter the Video Caption"
//            onChange={(e)=>setVideo({...video,caption:e.target.value})}
//           />
         
//         </Form.Group>
//         <Form.Group>
          
//           <Form.Control className='mb-3'
          
//             type="text"
//             placeholder="Enter the Image Url"
//             onChange={(e)=>setVideo({...video,imageUrl:e.target.value})}
//           />
         
//         </Form.Group>
//         <Form.Group>
          
//           <Form.Control className='mb-3'
          
//             type="text"
//             placeholder="Enter the Youtube Link"
//             onChange={(e)=>getEmbedlink(e)}

//           />


//         </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <button className='btn btn-secondary' onClick={handleClose}>
//             Cancel
//           </button>
//           <button className='btn btn-warning' onClick={() => {
//     handleClose();
//     handleUpload();
// }}>
//     Upload
// </button>

//         </Modal.Footer>
//       </Modal>
//       <ToastContainer position='top-center' theme='colored' autoClose={2000} />
//  </>
//   );
// }

// export default Add;
