import React,{useEffect} from "react";


function useDoc(count) {
    useEffect(()=>{
        document.title=`Click ${count} times`
    },[count])
 
}

export default useDoc
