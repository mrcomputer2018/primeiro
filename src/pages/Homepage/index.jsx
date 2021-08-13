import React from "react"
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Ul from "../../components/List/Ul/ulcomponent";
import Button from "../../components/Button";
import "./homepage.css"

const Homepage = ({text}) => {
   
    return(
        <div>
            <Header text="Employee Directory"/>
            {text}
            <div>
                <SearchBar/>
            </div>
            <Ul/>
            <Button/>
        </div>
    )
}

export default Homepage;