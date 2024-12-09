import { useState } from "react";
import "./MainContent.css"
import Content from "./Content";

function MainContent(){
    let [page,setPage]=useState("Home");
    function changePage(event){
            setPage(event.target.id);
    }
    return(

        <div className="container">
            <div className="sidebar">
                <button id="Home" onClick={changePage}>Home</button>
                <button id="Contact" onClick={changePage}>Contact</button>
                <button id="Sample" onClick={changePage}> Sample</button>
            </div>

            <div className="content">
                <Content pageName={page}/>
            </div>
        </div>
    )
}

export default MainContent;