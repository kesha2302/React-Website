import React,{useState,useEffect} from "react"
import useDoc from "./useDoc"

function DocTitle2() {
    const[count,setCount]=useState(0)

    // useEffect(()=>{
    //     document.title=`Click ${count} times`
    // })
    useDoc(count)
  return (
    <div>
      Doc Title Effect 2
      <button onClick={()=>setCount(count+1)}>Click2 {count} times</button>
    </div>
  )
}

export default DocTitle2
