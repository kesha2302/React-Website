import { Component } from 'react'

export class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          isLoggedIn: false
        }
      }
      
  render() {
   
   
         // Approach 1: if/else
    // if/else statement don't work inside the JSX because it is not valid 
    // that is the reason we have if/else statement outside JSX and the entire return statement is place inside if/else block

    // if(this.state.isLoggedIn){
    //     return( <h3>Welcome to Innobarin Technologies</h3>)
    // }else{
    //     return(<h3>Hello Interns!</h3>)
    // }


    // Approach 2: Element variable

    // let message
    // if(this.state.isLoggedIn){
    //     message = <h3>Welcome to Innobarin Technologies</h3>
    // }else{
    //     message = <h3>Hello Interns!</h3>
    // }

    // return <div>{message}</div>



    // Approach 3: Ternary Conditional Operator

    // return(
    //     this.state.isLoggedIn ? (
    //     <h3>Welcome to Innobarin Technologies</h3> 
    // ):( 
    // <h3>Hello Interns!</h3>
    // )
    // )




    // Approach 4: Short Circuit Operator 
    // Specific case of this ternary opertor  approach
    // When you want to render  either something  or nothing use short circuit operator
    
     return this.state.isLoggedIn && <h3>Welcome to Innobarin Technologies</h3> 

      
  }
}

export default ConditionalRendering
