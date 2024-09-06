import React,{useContext} from "react"
import { AppContext } from "../Context/AppContext"

const CContact = () => {
  const {phone,name}=useContext(AppContext)
  return (
    <div>
      Contact
      <p>Phoen:{phone}</p>
      <p>Name:{name}</p>
    </div>
  )
}

export default CContact
