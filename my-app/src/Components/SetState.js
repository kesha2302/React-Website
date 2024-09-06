import { Component } from 'react'

export class SetState extends Component {
    constructor(props) {
        super(props)
      
        // this.state is object and  has property count initialized to zero
        this.state = {
           count: 0
        }
      }
         // Now bind this state value with {} within render method
  
      // increment(){
      //     this.state.count = this.state.count + 1
      //     console.log(this.state.count)
      // }  
      // Using above code increment is seen in cosole not in UI because we are modifying the state directly so react will not rerender the component, to see the changes in UI we need to use setstate to let react know we have to rerender the component 
      
      increment(){
          this.setState({
              count: this.state.count + 1
          }, 
        //   () => {
        //       console.log('Callback value:', this.state.count)
        //   }
          )
          // Calls to setstate are asynchronous, so here console.log is called before the state is actually set. So if you want to execute some code only after the state update then  you can pass in callback function as the second parameter to the setstate method
          // So now first paramter is state object and second parameter is callback function
          console.log(this.state.count)
      }
  
      // Whenever  you need to execute some code after the state has been changed do not place that code right after the setstate method instead place that code within the class back function that is passed as a second prameter to the setstate method    
  
      decreament()
      {
          this.setState({
              count:this.state.count-1
          },
          () => {
              console.log('Callback value',this.state.count)
          }
          )
      }
  render() {
    return (
      <div>
         <h4>Count:{this.state.count}</h4>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={ () => this.decreament()}>Decreament</button>
      </div>
    )
  }
}

export default SetState
