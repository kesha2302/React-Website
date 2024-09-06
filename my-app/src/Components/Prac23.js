import { Component } from 'react'
import ReactDom from 'react-dom'

export class Prac23 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello"
      }
    }
    
  render() {
    return ReactDom.createPortal(
      <div>
        {this.state.message}
      </div>,
      document.getElementById('second')
    )
  }
}

export default Prac23
