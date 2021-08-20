import React from "react"
import DiretaFilho from "./DiretaFilho";

const DiretaPai = (props) => {
    return (
        <div>
            <DiretaFilho texto="Filho1" numero={20} bool={true} />
        </div>
    )
}
export default DiretaPai;