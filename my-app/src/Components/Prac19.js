import { Component } from 'react'
import UserProp from './UserProp'

export class Prac19 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:1
      }
    }
    
  render() {
    return (
      <div>
        <UserProp count={this.state.count}/>
        <button onClick={()=>this.setState({count:1})}>Update</button>
      </div>
    )
  }
}

export default Prac19
