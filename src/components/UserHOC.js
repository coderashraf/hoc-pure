// import React from "react";

// function UserHOC(WrappedComponent){
//  const WrappingComponent =()=>{
//    const name="ManiKumar";
//    const age=15
//    return(
//      <div>
//        <WrappedComponent name={name} age={age}/>
//      </div>
//    )
//  }
//  return WrappingComponent
// }
// export default UserHOC

import React from "react";

function UserHOC(WrappedComponent){
  const WrappingComponent=()=>{
    const name="Manikumar"
    const age=15
    return(
      <WrappedComponent name={name} age={age}/>
    )
  }
  return WrappingComponent
}

export default UserHOC