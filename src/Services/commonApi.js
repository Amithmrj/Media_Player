import axios from "axios";

export const commonAPI = async (httpmethod, url, reqBody) => {                        
    let reqConfig = {
        method: httpmethod,                                                 //axios website     https://axios-http.com/docs/api_intro
        url,                                 //url: url   here both key and body are same so it cam be written as   url,
        data: reqBody,
        Headers: {
            "Content-Type": "application/json"                        //application/json-----contents hosted from internet
        }
    }


    return await axios(reqConfig).then((result) => {              // resolved!! return result
        return result    
    }).catch((error) => {                                  //not resolved return error
        return error
    })

}