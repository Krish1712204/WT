import React from "react";

function UserCard({name,age}){
    return(
    <div>
        <h3>Name:{name}</h3>
        <h3>Age:{age}</h3>
    </div>
    );
}

export default UserCard;