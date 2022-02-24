import React from "react";

class PureChild1 extends React.PureComponent{
  render(){
    console.log("This is PureChild1:Class");
    return(
      <div>
        <h1>This is PureChild1:Class {this.props.name}</h1>
      </div>
    )
  }
}
export default PureChild1