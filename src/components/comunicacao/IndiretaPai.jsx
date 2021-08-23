import React, { useState } from "react"
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = (props) => {
   /*  primeiro - o proprio valor que e nome */
   /* segundo - e uma funcao que vou usar para alterar o valor */
    let [nome, setNome] = useState('?')
    let [idade, setIdade] = useState(0)
    let [nerd, setNerd]  = useState(false)

    function fornecerInformacoes (nome, idade, nerd) {
       /*  alterando Valores */
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <span>{ nome } </span>
            <span><strong>{ idade } </strong></span>
            <span>{ nerd ? "Verdadeiro" : "Falso"}</span>

            <div>Pai</div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}

export default IndiretaPai;