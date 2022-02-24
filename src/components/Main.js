import React from "react";
import UserHOC from "./UserHOC";

const Main =(props)=>{
  return(
    <div>Main Comp <br/>Name:{props.name}</div>
  )
}

export default UserHOC(Main)