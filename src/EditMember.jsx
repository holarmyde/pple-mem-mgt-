
import React, { useEffect, useState } from "react";
import axios from  'axios';
import { useNavigate, useParams } from 'react-router-dom';

//onChange={e => setData({...data, name: e.target.value})}
//onChange={e => setData({...data, email: e.target.value})}
//onChange={e => setData({...data, password: e.target.value})}
//onChange={e => setData({...data, salary: e.target.value})}
// onChange={e => setData({...data, address: e.target.value})}
//onChange={e => setData({...data, image: e.target.files[0]})}

function EditMember(){
    const [data, setData] = useState({
        name:'',
        email:'',
        address: '',
        phoneno: '',
      
    })

    const navigate = useNavigate()
    
    const {id} = useParams();

    useEffect(()=> {
       
        axios.get('http://localhost:8081/get/'+id)
        .then(res=> {
            setData({...data, name: res.data.Result[0].name,
                email: res.data.Result[0].email, 
                address: res.data.Result[0].address,
                phoneno: res.data.Result[0].phoneno
            })
                
        })
        .catch(err => console.log(err))
    }, [])

    const handleSubmit =(event) =>{
        event.preventDefault();
      
       
        axios.put('http://localhost:8081/update/'+id, data)
        .then(res => {
            if(res.data.Status === "Success" ){
                navigate('/member')
            }
        })
        .catch(err => console.log(err))

    }
    return(
        <div className='d-flex flex-column align-items-center pt-4'>
        <h2>Update Member</h2>
        <form class="row g-3 w-50" onSubmit={handleSubmit}>
        <div class="col-12">
                <label for="inputName" class="form-label">Name</label>
                <input type="text" class="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
                onChange={e=> setData({...data, name: e.target.value})} value={data.name}/>
                
            </div>
            <div class="col-12">
                <label for="inputEmail4" class="form-label">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder='Enter Email' autoComplete='off'
                onChange={e=> setData({...data, email: e.target.value})} value={data.email}/>
            </div>
            <div class="col-12">
                <label for="inputPhoneno" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="inputPhoneno" placeholder="Enter Phone number" autoComplete='off'
               onChange={e=> setData({...data, phoneno: e.target.value })} value={data.phoneno}/>
            </div>
            <div class="col-12">
                <label for="inputAddress" class="form-label">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" autoComplete='off'
               onChange={e=>setData({...data, address: e.target.value})} value={data.address}/>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>

    )
}

export default EditMember


