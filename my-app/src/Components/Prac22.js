import ReactDom from 'react-dom'

function Prac22() {
  return ReactDom.createPortal(
    <div>
      Prac22
    </div>,
    document.getElementById('first')
  )
}

export default Prac22
