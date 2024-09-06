import { Component } from 'react'
import Ccomponent from './Ccomponent'

export class Pcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentname:"Parent"
      }

      this.helloparent=this.helloparent.bind(this)
    }

    // helloparent(){
    //     // alert("Hello" + this.state.parentname)

    //     alert(`Hello${this.state.parentname}`)
    // }

    helloparent(childname){
        alert(`Hello${this.state.parentname} from  ${childname}`)
    }
    
  render() {
    
    return (
      <div>
        <Ccomponent hellohandler={this.helloparent}></Ccomponent>
      </div>
    )
  }
}

export default Pcomponent
