import React from "react"
import Membro from "./Menbro";

const Familia = (props) => {
    return (
        <div>
            {/** props.sobrenome- veio do compoonente pai */}
            <Membro nome="Pedro" sobrenome={ props.sobrenome }/>
            {/* Spread de props - espalhando */}
            <Membro nome="Joao" { ...props }/>
            <Membro nome="Marcelo" sobrenome="Taco" />
        </div>
    )
}
export default Familia;