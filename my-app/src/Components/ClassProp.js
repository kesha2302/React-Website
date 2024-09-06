import { Component } from 'react'

export class ClassProp extends Component {
    // click(){
    //     alert(this.props.name)
    // }
    click = () => {
        alert(this.props.name);
      }
  render() {
    return (
      <div>
        <h2>Props in Class COmponents</h2>
        <h2>My name is {this.props.name}</h2>
        <h2>My Email is {this.props.others.email}</h2>

        <button className='bg-warning' onClick={this.click}>Class Comp</button>
      </div>
    )
  }
}

export default ClassProp

// Destructuring props in Class Component

// We destructure props and state in render method

// export class Classprop extends Component {
//   render() {

//     const {name} = this.props
//     return (
//       <div>
//         <h3>Hello {name}</h3>
//       </div>
//     )
//   }
// }

// export default Classprop
