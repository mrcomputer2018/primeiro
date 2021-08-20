import React from "react"
import "./App.css"

import Card from "./components/layout/Card"
import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"
import Aleatorio from "./components/basicos/Aleatorio"
import Familia from "./components/basicos/Familia"
import Familia02 from "./components/basicos/Familia02"
import Membro from "./components/basicos/Menbro"
import ListaAlunos from "./components/repeticao/ListaAlunos"
import ListaProdutos from "./components/repeticao/LlistaProdutos"
import ParOuImpar from "./components/condicional/ParOuImpar"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"

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

                <Card titulo="#05 - Componentes com Filhos"  color="#00C8F8">
                    <Familia sobrenome="Ferreira"></Familia>
                </Card>

                <Card titulo="#05.2 - Componentes com Filhos #02"  color="#01C3A1">
                    <Familia02 sobrenome="Sulva">
                        <Membro nome="Pedro" />
                        <Membro nome="Joao" />
                        <Membro nome="Marcelo" />
                    </Familia02>
                </Card>

                <Card titulo="#06 - Repetição"  color="#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#07 - Repetição Desafio"  color="#FF4CFF">
                    <ListaProdutos></ListaProdutos>
                </Card>

                <Card titulo="#08 - Renderização Condicional"  color="#008B8B">
                    <ParOuImpar numero={20}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Fernando' }}></UsuarioInfo>
                    <UsuarioInfo usuario={{ email: 'fee@fe.oorg.br' }}></UsuarioInfo>
                </Card>

                <Card titulo="#09 - Comunicacao direta"  color="#9520E3">
                    <DiretaPai />
                </Card>

                <Card titulo="#10 - Comunicacao indireta"  color="#E87B27">
                    <IndiretaPai />
                </Card>
            </div>
        </div>
    )
}

export default App;