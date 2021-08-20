import React from "react"
import DiretaFilho from "./DiretaFilho";

const DiretaPai = (props) => {
    return (
        <div>
            <DiretaFilho texto="Filho1" numero={20} bool={true} />
            <br/>
            <DiretaFilho texto="Filho2" numero={17} bool={false} />
        </div>
    )
}
export default DiretaPai;