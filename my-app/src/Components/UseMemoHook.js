import React,{useState,useMemo} from "react"

function UseMemoHook() {
    const [count1,setCount1]=useState(0);
    const[count2,setCount2]=useState(10);

    // function multicount(){
    //     console.warn('Multicount')
    //     return count1*5
    // }

    const MulticountMemo =useMemo( function multicount(){
        console.warn('Multicount')
        return count1*5
    },[count1]
)
  return (
    <div>
      
      <h2>Count1:{count1}</h2>
      <h2>Count2:{count2}</h2>
      {/* <h3>{multicount()}</h3> */}
      <h3>{MulticountMemo}</h3>
      <button onClick={()=>setCount1(count1+1)}>Count1</button>
      <button onClick={()=>setCount2(count2*10)}>Count2</button>
    </div>
  )
}

export default UseMemoHook
