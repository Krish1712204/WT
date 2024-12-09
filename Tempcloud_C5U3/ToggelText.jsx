import React, { useState } from "react";

function ToggleText(){
    const[isVisible,setisVisible]=useState(true);

    const toggleVisibility=()=>{
        setisVisible(!isVisible);
    };

    return(
        <div>
            {isVisible && <p>Hello World</p>}
            <button onClick={toggleVisibility}>
                {isVisible? "Hide":"Show"}
            </button>
        </div>
    );
}

export default ToggleText;