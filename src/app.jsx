import React from "react"

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"

function App(props) {
    return (
        <div id="app">
            <h1>Fundamentos React</h1>
            <br/>
            <Card titulo="#01 - Primeiro">
                <Primeiro/>
            </Card>
            
            <Card titulo="#02 - Com Parametro">
                <ComParametro 
                    titulo="Situção do aluno:" 
                    subtitulo="Pedro Silva" 
                    nota={10} />
            </Card>
            
            <Card titulo="#03 - Fragmento">
                <Fragmento />
            </Card>

            <Card titulo="#04 - Desafio Aleatorio">
                <Aleatorio min={1} max={60}/>
            </Card>
        </div>
    )
}

export default App;