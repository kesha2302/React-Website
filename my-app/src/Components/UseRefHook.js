import React,{useRef} from "react"
function UseRefHook() {

    let inputRef =useRef(null)

    function handleClick(){
        inputRef.current.vale='500'
        inputRef.current.focus()
        inputRef.current.style.color='green'
    }
  return (
    <div>
      UseRefHook 
      <br></br>
      <input type="text" ref={inputRef}/>
      <button onClick={handleClick}>Handle Input</button>
      
    </div>
  )
}

export default UseRefHook
