import React from "react"

function ComParametro(props) {
    console.log(props);
    const status = props.nota >= 7 ? "Aprovado" : "Reprovado"

    return (
        <div>
            <h2>{ props.titulo }</h2>
            <h3>Aluno: { props.subtitulo }</h3>
            <p>tem nota <strong>{ props.nota }</strong></p>
            <p> e foi <strong>{ status }</strong></p>!!!
        </div>
    )
}

export default ComParametro;