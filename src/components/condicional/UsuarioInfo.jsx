import React from "react"
import IF, { Else } from "./IF"

const UsuarioInfo = (props) => {
    const usuario = props.usuario || {}
    return (
        <div>
           {/*  /* Usuario setado e susario.nome valido */}
            <IF test={usuario && usuario.nome}>
                Seja bem vindo!!!<strong>{ usuario.nome }</strong>
            </IF>

            <IF test={!usuario || !usuario.nome}>
                Usuario ou email <strong>invalidos</strong>!!!
            </IF>
        </div>
    )
}
export default UsuarioInfo;