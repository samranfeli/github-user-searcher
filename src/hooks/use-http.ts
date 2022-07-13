import { useState, useCallback } from "react";

import axios from 'axios';

type RequestConfig = {
    url:string;
    method?:'post'| 'get';
    data ?: any
}
type ApplyData = (data:any) => void;

type HookReturn = {
    loading:boolean; 
    errorMessage?:string; 
    sendRequest:(requestConfig:RequestConfig,applyData:any)=>void 
}

const useHttp : () => HookReturn = () => {

    const [loading,setLoading] = useState(false);
    const [errorMessage,setErrorMessage] = useState();
  
    const sendRequest = useCallback (async(requestConfig:RequestConfig,applyData:ApplyData) => {
        setLoading(true);
        setErrorMessage(undefined);
      try{
        const response = await axios({
          method: requestConfig.method || "get",
          url: requestConfig.url,
          data: requestConfig.data ?requestConfig.data : null 
        });
        setLoading(false);
        applyData(response.data);
      }catch (err:any){
        setLoading(false);
        setErrorMessage(err.response.data.message || "oops, something went wrong!");
      }
    },[]);
      
    return {
        loading,
        errorMessage,
        sendRequest
    }
}

export default useHttp;