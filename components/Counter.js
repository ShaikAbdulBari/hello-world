import React, { Component } from 'react'


 class Counter extends Component {

                    constructor(props) {
                      super(props)

                      this.state = {
                        count :0
                      }
                    }

                 incCount(){
                   this.setState({
                     count : this.state.count+1
                   })
                 }
      

                  
                
                  render(){  
                        return(
                              <>
                              <h1>dsaf {this.props.name}</h1>
                              <div>count  : {this.state.count}</div>
                              
                              <button onClick={()=>this.incCount()}>click{this.state.count}</button>
                              </>
                               )
                  }



}

export default Counter