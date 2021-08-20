const IF = (props) => {
    if(props.test) {
        //* retorno o corpo do componente
        return props.children
    }
    else {
        return false
    }
}

export const Else = (props) => props.children

export default IF;