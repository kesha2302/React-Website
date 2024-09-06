
function List() {
    const names = ['Jay', 'Riya', 'Kirti','Abhi']

    // const nameList = names.map(name =><h4>{name}</h4>)

    // Index in array
    // const names = ['Jay', 'Riya', 'Kirti','Abhi', 'Jay']

    const nameList = names.map(name =><h4 key={name}>{name}</h4>)
    // The arrow function that is passed to the map method receives a second parameter which is the index of the element in the current iteration
    // const nameList = names.map((name, index) =><h4 key={index}>{index} {name}</h4>)
    return (
    <div>
      {/* <h4>{names[0]}</h4>
      <h4>{names[1]}</h4>
      <h4>{names[2]}</h4>
      <h4>{names[3]}</h4> */}

      {/* Using Map Fun */}
      {/* Map method takes in a fun as argument */}
      {/* Syntax:parameter followed by the arrow followed by the fun body, we can give any name to parameter */}
     
       {nameList}
    </div>
  )
}

export default List
