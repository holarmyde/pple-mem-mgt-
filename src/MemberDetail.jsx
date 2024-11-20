import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


function MemberDetail(){
    const {id} = useParams()
    const navigate = useNavigate();
    const [member, setMember] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8081/get/'+id)
        .then(res => setMember(res.data.Result[0]))
        .catch(err => console.log(err));
    })

    const handleLogout = () => {
        axios.get('http://localhost:8081/logout')
        .then(res => {
           navigate('/start')
        }).catch(err => console.log(err));
   }


    return(
        <div>
        <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
            <img src={`http://localhost:8081/images/`+member.image} alt="" className='memImg'/>
            <div className='d-flex align-items-center flex-column mt-5'>
                <h3>Name: {member.name}</h3>
                <h3>Email: {member.email}</h3>
                <h3>PhoneNo: {member.phoneno}</h3>
            </div>
            <div>
                <button className='btn btn-primary me-2'>Edit</button>
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </div>
        </div>
    </div>
    )
}

export default MemberDetail