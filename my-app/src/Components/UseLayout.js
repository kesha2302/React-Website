import React,{useEffect,useLayoutEffect} from "react"

function UseLayout() {

    useEffect(()=>{
        console.log("Message from useEffect Hook")
    },[])

    useLayoutEffect(()=>{
console.log("Message from useLayoutEffect Hook")
    },[])
  return (
    <div>
      UseLayoutEffect
      {Array(40000).fill('').map((item,index)=>(<li key={index}>{Math.pow(Math.random(),10)}</li>))}
    </div>
  )
}

export default UseLayout
