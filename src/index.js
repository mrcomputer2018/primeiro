import ReactDOM from "react-dom"
//* Para poder usar JSX
import React from "react"
import "./index.css"

import Primeiro from "./components/basicos/Primeiro"

const element = document.getElementById("root")

ReactDOM.render(
    <div>
        <strong>"Ola, React!!!!"</strong>
        <br/>
        <Primeiro/>
    </div>, 
    element
    )