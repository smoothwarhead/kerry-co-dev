import { createContext, useEffect, useState } from "react"
import useMediaQuery from "../hooks/useMediaQuery";



export const ViewContext = createContext({});



const ViewProvider = ({ children }) => {

    const[mobile, setMobile] = useState(false);
    const[smallMobile, setSmallMobile] = useState(false);

    const isMax960 = useMediaQuery('(max-width: 960px)');
    const isMax768 = useMediaQuery('(max-width: 768px)');
    const isMin0 = useMediaQuery('(min-width: 0px)');


    useEffect(() => {

        if(isMax960 && isMin0){
            setMobile(true);

            if(isMax768 && isMin0){
                setSmallMobile(true);
            }else{
                setSmallMobile(false)
            }


        }else{
            setMobile(false);
            setSmallMobile(false);

        }

    }, [isMax960, isMax768, isMin0]);
  


  return (
    <ViewContext.Provider value={{ 
       mobile, setMobile,
       smallMobile, setSmallMobile
    }}
    >
        {children}
    </ViewContext.Provider>
  )
}

export default ViewProvider;