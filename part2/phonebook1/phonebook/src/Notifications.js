import React from "react"
import './index.css'

const Notifications = ({message}) => {
    if (message==null){
        return null
    }
    return (
        <div className="removed">
            {message}
        </div>
    )
}

export default Notifications