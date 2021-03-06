import React from "react"
import mainLogo from'./image.png'

function Image() {

    return (
        <div className="imageBack">
           <img src={mainLogo} className="mainLogo" alt="" />
        </div>
    )
}

export default Image