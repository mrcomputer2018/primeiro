import React from "react"
import IF from "./IF"

const UsuarioInfo = (props) => {
    const usuario = props.usuario || {}
    return (
        <div>
           {/*  /* Usuario setado e susario.nome valido */}
            <IF test={usuario && usuario.nome}>
                Seja bem vindo!!!<strong>{ props.usuario.nome }</strong>
            </IF>

            <IF test={!usuario || !usuario.nome}>
                Usuario ou senha<strong>invalidos!!!</strong>
            </IF>
        </div>
    )
}
export default UsuarioInfo;