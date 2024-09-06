import React from "react"

const FwrChild = React.forwardRef((props,ref)=>{
    return(
        <div>
            <input type="text"  ref={ref}/>
        </div>
    )
})

export default FwrChild