import React from "react"

const IndiretaFilho = (props) => {
    const min = 50
    const max = 70

    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min
    const gearNerd = () => Math.random() > 0.5 

    return (
        <div>
            <div>Filho</div>
            {/* Ao clicar envia informacoes pro componente pai*/}
            <button onClick={
                function(e) {
                    props.quandoClicar('joao', gerarIdade(), gearNerd())
                }}>
                Fornecer Informacoes
            </button>
        </div>
    )
}

export default IndiretaFilho;