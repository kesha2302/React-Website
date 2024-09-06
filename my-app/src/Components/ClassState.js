import { Component } from 'react'

export class ClassState extends Component {

    // S1: Create state obj  in Constructor
    // Inside constructor call super method(Thsi is required because we extends react component class and call hase to be made to the base class constructor)
    // And now we create our state object and then initialize the property
    // S2: is to bind this state value in Render fun
    constructor(){
        super()
        this.state = {
            message:"Welcome to Innobrain Technologies"
        }

    }
    //Method
    ChangeMessage(){
        this.setState({
            message:"Thank You for visiting us"
        })
    }
  render() {
    return (
      <div>
        {/* <h1>Hello Interns</h1> */}
        <h1>{this.state.message}</h1>
        <button onClick={() => this.ChangeMessage()}>Click Me</button>
      </div>
    )
  }
}

export default ClassState
