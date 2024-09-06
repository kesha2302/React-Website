import { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }

    static getDerivedStateFromError(error)
    {
        return{
            hasError:true
        }
    }
    
  render() {
    // return (
    //   <div>
    //     ErrorBoundary
    //   </div>
    // )
    if(this.state.hasError){
        return<h1>Something went wrong</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary
