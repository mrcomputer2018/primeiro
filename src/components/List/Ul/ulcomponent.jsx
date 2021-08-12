import React from "react"
import Li from "../Li/licomponent";
import "./ulcomponent.css"

const listaFuncionarios = [
    {
        avatar: 'avatar1',
        nome: 'João Gomes',
        cargo: 'Estagiário/Faz tudo'
    },
    {
        avatar: 'avatar2',
        nome: 'Maria Teresinha',
        cargo: 'Tech Lead'
    },
    {
        avatar: 'avatar3',
        nome: 'Teresa Maria',
        cargo: 'Recursos Humanos'
    },
    {
        avatar: 'avatar4',
        nome: 'Gomes João',
        cargo: 'Customer Success'
    }
]

const Ul = () => {
    return (
        <ul>            
            { listaFuncionarios.map(({avatar, cargo, nome}) => {
                return <Li avatar={avatar} cargo={cargo} nome={nome} />
            }) }
        </ul>
    )
}

export default Ul;