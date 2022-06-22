
import React,{Component} from "react";

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root')); 
  // Try changing to isLoggedIn={true}:
  root.render(<Greeting isLoggedIn={false} />);


function Pra(props) {
    // function handleSubmit(e) {
    //   e.preventDefault();
    //   console.log('You clicked submit.');
    // }
  
    // return (
    //   <form onSubmit={handleSubmit}>
    //     <button type="submit">Submit</button>
    //   </form>
    // );
  }

  export default Pra;