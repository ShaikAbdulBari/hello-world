import React, { Component } from 'react'
import { UserConsumer, UserProvider } from './userContext'

export class ComponentF extends Component {
  render() {


    return (
        
        <UserConsumer>
        
           {
              
                (u) => {

                   return  <div> 
                     <h1>Hello World</h1>
                      <h1> Hello  {u}</h1>
                       
                       </div> 
                
                }
           }
             
                 
            
        </UserConsumer>

        
    )
  }
}

export default ComponentF
