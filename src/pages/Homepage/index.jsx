import React from "react"
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";

const Homepage = ( {text }) => {
   
    return(
        <div>
            <Header text="Employee"/>
            { text }
            <SearchBar/>
        </div>
    )
}

export default Homepage;