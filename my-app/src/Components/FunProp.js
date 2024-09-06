
function FunProp(props) {

    function click(){
        alert(props.name)
    }
  return (
    <div>
      <h1>Props in Functional Component</h1>
      <h4>My name is {props.name}</h4>
      <h4>I have selected {props.subject} subject.</h4>
      {/* <h4>My Email Address is {props.others.email}</h4> */}

      <button className="bg-info" onClick={click}>PROPS</button>
    </div>
  )
}

export default FunProp



// Destructuring props in Functional Componenet

//First way
// We are extracting name and marks from props obj in the JSX and now we can use name and marks instead of props.name and props.marks
// function Funprop({name, marks, other}) {

//   // console.log(props)
//   // console.log(props.marks)
// return (
//   <div>
//     <h5>Students Name and Marks:</h5>
//     <h6>Name:{name}</h6>
//     <h6>Marks:{marks}</h6>
//     <h6>{other.email}, {other.subject}</h6>
//   </div>
// )
// }

// export default Funprop


// Second Way
// Destructure it in the function body so we can go back by naming the parameter as props 
// function Funprop(props) {

//   const {name, marks,other} = props
//       // console.log(props)
//       // console.log(props.marks)
//     return (
//       <div>
//         {props.childern}
//         <h5>Students Name and Marks:</h5>
//         <h6>Name:{name}</h6>
//         <h6>Marks:{marks}</h6>
//         <h6>{other.email}, {other.subject}</h6>
//       </div>
//     )
//   }
  
//   export default Funprop

