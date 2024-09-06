import { Component } from 'react'

export class Prac10 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }

      
      this.Increment = this.Increment.bind(this);
      this.Decrement = this.Decrement.bind(this);
    }

    // Increment(){
    //     this.state.count=this.state.count+1
    //     console.log(this.state.count)
    // }

    Increment(){
        this.setState({
            count:this.state.count+1
        },
    ()=>{
        console.log('Callback Value:',this.state.count)
    })
        console.log(this.state.count)
    }

    // Method to decrement the count, ensuring it does not go below 0
    Decrement() {
      this.setState(
          prevState => ({
              count: prevState.count > 0 ? prevState.count - 1 : 0
          }),
          () => {
              console.log('Callback value:', this.state.count);
          }
      );
  }
    // Decrement(){
    //     this.setState({
    //         count:this.state.count-1
    //     },
    // ()=>{
    //     console.log('Callback Value:',this.state.count)
    // })
    //     console.log(this.state.count)
    // }
    
  render() {
    return (
      <div>
        <h4>Counter:{this.state.count}</h4>
        <button onClick={()=>this.Increment()}>Increment</button>
        <button onClick={()=>this.Decrement()}>Decrement</button>
      </div>
    )
  }
}

export default Prac10
