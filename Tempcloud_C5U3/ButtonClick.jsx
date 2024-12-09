import React from "react";

function ButtonClick({mess}){
    const handleClick=()=>{
        alert("Clicked");
    }
    return(
        <div>
            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    );
}

export default ButtonClick;