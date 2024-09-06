import { Component } from 'react'

export class Prac16 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"",
         comments:"",
         topic:'react'
      }
    }

    handleName=(event)=>{
        this.setState({
            name:event.target.value
        })

    }

    handleComments=(event)=>{
        this.setState({
            comments:event.target.value
        })

    }

    handleTopic=(event)=>{
        this.setState({
            topic:event.target.value
        })

    }

    handleSubmit=(event)=>{
        alert(`${this.state.name} ${this.state.comments} ${this.state.topic}`)
        
        event.preventDefault()
    }


    
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input type='text' value={this.state.name} onChange={this.handleName}/>

            <label>Comments:</label>
            <textarea value={this.state.comments} onChange={this.handleComments}></textarea>

            <label>Topic:</label>
            <select value={this.state.topic} onChange={this.handleTopic}>
                <option value='React'>React</option>
                <option value='Angular'>Angular</option>
                <option value='Laravel'>Laravel</option>
            </select>

            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Prac16
