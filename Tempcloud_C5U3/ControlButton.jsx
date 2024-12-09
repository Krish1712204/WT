import React, { useState } from "react";

function ControlBtton({step,increase,decrease}){
    return(
        <div>
            <button onClick={()=>increase(step)}>Increment</button>
            <button onClick={()=>decrease(step)}>Decrease</button>
        </div>
    );

}

function Counter({step}){
    const[count,setCount]=useState(0);

    const increase=(step)=>setCount(count+step);
    const decrease=(step)=>setCount(count-step);


    return(
        <div>
        <h2>Counter</h2>
        <ControlBtton step={step} increase={increase} decrease={decrease}/>
        </div>
    );
}

export default ControlBtton;