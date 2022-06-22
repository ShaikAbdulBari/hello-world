import React, {Component} from 'react'

class Message extends Component {
  
                
                
                constructor(props) {
                      super(props)
                    
                      this.state = {
                          message :'welcome Abdul',
                          msg2:"hello"
                      }


                }

                 a(params) {

                  this.setState(
                    {
                      message :"Thanks for subscribing" ,
                      msg2:"bye"
                    }
                  )
                }
          
                



                render(){
                          return( <div>

                                  
                            
                                <h1> {this.state.message}   </h1>
                                <h1> {this.state.msg2}   </h1>
                                <button onClick={()=>this.a()} >Subcribe</button>
                           {console.log()}

                                </div>  )
                }
                
}
export default Message