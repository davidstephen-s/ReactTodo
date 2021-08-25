import React from 'react'

function Errors(props) {
    return (
        <div className="error">
            {props.children}
        </div>
    )
}

export default Errors