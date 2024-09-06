import { Component } from 'react'

export class Prac6 extends Component {
    click(){
        let name="Kesha"
        alert(name)
    }
  render() {
    let name2="Kinjal"
    return (
        
      <div>
        <h2>{name2}</h2>
        <h1>Event Handling using class Component</h1>
        <button className='bg-dark' onClick={this.click}>Click</button>
      </div>
    )
  }
}

export default Prac6
