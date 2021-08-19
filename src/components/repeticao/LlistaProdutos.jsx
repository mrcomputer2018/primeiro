import React from "react"
import Produtos from "../../data/produtos"
import "./ListaProdutos.css"

const ListaProdutos = (props) => {
    const listaDeProdutos = Produtos.map((produto, i) => {
        return (
            <tr key={ produto.id } className={ i % 2 === 0 ? 'par' : 'impar' } >
                <td> { produto.id } </td>
                <td> { produto.nome } </td>
                <td> RS { produto.preco } </td>
            </tr>
        )
    })

    return (
        <div className="tabelaProdutos">
            <h3>Tabela Produtos</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                   
                    { listaDeProdutos }
                    
                </tbody>
            </table>
        </div>
    )
}

export default ListaProdutos