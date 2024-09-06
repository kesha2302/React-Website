import { Component } from 'react'

export class Prac13 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
    
  render() {
    // // Method1: if /else
    // if(this.state.isLoggedIn){
    //     return(<h3>Welcome...</h3>)
    // }else{
    //     return(<h3>Thank You</h3>)
    // }



    // Method2: Element Variable

    // let message
    // if(this.state.isLoggedIn){
    //     message= "Innobarin"
    // }
    // else{
    //     message= "Thank You"
    // }

    // return <>{message}</>
    
//   Method3: Ternary Condition

// return(this.state.isLoggedIn?(<h3>Hello</h3>):(<h3>Thank You</h3>))

// Method4: Short-Circuit Operator

return this.state.isLoggedIn && <h1>Welcome....</h1>

  }


}

export default Prac13
