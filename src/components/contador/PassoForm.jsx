import React from "react"

const PassoForm = (props) => {
    return (
        <div>
            <label htmlFor="passoInput">Passo:</label>
            <input 
                id="passoInput" 
                type="number" 
                value={ props.passo } 
                /** + para converter para inteiro */
                onChange={ evento =>props.setPasso(+evento.target.value) } 
            />
        </div>
    )
}
export default PassoForm;