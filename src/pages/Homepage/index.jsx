import React from "react"
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Ul from "../../components/List/Ul/ulcomponent";

const Homepage = ( {text}) => {
   
    return(
        <div>
            <Header text="Employee"/>
            { text }
            <SearchBar/>
            <Ul/>
        </div>
    )
}

export default Homepage;