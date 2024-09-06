import { Component } from 'react'

export class Prac9 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Welcome to Innobrain Technologies"
      }
    }

    ChangeMessage(){
        this.setState({
            message:"Thank You"
        })
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={()=>this.ChangeMessage()}>Click</button> */}
        <button onClick={()=>this.ChangeMessage()}>Click</button>
      </div>
    )
  }
}

export default Prac9
