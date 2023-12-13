import { useState, useEffect } from "react";
import { Api } from "../api/axios";



const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [dataError, setDataError] = useState("");
    const [loading, setLoading] = useState(true);
  

    useEffect(() => {



        const getData = async () => {

            const emptyData = [];

                    

            try {

                let res = await Api.get(url, {
                    headers: {
                        'Content-Type': 'application/json'                       
                    }
                  
                });


                if(res.status === 200){
                    
                    setData(res.data);    
                    setLoading(false);               
                    
                }else if(res.status === 204){
                    
                    setData(emptyData);
                    setLoading(false);               

                    
                }
                else{
                    setDataError("Could not fetch the data for that resource");
                }

                
            } catch (error) {
                setLoading(false);               
               
    
                if(error.response.status === 400){
                
                    setDataError(error.response.data.Message); 
                                
                }

                if(error.code === "ERR_BAD_REQUEST"){
                   
                    setDataError(error.response.data.Message);  
                                
                }

                if(error.response.status === 404){
                
                   setDataError("This page can not be found"); 
                                    
                }

                if(error.response.status === 500){
                    
                   setDataError("This is an invalid request"); 
                    
                }

                if(error.response.status === 503 || error.code === "ERR_NETWORK"){
                
                    setDataError("Inconsistent network !!!"); 
                   
                }
                
            }

            
    
        }

        getData();

    }, [setData, url, setLoading, setDataError]);

   return {data, loading, dataError};
    
}

export default useFetch;