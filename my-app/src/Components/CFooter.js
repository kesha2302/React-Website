import React,{useContext} from "react"
import { AppContext } from "../Context/AppContext"

const CFooter = () => {

    const {phone,name} =useContext(AppContext)
  return (
    <div>
      Footer
      <p>Phone:{phone}</p>
      <p>Name:{name}</p>
    </div>
  )
}

export default CFooter
