
function Prac20({name}) {

    if(name === 'Broccoli')
        throw new Error('Not a Fruit')

  return (
    <div>
    {name}
    </div>
  )
}

export default Prac20
