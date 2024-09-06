import { PureComponent } from 'react'

export class UserProp extends PureComponent {
  render() {
    console.warn("User Component check rendering")
    return (
      <div>
        <h1>{this.props.count}</h1>
      </div>
    )
  }
}

export default UserProp
