import { Component } from 'react'

export class ClickEvent2 extends Component {
  
    click(){
        let name= "Kinjal"
        // alert("I am working in Innobrain Technologies")
        alert(name)
    }

  render() {
    let name2="Kesha";
    return (
      <div>
        <h1>Event Handing in Class Component</h1>
        <h2>{name2}</h2>
        <button className='bg-warning' onClick={this.click}>Class Comp</button>
      </div>
    )
  }
}

export default ClickEvent2
