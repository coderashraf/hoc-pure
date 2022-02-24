import React, { memo } from 'react'

const PureChild2 = (props) => {
  console.log("This is PureChild2:Functional");
  return (
    <div>PureChild2 name {props.name}</div>
  )
}

export default memo(PureChild2)