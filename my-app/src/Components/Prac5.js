
function Prac5() {
    let name="Kesha"
    function click(){
        name="Kinjal"
        alert(name)
    }
  return (
    <div>
        <h2>{name}</h2>
      <h1>Event Handling in Functional COmponent</h1>
      {/* <button className="bg-primary" onClick={click}>Click Me!</button> */}
      {/* <button className="bg-primary" onClick={()=>click()}>Arrow Function</button> */}
      <button className="bg-primary" onClick={()=>alert(name)}>Arrow Function</button>
    </div>
  )
}

export default Prac5
