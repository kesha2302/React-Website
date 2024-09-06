import React,{useState} from 'react'

function HookCounter3() {
    const[name,setName]=useState({
        firstname: "",
        lastname:""
    })
  return (
    <div>
      <h1>Form Handing using Hooks</h1>
      <form>
      <label>FirstName:</label>
      <input type='text' value={name.firstname}
      onChange={(e)=>setName({...name,firstname:e.target.value})}/>

      <br>
      </br>

      <label>LastName:</label>
      <input type='text' value={name.lastname}
      onChange={(e)=>setName({...name,lastname:e.target.value})}/>
</form>

<h4>FirstName:{name.firstname}</h4>
<h4>LastName:{name.lastname}</h4>

<h3>{JSON.stringify(name)}</h3>


    </div>
  )
}

export default HookCounter3
