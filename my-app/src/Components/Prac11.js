import './mystyle.css'

function Prac11(props) {
    let className =props.paragraph?'paragraph':''
    const heading={
        fontSize:'72px',
        color:'green'
    }

    const heading2={
        fontSize:'72px',
        color:'red'
    }
    const BgImage = {
      backgroundImage: `url('Image/cake1.jpg') `,
      height: '100vh', 
      width: '100vw',  
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat' 
  };

  return (
    <div style={BgImage}>
      <h1 style={heading}>Innobrain Technologies</h1>
      <h1 style={heading2}>Innobrain Technologies</h1>
      <p id='p1'>Hii</p>
      <h4 className='paragraph'>Hello</h4>
      <h4 className={className}>Kesha</h4>
      <h2 style={{color:"blue"}}>HIIII</h2>
    </div>
  )
}

export default Prac11
