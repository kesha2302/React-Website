import './mystyle.css';

function Externalcss(props) {
     let className =props.paragraph ? 'paragraph' : ''
  return (
    <div>

      <div className="container">
      <h1 className="header">Welcome to My App</h1>
      <h2 className={`${className} font-xl`}>HELLO</h2>
      <p id='p1'>InnoBrain Technologies</p>
      <p className="paragraph">This is a sample paragraph styled with  external CSS.</p>
      <p className={className}>This is a sample paragraph styled with external CSS with condition.</p>
    </div>
    
    </div>
  )
}

export default Externalcss
