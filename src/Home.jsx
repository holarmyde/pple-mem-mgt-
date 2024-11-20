import React, { useEffect, useState } from "react";
import axios from 'axios';

function Home(){
    const [adminCount, setAdminCount] = useState()
    const [memberCount, setMemberCount] = useState()
    const [phoneno, setPhoneno] = useState()
    useEffect(()=> {
        axios.get('http://localhost:8081/adminCount')
       .then(res => {
           setAdminCount(res.data[0].admin)
       }).catch(err => console.log(err));


       axios.get('http://localhost:8081/memberCount')
       .then(res => {
           setMemberCount(res.data[0].member)
       }).catch(err => console.log(err));


       axios.get('http://localhost:8081/phoneno')
       .then(res => {
           setPhoneno(res.data[0].sumOfPhoneno)
       }).catch(err => console.log(err));
    }, [])
    return (
        <div>
        <div className="p-3 d-flex justify-content-around mt-3">
            <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
                  <div className="text-center pb-1">
                  <h4>Admin</h4>
                  </div>
                
                <hr />
                <div className="">
                <h5>Total: {adminCount}</h5>
                </div>
                
            </div>
            <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
                  <div className="text-center pb-1">
                  <h4>Members</h4>
                  </div>
                
                <hr />
                <div className="">
                <h5>Total: {memberCount}</h5>
                </div>
                
            </div>
            <div className="px-3 pt-2 pb-3 border shadow-sm w-25">
                  <div className="text-center pb-1">
                  <h4>Main Phoneno per Month</h4>
                  </div>
                
                <hr />
                <div className="">
                <h5>Total: {phoneno}</h5>
                </div>
                
            </div>
        </div>

         {/**list of Admin */}
         <div className="mt-4 px-5 pt-3">
         <h3>List of Admins</h3>
         <table className="table">
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Admin</td>
                    <td>Admin</td>
                </tr>
            </tbody>
         </table>
     </div>
     </div>
    )
}


export default Home