import React from "react";

function UserStatus({isLoggedIn}){
    return(
        <div>
            {isLoggedIn? "Welcome Back..":"Please Log in.."}
        </div>
    );
}

export default UserStatus;