import { Component } from 'react'
import CChildcomponent from './CChildcomponent'

export class PParentcomp extends Component {

    constructor(props) {
      super(props)
    
      //set a state 
      this.state = {
         parentname : 'Parent'
      }

      this.helloparent = this.helloparent.bind(this)
    }

    // define method
    helloparent(){
        // alert('Hello' + this.state.parentname)
        // OR use ES6 template literals feature (backticks)
        // We are using this keyword so we are binding the method
        alert(`Hello ${this.state.parentname}`)
    }

    // Passing a parameter when calling the parent method from the childcomp, for this arrow fun is used
    helloparent(childname){
        alert(`Hello ${this.state.parentname} from ${childname}`)
    }
    
  render() {
    return (
      <div>
        {/* Add attribute, we are passing reference to the helloparent method as a prop called hellohandler */}
        <CChildcomponent hellohandler = {this.helloparent}/>
      </div>
    )
  }
}

export default PParentcomp
