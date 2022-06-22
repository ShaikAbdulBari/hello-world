import React,{useEffect,useState} from 'react'
import Harry from './components/Harry'
import { BrowserRouter, Routes, Route ,Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Home from './components/Home'
import Create from './components/Create';
import View from './components/View';


function App() {
    



return(
       <div>

               
               <BrowserRouter>
                     <Routes>
                     <Route path="/" element={<Home/>} />


                        <Route path="/newuser" element={<Create/>} />
                        <Route path="/view" element={<View/>} />  
                        </Routes>
                     {/* <Link to='/newuser'>New User</Link> */}

               </BrowserRouter>
               
       </div>
)



































//     function home(){

//     console.warn("hello");
//         return(
//         <div>
//            { <Create/>}
//         </div>
//         )
//     }



//   const [users,setUser]=useState([])
//   useEffect(()=>{
//     fetch("http://192.168.4.109:8080/api/contacts").then((result)=>{
//       result.json().then((resp)=>{
//         // console.warn(resp)
//         setUser(resp)
//       })
//     })
//   },[])
//   console.warn(users)
//   return (
//     <div className="App">
//         <BrowserRouter>

      


//          <Harry/>
//       <h1>Home  </h1>
//       <table border="1" className='table'>
//        <tbody>
//        <tr>
//           <td>ID</td>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Mobile</td>
//           <td>Actions</td>
//         </tr>
//         {
//           users.map((item,i)=>
//             <tr key={i}>
//             <td>{item.id}</td>
//           <td>{item.name}</td>
//           <td>{item.email}</td>
//             <td>{item.phone}</td>
//             <td>
//             <Link to="/c"> <button type="button"  onClick={()=><Create/>} className="btn btn-outline-info" >View</button></Link>
//             <Link to="/c"><button type="button"  className="btn btn-outline-warning">Update</button></Link>
//             <button type="button" onClick={()=>home(this)} className="btn btn-outline-dark">Delete</button>
//             {/* <button type="button"  className="btn btn-outline-info">View</button>
//             <button type="button"  className="btn btn-outline-warning">Update</button>
//              <button type="button"  className="btn btn-outline-dark">Delete</button> */}
//              </td>
//           </tr>
//           )
//         }
//        </tbody>
//       </table>
//         {/* <Create/> */}
//         {/* <Link to="/components/Create">create new user</Link> */}
//      <Routes>
      
//        {/* <Route path="/components/Create" element={<Create/>}></Route> */}
   
//      </Routes>
     





//         </BrowserRouter>
//     </div>
    
//   );
}
export default App;