import React, { useState } from "react";

function F({far}){
    return <h3>
        Far:{far};
    </h3>
}

function TemperatureConerter(){
    const[cel,setcel]=useState(0);

    const far=(cel)+273;

    return(
        <div>
            <F far={far}/>
        </div>
    );
}

export default TemperatureConerter;