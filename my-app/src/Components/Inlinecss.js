import React from 'react'

const heading={
    fontSize:'72px',
    color:'green'
}
const heading2={
  fontSize:'20px',
  color:'Red'
}
function Inlinecss() {
  return (
    <div>
      <h1 style={heading}> Inline Css I am using</h1>
      <h2 style={heading2}> Inline Css I am asdf</h2>
      <h3 style={heading}> Inline Css I am asdfwqqw</h3>
      <h1 className='success'>Success</h1>
    </div>
  )
}

export default Inlinecss
