import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import VideoCard from '../Components/VideoCard'
import { addCategoryApi, deleteCategoryApi, getCategoryApi, getSingleVideo, updateCategory } from '../Services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Category({setCategrydeletupdate,categrydeletupdate}) {

  //state to create a category name
  const [categoryName, setCategoryName] = useState("")     // to add category name 

  const [allCategory, setAllCategory] = useState([])       // to get the added category data
  const [addCategoryStatus,setAddCategoryStatus]= useState(true)      //to auto refresh when adding category
  const [deleteCatgryStatus,setDeleteCatgryStatus]= useState(true)    //to auto refresh when deleting category

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(categoryName);

  //function to add category
  const handleCategoryAdd = async () => {
    if (categoryName) {                     //to check category name is present
      let reqbody = {
        category: categoryName,
        allVideo: []
      }
      const responce = await addCategoryApi(reqbody)
      console.log(responce);
      if (responce.status >= 200 && responce.status <= 300) {
        toast.success('Category added successfully')
        setAddCategoryStatus(false)
        setCategoryName("")
        handleClose()
      } else {
        toast.error('something went wrong')
      }

    } else {
      toast.info('please enter the category name')
    }
  }

  // function to get category
  const getaddedCategory = async () => {
    const responce = await getCategoryApi()
    console.log(responce.data);
    setAllCategory(responce.data)
  }
  console.log(allCategory);

  //function to delete category
  const deleteCategory = async(id)=>{
    const response = await deleteCategoryApi(id)
    setDeleteCatgryStatus(false)
  }

  //function to prevent the data lose on drag
  const dragOver= (e)=>{
    e.preventDefault()
  }

  //function to drop
  const videoDrop= async (e,categoryid)=>{
    console.log('id of the category which the video is dropped is',categoryid);

    //getting the video id sent from videocard component
    const videoid=e.dataTransfer.getData("videoIdd")     //key passed from setData in videocard
    console.log(`card id got from drop is ${videoid}`);

    //api call to get a particular video that is dragged
    const{data}= await getSingleVideo(videoid)
    console.log(data);


      //selected category     //finding data of selected category from the category id
const selectedCategory=allCategory.find((item)=>item.id==categoryid)
// console.log(selectedCategory);
if (selectedCategory.allVideo.find((item)=>item.id==videoid))     //to alert when adding same video twise
{toast.info('Video already exist in the category')}
  else{
selectedCategory.allVideo.push(data)}

//function to update category
await updateCategory(categoryid,selectedCategory)

  getaddedCategory()                                      //to get the new updated category

  }

//function to remove card from category
const deleteDrag = (e,categoryid,videoid)=>{
  console.log(`Category id is ${categoryid}`);
  console.log(`video id is ${videoid}`);
  let dataShared ={
    categoryid,videoid
  }
  // console.log(dataShared);
  e.dataTransfer.setData("datashared",JSON.stringify(dataShared))       
}

  useEffect(() => {
    getaddedCategory()
    setAddCategoryStatus(true)
    setDeleteCatgryStatus(true)
    setCategrydeletupdate(true)
  },[addCategoryStatus,deleteCatgryStatus,categrydeletupdate])

  return (
    <>
      <div className='d-flex justify-content-center align-items-center mt-5 mb-5 '>
        <button className='btn w-100' style={{ backgroundColor: 'blue', color: 'white' }} onClick={handleShow}>Add new category</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> <FontAwesomeIcon icon={faPencil} className='me-2' style={{ color: 'blue' }} />Add New category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form className='border rounded p-3 border-secondary'>               {/*Form inside pop up--i☺t is taken from a bootstrap form */}
            <p>Category Name</p>
            <Form.Group className='mb-3'>
              <Form.Control type="text" placeholder="Enter Category Name" defaultValue="" onChange={(e) => setCategoryName(e.target.value)} />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <button style={{ backgroundColor: 'blue', color: 'white' }} className='btn' onClick={handleCategoryAdd}>
            Add
          </button>
        </Modal.Footer>
      </Modal>


      { allCategory?.length>0?
          allCategory?.map((item)=>(
            <div className="border border-secondary w-100 p-3 rounded mt-3" droppable onDragOver={(e)=> dragOver(e)} onDrop={(e)=>videoDrop(e,item.id)}>
          <div className='d-flex justify-content-center align-items-center mb-2'>
            <p>{item.category}</p>
            <Button className='btn btn-danger ms-auto' onClick={()=>deleteCategory(item.id)}><FontAwesomeIcon icon={faTrash} /></Button>
          </div>
          <Row>
            {item.allVideo.length>0?        //to only show the allvideo array with data
            item.allVideo.map((card)=>(<Col sm={12} draggable onDragStart={(e)=>deleteDrag(e,item.id,card.id)}>               {/*Item.id is category id */}
              <VideoCard displvideo={card} buttonPresent={true}/>     {/*viewil displvideo kk already data pass cheyyunnund and both data are same so caegpril display kitttum*/}
            </Col>))
              :<p className='text-primary' style={{fontSize:"12px"}}>Drag to add and remove videos</p>}
          </Row>
        </div>
          )):<p className='text-danger mt-4 fs-5 fw-bold'>No category added yet</p>
      }

      
      <ToastContainer position='top-center' theme="colored" autoClose={2000} /> 
    </>
  )
}

export default Category
