import { useState ,useCallback} from "react"
import Header from "./Header";

function CallBackHook() {
    const [count,setCount]= useState(0);

    // const newFun =()=>{}
        const newFun=useCallback(()=>{},[])

  return (
    <div>
        <Header newFun={newFun}/>
      <h2>Count:{count}</h2>
      <button onClick={()=>setCount(prev=>prev+1)}>Click</button>
    </div>
  )
}

export default CallBackHook
