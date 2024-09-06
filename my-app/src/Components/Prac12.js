import { Component } from 'react'

export class Prac12 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Innobrain Technologies"
      }

    //   this.clickhandler = this.clickhandler.bind(this)
    }

    // clickhandler(){
    //     this.setState({
    //         message:"Thank You!"
    //     })
    // }

    // Approach 4
    clickhandler=()=>{
        this.setState({
            message:"Thank You!.."
        })
    }
    
  render() {
    return (
      <div>
        <h1>Evebt Binding</h1>
        <h3>{this.state.message}</h3>
        {/* Approach 1 */}
        {/* <button onClick={this.clickhandler.bind(this)}>Click Me</button> */}

        {/* Approach 2 */}
        {/* <button onClick={()=>this.clickhandler()}>Click Me</button> */}
        {/* Approach 3 */}
        <button onClick={this.clickhandler}>Click</button>
      </div>
    )
  }
}

export default Prac12
