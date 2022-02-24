import React, { Component } from 'react'
import PureChild1 from './PureChild1'
import  PureChild2  from './PureChild2';

export default class Parent extends Component {
  constructor(){
    super()
    this.state={
      name:"John"
    }
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({
        name:"DOE"
      })
    }, 2000);
  }
  render() {
    return (
      <div>Parent
        <PureChild1 name={this.state.name
        }/>
        <PureChild2 name={this.state.name
        }/>
      </div>
    )
  }
}
