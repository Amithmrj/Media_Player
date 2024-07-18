import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'
import './Home.css'


function Home() {

  const [uploadVideoStatus, setuploadVideoStatus] = useState({})          //statelifting
  const [categrydeletupdate,setCategrydeletupdate] = useState(true)       //statelifting      //to update after removing video from category

  return (
    <>
    <div className="container d-flex justify-content-between align-items-center mt-5">
      <Add setuploadVideoStatus={setuploadVideoStatus}/>                 {/*giving the changing state as props */}
      <Link to={'/watch-history'} id='link'>Watch History</Link>
    </div>
    <div className="row">
      <div className="col-md-9 align-items-center px-4 ">
        <h4 className='mt-4'>All Videos</h4>
        <View uploadVideoStatus={uploadVideoStatus} setCategrydeletupdate={setCategrydeletupdate}/>                       {/*props */}
      </div>
      <div className="col-md-3 px-4">
        <Category setCategrydeletupdate={setCategrydeletupdate} categrydeletupdate={categrydeletupdate}/>
      </div>

    </div>
    
    </>
   
  )
}

export default Home