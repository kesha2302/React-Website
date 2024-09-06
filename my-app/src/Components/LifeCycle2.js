import { Component } from 'react'

export class LifeCycle2 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name: "Kesha"
        }
        console.log("Lifecycle2 constructor")
      }
  
      static getDerivedStateFromProps(props , state){
          console.log("Lifecycle2 getDerivedStateFromProps")
          return null
      }
  
      componentDidMount(){
          console.log("Lifecycle2 componentDidMount")
      }
  render() {
    console.log("Lifecycle2 render")
    return (
      <div>
        LifeCycle2
      </div>
    )
  }
}

export default LifeCycle2
