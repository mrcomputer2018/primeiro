import React from "react";
import "./button.css";

const Button = ({ text }) => {
    console.log({ text });
    return (
        <button>{text || "Qualquer coisa ai"}</button>
    )
}

export default Button;