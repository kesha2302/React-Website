import React,{useState} from "react"
import Effect4 from "./Effect4";

function Effect3() {
    const [count1,setCount1]=useState(0);
    const [count2,setCount2] = useState(0);
  return (
    <div>
      <Effect4 count1={count1} count2={count2}/>
      <button onClick={()=>setCount1(count1+1)}>Count1</button>
      <button onClick={()=>setCount2(count2+1)}>Count2</button>
    </div>
  )
}

export default Effect3
