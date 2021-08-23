import React, { useState } from "react"
import "./Input.css"

const Input = (props) => {
    const [valor, setValor] = useState("Inicial")

    /**Recebe um evento como parametro */
    function quandoMudar(e) {
        setValor(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div className="input">
            <h2>{ valor }</h2>
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                {/* Onchange - sera chamado sempre que digitar (componente controlado) */}
                <input type="text" value={ valor } onChange={quandoMudar} />
                <input type="text" value={ valor } readOnly />
                
                {/* Componente nao controlado - nao vinculado com o estadoo*/}
                <input type="text" value={ undefined } />
            </div>
            
        </div>
    )
}

export default Input;