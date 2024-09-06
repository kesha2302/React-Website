import React,{useState,useEffect} from "react"

function Effect2() {
    const [count1,setCount1]=useState(0);
    const[count2,setCount2]=useState(1);

    useEffect(()=>{
        console.log("Useeffect called on click1")
    },[count1])

    useEffect(()=>{
        alert("Count2 is clicked"+count2)
    },[count2])
  return (
    <div>
      <h2>Count1:{count1}</h2>
      <h2>Count2:{count2}</h2>
      <button onClick={()=>setCount1(count1+1)}>Count1</button>
      <button onClick={()=>setCount2(count2+1)}>Count2</button>
    </div>
  )
}

export default Effect2
