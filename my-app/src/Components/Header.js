import React from "react"

const Header = () => {
    console.log("Callback Hook")
  return (
    <div>
      Header
    </div>
  )
}

export default React.memo(Header)
