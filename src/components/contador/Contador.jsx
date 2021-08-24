import React, { Component } from "react"
import "./Contador.css"
import Display from "./Display"
import Botoes from "./Botoes"
import PassoForm from "./PassoForm"

class Contador extends Component {
    /* defimindo estado */
    state = {
        /* Iniciando o estado com o valor inicial */
        numero: this.props.numeroInicial || 0,
        /* Inicia com passoInicial se nao for forneecido comeca com 5 */
        passo: this.props.passooInicial || 5,
    }

    /* constructor(props) {
        super(props) {
            this.state = { */
        /* Iniciando o estado com o valor inicial */
        /* numero: props.numeroInicial,
            } 
        }
    } */
    inc = () => {
        /* Alterando estadoo */
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render() {
        return(
            <div className="contador">
                <h2>Contador</h2>
                <Display numero={ this.state.numero }/>
                <PassoForm passo={ this.state.passo } setPasso={ this.setPasso }/>
                <Botoes incrementar={ this.inc } decrementar={ this.dec } />
            </div>
        )
    }
}

export default Contador;