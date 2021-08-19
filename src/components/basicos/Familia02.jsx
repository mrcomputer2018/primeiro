import React, { cloneElement } from "react"

const Familia02 = (props) => {
    
    return (
        <div>
            { 
                props.children.map( (child, i) => {
                    return cloneElement(child, { ...props, key: i })
                }) 
            }
            {/* Spread em props para passar as propriedades do pai para o filho
            quando se tem um componente no pai */}
            {/* { cloneElement(children, { ...props }) } */}
           
        </div>
    )
}
export default Familia02;