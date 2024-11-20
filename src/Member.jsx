import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Member(){
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/getMembers')
        .then(res => {
            if(res.data.Status === "Success"){
                //console.log(res.data.Result)
                setData(res.data.Result)
            } else {
                alert("Error")
            }
        })
        .catch(err => console.log(err))
    }, [])
/** *
    const handleDelete = (id) => {
         axios.delete('http://localhost:8081/delete/'+id)
         .then(res => {
            if(res.data.Status === "Success"){
                window.location.reload(true);
            } else {
                alert("Error")
            }
        })
        .catch(err => console.log(err))
    }

*/



const handleDelete = (id) => {
    axios.delete('http://localhost:8081/delete/'+id)
    .then(res => {
      if(res.data.Status === "Success") {
        window.location.reload(true);
      } else {
        alert("Error")
      }
    })
    .catch(err => console.log(err));
  }
    return (
        <div className="px-5 py-3">
           <div className="d-flex justify-content-center">
               <h3>Members List</h3>
            </div> 
             <Link to="/create" className="btn btn-success">Add Member</Link>
             <div className="mt-3">
             <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phoneno</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((member, index) => {
                        return <tr key={index}>
                            <td>{member.name}</td>
                            <td>{
                                <img src={"http://localhost:8081/images/" +member.image}  alt="" className="member-image"/>
                                
                                }</td>
                            <td>{member.email}</td>
                            <td>{member.address}</td>
                            <td>{member.phoneno}</td>
                            <td>
                                <Link to={`/memberEdit/`+member.id} className="btn btn-primary btn-sm me-2">edit</Link>
                                <button onClick={e => handleDelete(member.id)} className="btn btn-sm btn-danger">delete</button>
                            </td>

                        </tr>
                    })}
                </tbody>
             </table>
             </div>

        </div>
    )
}


export default Member