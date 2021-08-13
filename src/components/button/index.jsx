import React from "react";
import "./button.css";

/* const Button = ({ text }) => {
    console.log({ text });
    return (
        <button>{text || "Qualquer coisa ai"}</button>
    )
} */
/* class Button extends React.Component {
    render() {
        console.log('state', this.state);
        return <button>{this.props.text}</button>
    }
} */

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = { };
        this.setState({ filme {} })
    }

    state = {

    }

    render() {
        console.log('state', this.state);
        return <button>{this.props.text}</button>
    }


export default Button;