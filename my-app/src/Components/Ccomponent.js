
function Ccomponent(props) {
  return (
    <div>
      {/* <button onClick={props.hellohandler}>Welcome Parent</button> */}
      <button onClick={()=>props.hellohandler('child1')}>Welcome Parent</button>
    </div>
  )
}

export default Ccomponent
