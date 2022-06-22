import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
 class HoverCounter extends Component {



  render() {
      const {count , incrementFun} =this.props;
    return (
      <div onMouseOver={incrementFun}>
        Hovered{count} Times
        </div>
    )
  }
}

export default UpdatedComponent( HoverCounter )