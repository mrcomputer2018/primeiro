import React from "react"
import PropTypes from "prop-types"

const Header = ({ text }) => {
    return (
        <header className="Header">{ text }</header>
    )
}

Header.propTypes = {
    text: PropTypes.string
}

Header.defaultProps = {
    text: "ola"
}

export default Header;