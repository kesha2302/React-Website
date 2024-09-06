import { Component } from 'react'

export class LifeCycle4 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name: "Kesha"
        }
        console.log("Lifecycle4 constructor")
      }
  
      static getDerivedStateFromProps(props , state){
          console.log("Lifecycle4 getDerivedStateFromProps")
          return null
      }
  
      componentDidMount(){
          console.log("Lifecycle4 componentDidMount")
      }

      shouldComponentUpdate(){
        console.log("Lifecycle4 shouldComponentUpdate")
        return true
      }

      getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Lifecycle4 getSnapshotBeforeUpdate")
        return null
      }

      componentDidUpdate(){
        console.log("Lifecycle4 componentDidUpdate")
      }

  render() {
    console.log("Lifecycle4 render")
    return (
      <div>
        LifeCycle4
      </div>
    )
  }
}

export default LifeCycle4
