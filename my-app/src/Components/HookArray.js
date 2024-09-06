import { useState } from "react"

function HookArray() {

    const[items,setItems]=useState([])

    const addItems=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }
        ])
    }
  return (
    <div>
      HookArray
      <button onClick={addItems}>Click</button>

      <ul>
        {items.map(items=>(
            <li key={items.id}>{items.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default HookArray
