import React from "react"

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"

function App(props) {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <strong>"Ola, React!!!!"</strong>
            <br/>
            <Primeiro/>
            <ComParametro 
                titulo="Situção do aluno:" 
                subtitulo="Pedro Silva" 
                nota={10} />
            <Fragmento />
        </div>
    )
}

export default App;