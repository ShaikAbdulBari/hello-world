import React, {Component} from 'react'



class Welcome extends Component {


    render() {
         
        const {name,aim}=this.props
        return (
           <div>
           Hello {name} 

         
           
           </div>
       )
       
    }
}

export default Welcome