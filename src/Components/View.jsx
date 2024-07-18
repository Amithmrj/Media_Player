import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getCategoryApi, getUploadVideoApi, updateCategory } from '../Services/allApi'


function View({uploadVideoStatus,setCategrydeletupdate}) {
  const [vvideo, setVvideo] = useState([])
  
  const [deleteVideoStatus, setdeleteVideoStatus] = useState(false)

  const getVideos = async () => {
    const responce = await getUploadVideoApi()
    // console.log(responce);
    const { data } = responce                              //object destructuring--- taking only the data from the responce object
    // console.log(data);
    setVvideo(data)
  }

  console.log(vvideo);

    //function to prevent the data lose on drag
    const dragOver= (e)=>{
      e.preventDefault()
    }

    const videoDrop= async(e)=>{
      // const dataa=JSON.parse(e.dataTransfer.getData("datashared"))
      // console.log(dataa);
      const {categoryid,videoid}=JSON.parse(e.dataTransfer.getData("datashared"))
      console.log(videoid,categoryid);

      setCategrydeletupdate(false)   //state changed to false on drop to upate the status inside category

      //get all category
      const {data}=await getCategoryApi() 
      let selectedCategory= data.find((item)=>item.id==categoryid)    //finding the dragged category from all category
      console.log(selectedCategory);
      let result= selectedCategory.allVideo.filter((item)=>item.id!=videoid)     //filtering and removing the object with the videoid  (removid video id)
      // console.log(result);
      let newCategory={                                                        //creating a new object to update
        category:selectedCategory.category,allVideo:result,id:categoryid
      }
      await updateCategory(categoryid,newCategory)  //upadting the category with new category
    }

  useEffect(() => {                 //useeffect to handle side effect             //setting useeffect based on props
    getVideos()
    setdeleteVideoStatus(false)
  }, [uploadVideoStatus,deleteVideoStatus])        //dependency was empty to fetch content when page loads, then changed to load based on props
  return (                                         //calls when the props state changes (in deleteVideoStatus the change is false to true)
    <>

      <Row className='w-100' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>
        {
          vvideo?.length>0?
          vvideo?.map((item)=>(                        //.map is a array thing to mutiple the number of items in the vvdeo 6 item so poster 
            <Col sm={12} md={6} lg={4} xl={3}>                  {/*To make it responsive with different screen size */}
            <VideoCard setdeleteVideoStatus={setdeleteVideoStatus} displvideo={item}/>                          {/*props to the child video card */}
          </Col>
          )):<p className='text-primary fs-2'>No video is uploaded yet, <span className='fs-5'>please click the upload icon</span></p>
        }
      </Row>
    </>
  )
}

export default View