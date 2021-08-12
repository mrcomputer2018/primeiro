import React from "react"
import PropTypes from "prop-types"

const Li = (avatar, nome, cargo) => {
    return (
        <li>
            <img src={avatar} alt="" />
            <p>{nome}</p>
            <p>{cargo}</p>
        </li>
    )
}

Li.propTypes = {
    avatar: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    cargo: PropTypes.string.isRequired
}

/* Li.defaultProps = {
    avatar: "Imagem indefinida",
    nome: "Nome indefinido",
    cargo: "Cargo indefinido"
} */

export default Li;