import React, { useState } from "react";

function DisplayCount({likes,dislikes}){
    return(
        <div>
            <h3>Likes:{likes}</h3>
            <h3>DisLikes:{dislikes}</h3>
        </div>
    );
}


function LikeDislike(){
    const[like,setlike]=useState(0);
    const[dislike,setdislike]=useState(0);

    const handlelike=()=>setlike(like+1);
    const handledislike=()=>setdislike(dislike+1);

    return(
        <div>
            <button onClick={handlelike}>Like</button>
            <button onClick={handledislike}>DisLike</button>
            <DisplayCount likes={like} dislikes={dislike}/>
        </div>
    );
}

export default LikeDislike;