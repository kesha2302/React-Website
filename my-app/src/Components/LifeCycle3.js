import { Component } from 'react'
import LifeCycle4 from './LifeCycle4'

export class LifeCycle3 extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           name: "Kesha"
        }
        console.log("Lifecycle3 constructor")
      }
  
      static getDerivedStateFromProps(props , state){
          console.log("Lifecycle3 getDerivedStateFromProps")
          return null
      }
  
      componentDidMount(){
          console.log("Lifecycle3 componentDidMount")
      }

      shouldComponentUpdate(){
        console.log("Lifecycle3 shouldComponentUpdate")
        return true
      }

      getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Lifecycle3 getSnapshotBeforeUpdate")
        return null
      }

      componentDidUpdate(){
        console.log("Lifecycle3 componentDidUpdate")
      }
 
      changeState = ()=> {
        this.setState({
            name: "Innobrain Technologies"
        })
      }

  render() {
    console.log("Lifecycle3 render")
    return (
      <div>
        LifeCycle3
        {this.state.name}
        <button onClick={this.changeState}>Change State</button>
        <LifeCycle4/>
      </div>
    )
  }
}

export default LifeCycle3
