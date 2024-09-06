import React,{useState,useEffect} from "react"
import useDoc from "./useDoc"

function DocTitle1() {
    const[count,setCount]=useState(0)

    // useEffect(()=>{
    //     document.title=`Click ${count} times`
    // })
    
    useDoc(count)
  return (
    <div>
      DocTitle Effect 1
      <button onClick={()=>setCount(count+1)}>Click1 {count} times</button>
    </div>
  )
}

export default DocTitle1
