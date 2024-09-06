import { Component } from 'react'
import LifeCycle2 from './LifeCycle2'
//  This order of execution during the mounting phase 
class LifeCycle1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Kesha"
      }
      console.log("Lifecycle1 constructor")
    }

    static getDerivedStateFromProps(props , state){
      console.log("Lifecycle1 getDerivedStateFromProps")
      return null
  }

    componentDidMount(){
        console.log("Lifecycle1 componentDidMount")
    }
    
    
  render() {
    console.log("Lifecycle1 render")
    return (
      <div>
        {/* What happens when component has child component? */}
        {/* Check order execution in consel  when it has child component */}
        <LifeCycle2/>
        
        LifeCycle1
      </div>
    )
  }
}

export default LifeCycle1
