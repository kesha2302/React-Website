import React,{useState,useEffect} from "react"

function Effect1() {
    const[count,setCount]=useState(0)

    useEffect(()=>{
        document.title=`Click ${count} times`
    })
  return (
    <div>
      Effect1
      <button onClick={()=>setCount(count+1)}>Click {count} times</button>
    </div>
  )
}

export default Effect1
