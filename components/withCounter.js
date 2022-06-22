import React  from "react";


const UpdatedComponent =OrginalComponent  =>{
                        class NewComponent extends React.Component{
  
  
  
  
                                       render(){
                                        return <OrginalComponent
                                         count={this.props.count} 
                                         incrementCount ={this.incrementCount}
                                         />
                                       }
                       }
  return NewComponent;                      
}

export default UpdatedComponent;
