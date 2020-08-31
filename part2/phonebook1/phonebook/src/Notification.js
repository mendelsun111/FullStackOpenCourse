import React from "react"
import './index.css'

const Notification = ({message}) => {
    if (message==null){
        return null
    }
    return (
        <div className="added">
            {message}
        </div>
    )
}

export default Notification