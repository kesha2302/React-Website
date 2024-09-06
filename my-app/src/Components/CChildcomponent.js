
function CChildcomponent(props) {
    return (
      <div>
        {/* <button onClick={props.hellohandler}>Welcome Parent</button> */}
  
        {/* Passing a parameter when calling the parent method from the childcomp, for this arrow fun is used */}
        <button onClick={() =>  props.hellohandler('child1')}>Welcome Parent</button>
      </div>
    )
  }
  
  export default CChildcomponent
  