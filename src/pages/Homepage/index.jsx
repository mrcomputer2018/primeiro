import React from "react"
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Ul from "../../components/List/Ul/ulcomponent";
import "./homepage.css"

const Homepage = ({text}) => {
   
    return(
        <div>
            <Header className='header_ed'text="Employee Directory"/>
            {text}
            <div>
                <SearchBar/>
            </div>
            <Ul/>
        </div>
    )
}

export default Homepage;