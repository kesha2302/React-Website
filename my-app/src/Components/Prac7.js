
// function Prac7(props) {
//   return (
//     <div>
//       <h1>Student Name:{props.name} {props.lastname}</h1>
//       <h2>{props.other.email} {props.other.address}</h2>
//     </div>
//   )
// }

// export default Prac7

function Prac7(props) {
    const {name,lastname,other} = props
    return (
      <div>
        <h1>Student Name:{name} {lastname}</h1>
        <h2>{other.email} {other.address}</h2>
      </div>
    )
  }
  
  export default Prac7
