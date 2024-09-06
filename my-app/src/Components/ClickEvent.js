
function ClickEvent() {
    let name = "Patel Kesha"
    function click(){
        name="Kinjal Shah"
        alert(name)
    }
  return (
    <div>
      <h1>Event Handling in Functional Component</h1>
      <h2>{name}</h2>
      <button className="bg-primary" onClick={click}>Click Me!</button>

      {/* <button className="bg-primary" onClick={()=>click()} >Arrow Fun</button> */}
      <button className="bg-primary" onClick={()=>alert(name)} >Arrow Fun</button>
    </div>
  )
}

export default ClickEvent
