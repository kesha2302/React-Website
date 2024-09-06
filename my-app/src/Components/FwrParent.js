import { Component } from 'react'
import React from 'react'
import FwrChild from './FwrChild'

export class FwrParent extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }

    clickHandler=()=>{
        this.inputRef.current.focus()
        this.inputRef.current.style.color="blue"
    }
    
  render() {
    return (
      <div>
        <FwrChild ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Focus</button>
      </div>
    )
  }
}

export default FwrParent
