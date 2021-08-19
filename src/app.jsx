import React from "react"
import "./App.css"

import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"
import Aleatorio from "./components/basicos/Aleatorio"
import Card from "./components/layout/Card"

function App(props) {
    return (
        <div className="app">
            <h1>Fundamentos React</h1>
            <br/>
            <div className="cards">
                <Card titulo="#01 - Primeiro"  color="#588C73">
                    <Primeiro/>
                </Card>
                
                <Card titulo="#02 - Com Parametro"  color="#E8B71A">
                    <ComParametro 
                        titulo="Situção do aluno:" 
                        subtitulo="Pedro Silva" 
                        nota={10} />
                </Card>
                
                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>

                <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
                    <Aleatorio min={1} max={60}/>
                </Card>
            </div>
        </div>
    )
}

export default App;