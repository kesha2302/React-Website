import React,{useState} from 'react'

function HookCounter() {
    const [data,setdata] =useState(0);

    function handleClick(){
        setdata(data+1)
    }

  return (
    <div>
      HookCounter:{data}
      {/* <button onClick={handleClick}>Click</button> */}
      <button onClick={()=>setdata(data+1)}>Click</button>
    </div>
  )
}

export default HookCounter
