import React from "react"

function Fragmento(props) {
    return (
        //* Mandando direto sem div coom react.Fragment ou com <></>
        <React.Fragment key="1">
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!!!</p>
        </React.Fragment>
    )
}

export default Fragmento