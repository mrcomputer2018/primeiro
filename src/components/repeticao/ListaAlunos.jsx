import React from "react"
import alunos from "../../data/alunos"

const ListaAlunos = (props) => {
   /* console.log(alunos) ; */
  /*  const li1 = <li>{ alunos[0].id }) - { alunos[0].nome } -> {alunos[0].nota}</li> */
   //* Map em cima de alunos e para cada aluno vou receber a li com os dados
   //* de id nome e nota
   const listaDeAlunos = alunos.map((aluno) => {
       return <li key={ aluno.id }> { aluno.id } - { aluno.nome } - { aluno.nota } </li>
   })

   const liStyle = {
       listStyle: 'none'
    }

    return (
        <div>
            <ul style={ liStyle } >
                { listaDeAlunos }
            </ul>
        </div>
    )
}

export default ListaAlunos