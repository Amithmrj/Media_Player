import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteWatchHistory, getAllvideHistory } from '../Services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function WatchHistory() {

  const [historyVideo, setHistoryVideo] = useState([])   
  const [dltwtchHistory,setdltwtchHistory] =useState(false)

  //function to get video history
  const getHistory = async () => {
    const responce = await getAllvideHistory()
    console.log(responce);
    setHistoryVideo(responce.data)
  }
  console.log(historyVideo);
  

  // function to delete from watch history
  const deleteHistory = async(id)=>{
    const response = await deleteWatchHistory(id)
    if(response.status>=200 && response.status<300){
      setdltwtchHistory(true)
    }
    else{
      toast.error('something went wrong')
    }
  }


  useEffect(() => {
    getHistory()
    setdltwtchHistory(false)
  }, [dltwtchHistory])
  return (
    <>
      <div className='d-flex justify-content-between align-items-center p-5 m-5 '>
        <h3>Watch History</h3>
        <h5><Link style={{ textDecoration: 'none', color: 'white', }} to={'/home'}><FontAwesomeIcon className='me-2' icon={faArrowLeft} beat /> Back to home</Link></h5>
      </div>

      <div className='d-flex justify-content-between align-items-center p-5 mx-5'>
        {historyVideo?.length > 0? 
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>Url</th>
              <th>Time stamp</th>
              <th>Ation</th>
            </tr>
          </thead>
          <tbody>
            {historyVideo.map((item,index)=>(
                          <tr>
                          <td>{index+1}</td>
                          <td>{item.caption}</td>
                          <td><a href={item.url} target='_blank'>{item.url}</a></td>
                          <td>{item.timeStamp}</td>
                          <td>
                            <button className=' btn btn-danger' onClick={()=>deleteHistory(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
                          </td>
                        </tr>
            ))}
          </tbody>
        </table> : <p className='text-danger fs-4 '>No watch history found</p>
        }
      </div >
      <ToastContainer position='top-center' theme="colored" autoClose={2000} />
    </>

  )
}

export default WatchHistory