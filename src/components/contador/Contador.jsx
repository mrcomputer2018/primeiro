import React, { Component } from "react"
import "./Contador.css"

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

    setPasso = (evento) => {
        this.setState({
            /** + ppara converter para inteiro */
            passo: +evento.target.value,
        })
    }

    render() {
        return(
            <div className="contador">
                <h2>Contador</h2>
               {/*  this - aponta ´para instancia da classe */}
                <p>Valor atual de numero: { this.state.numero} </p>
                <div>
                    <label htmlFor="passoInput">Passo:</label>
                    <input 
                    id="passoInput" 
                    type="number" 
                    value={ this.state.passo } 
                    onChange={this.setPasso} 
                    />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}

export default Contador;