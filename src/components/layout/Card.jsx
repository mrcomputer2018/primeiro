import React from "react"
import "./Card.css"

const Card = (props) => {
    const { titulo, children, color } = props

    const cardStyle = {
        backgroundColor: color || "#f00",
        borderColor: color || "#f00"
    }

    return (
        <div className="Card" style={ cardStyle }>
            <div className="Tittle">{ titulo }</div>
            <div className="Content">{ children }</div>
        </div>
    )
}

export default Card;