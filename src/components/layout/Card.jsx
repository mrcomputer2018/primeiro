import React from "react"
import "./Card.css"

const Card = (props) => {
    const { titulo } = props

    return (
        <div className="Card">
            <div className="Tittle">{ titulo }</div>
            <div className="Content">{ props.children }</div>
        </div>
    )
}

export default Card;