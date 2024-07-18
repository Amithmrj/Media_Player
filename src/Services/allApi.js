import { commonAPI } from "./commonApi"
import { serverUrl } from "./serverrURL"



//api for uploading video

export const uploadVideoApi =async(reqBody)=>{
    return await commonAPI('POST',`${serverUrl}/video`,reqBody)
}

//api to get uploaded video

export const getUploadVideoApi = async()=>{                      //getinu body illa so no arguments
    return await commonAPI('GET',`${serverUrl}/video`,"")
}

//api to delete a particular video

export const deleteVideoApi = async(id)=>{
    return await commonAPI('DELETE',`${serverUrl}/video/${id}`,{})          //we are deleting a object so a empty object as body
}

//api to add video in to history
export const AddToHistory = async(reqBody)=>{
    return await commonAPI('POST',`${serverUrl}/history`,reqBody)
}

//api to get video from the history

export const getAllvideHistory=async()=>{
    return await commonAPI('GET',`${serverUrl}/history`,"")
}

//api to delete from watch history
export const deleteWatchHistory = async(id)=>{
    return  await commonAPI('DELETE',`${serverUrl}/history/${id}`,{})
    }

//api to add a category name
export const addCategoryApi = async(reqBody)=>{
    return await commonAPI ('POST',`${serverUrl}/category`,reqBody)
}

//api to get the category name
export const getCategoryApi = async()=>{
    return await commonAPI ('GET',`${serverUrl}/category`,"")
}

//api to delete category name
export const deleteCategoryApi = async(id)=>{
    return await commonAPI ('DELETE',`${serverUrl}/category/${id}`,{})
}

//api to get a single specific video from videos
export const getSingleVideo = async(id)=>{                     
    return await commonAPI('GET',`${serverUrl}/video/${id}`,"")
}

//api to update category
export const updateCategory = async(id,reqBody)=>{
    return await commonAPI('PUT',`${serverUrl}/category/${id}`,reqBody)
  }