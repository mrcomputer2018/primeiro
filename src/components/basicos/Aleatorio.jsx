import React from "react"

const Aleatorio = (props) => {
    /* const min = props.min
    const max = props.max */
    //* destruction
    const { min, max } = props
    
    const aleatorio = parseInt(Math.random() * (max - min)) + min

    return (
        <div>
            <h2>Valor Aleatorio</h2>
            <p><strong>valor minimo: </strong>{ min }</p>
            <p><strong>valor maximo: </strong>{ max }</p>
            <p><strong>valor escolhido: </strong>{ aleatorio }</p>
        </div>
    )
}

export default Aleatorio;