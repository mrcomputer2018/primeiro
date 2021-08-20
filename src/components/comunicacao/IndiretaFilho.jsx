import React from "react"

const IndiretaFilho = (props) => {
    
    return (
        <div>
            <div>Filho</div>
            {/* Ao clicar envia informacoes pro componente pai*/}
            <button onClick={
                function(e) {
                    props.quandoClicar('joao', 53, true)
                }}>
                Fornecer Informacoes
            </button>
        </div>
    )
}

export default IndiretaFilho;