import ReactDOM from "react-dom"
//* Para poder usar JSX
import React from "react"
import "./index.css"

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"

const element = document.getElementById("root")

ReactDOM.render(
    <div>
        <strong>"Ola, React!!!!"</strong>
        <br/>
        <Primeiro/>
        <ComParametro 
            titulo="Situção do aluno:" 
            subtitulo="Pedro Silva" 
            nota={10} />
    </div>, 
    element
    )