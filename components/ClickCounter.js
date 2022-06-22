import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

 class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count :0
      }
    }

    incrementFun = () => {
      this.setState( prev =>{
        return {count : prev.count+1}
      })
    }




  render() {
       const {count ,incrementFun} = this.props;
     return (
      <div>
        <button  onClick={incrementFun} >
         Clicked  {count} times </button>
      </div>
    )
  }
}

export default UpdatedComponent( ClickCounter )
