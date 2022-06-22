import React, { useEffect, useState } from 'react'
import Create from '../components/Create'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Harry from '../components/Harry'
import View from '../components/View'



function Home() {

  const [users, setUser] = useState([])


 const result= useEffect(() => {
    fetch("http://192.168.4.109:8080/api/contacts")
      .then((result) => {
        result.json()
          .then((resp) => { setUser(resp) })
      })



  }, [])



  



  console.warn(users)

  function deleteData(id) {
   
 

const result=    fetch(`http://192.168.4.109:8080/api/contacts/${id}`, {
      method:'DELETE'

    })
      .then((result) => {
        result.json()
          .then((resp) => { console.warn(resp); })
     
      })

    

  }






  return (
    <div className="App">
      <Harry />
      <h1>Home</h1>



      <table border="1" className='table'>
        <tbody>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Actions</td>
          </tr>
          {
            users.map((item, i) =>
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                            <td>
                                    <Link to='/view'> <button className="btn btn-warning" type="button"  >View</button></Link>
                                    <button  className="btn btn-outline-dark" type="button"  >Update</button>
                                    
                                    <div className='delete' >
                                    <button   type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Delete
                                    </button>


                                                                  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                    <div className="modal-dialog">
                                                                      <div className="modal-content">
                                                                        <div className="modal-header">
                                                                          <h5 className="modal-title" id="exampleModalLabel">Are you sure to delete this field ?</h5>
                                                                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                        </div>
                                                                        <div className="modal-body">

                                                                        </div>
                                                                        <div className="modal-footer">
                                                                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                                                          <button onClick={()=>deleteData(item.id)} type="button" className="btn btn-primary" >Yes </button>
                                                                        </div>
                                                                      </div>
                                                                    </div>
                                                                  </div>

                                    </div>

                            </td>
              </tr>
            )
          }
        </tbody>
      </table>







    </div>

  );
}

export default Home;