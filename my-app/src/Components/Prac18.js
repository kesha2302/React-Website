import { PureComponent } from 'react'

export class Prac18 extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
        count:1
      }
    }
    
  render() {
    console.warn("Check Rendering")
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Update Count</button>
      </div>
    )
  }
}

export default Prac18
