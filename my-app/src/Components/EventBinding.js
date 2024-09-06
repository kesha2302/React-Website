import { Component } from 'react'

export class EventBinding extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           message:"Hello "
        }
  
        // this.clickhandler = this.clickhandler.bind(this)  
      }
      
      // using below code error will occur. So that is why event binding is done in react classcomponent
      //this keyword within our event is undefined because this is typical behaviour in JS. In JS , in a fun. in strict mode, this is undefined.
      // The this is a pointer to an object. If function is defined outside of a class or a struct , there is no related object and therefore no this either.
      
      //     clickhandler(){
      //     this.setState({
      //         message: "Thank You!"
      //     })
      // }
  
  
      // clickhandler(){
      //     this.setState({
      //         message: "Thank You!"
      //     })
      // }
  
      // Approach 4:
      clickhandler = () =>{
          this.setState({
              message: "Thak You!"
          })
      }

  render() {
    return (
      <div>
          <h3>{this.state.message}</h3>
        {/* Error will occur */}
        {/* <button onClick={this.clickhandler}>Clik Me</button> */}



        {/* Approach 1: Binding in render method */}
        {/* <button onClick={this.clickhandler.bind(this)}>Clik Me</button> */}

        {/* Approach 2: Use arrow fun in the render method */}
        {/* We use () because we are calling event handler and returning the value  */}
        {/* <button onClick={() => this.clickhandler()}>Clik Me</button> */}

        {/* Approach 3:(Official Approach)Binding the event handler in constructor as opposed to binding in the render method */}
        {/* <button onClick={this.clickhandler}>Clik Me</button> */}

        {/* Approach 4: Use an arrow fun  as a class property */}
        {/* comment this.bind in constructor and clickhandler fun */}
        <button onClick={this.clickhandler}>Clik Me</button>
      </div>
    )
  }
}

export default EventBinding
