import React,{useEffect} from "react"

function Effect4({count1,count2}) {
    useEffect(()=>{
        console.warn("useEffect called on count2")
    },[count2])
  return (
    <div>
      <h3>Count1:{count1}</h3>
      <h3>Count2:{count2}</h3>
    </div>
  )
}

export default Effect4
