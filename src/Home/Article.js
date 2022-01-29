import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { async } from '@firebase/util';
import db from './firebase';
import './table.css';

function Art(props) {
    const[store,setstore]=useState([])
    useEffect(()=>{
        const getdata=async()=>{
            const querySnapshot = await getDocs(collection(db, "users"));
            let totaldata=[];
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
            //  console.log(doc.id, " => ", doc.data());
            totaldata.push(doc.data());
            });
            setstore(totaldata);
        };
        
        getdata();
       
    },[])
    

    return (
        <div>
            <div style={{position:"absolute",width:"120%"}}>
            <table>
  <tr>
    <th>Hospital Name</th>
    <th>Register Number</th>
    <th>state</th>
    <th>pincode</th>
    <th>Nodal Person Name</th>
    <th>Nodal Person Number</th>
    <th>Nodal Person Email</th>
    <th>Hospital Address</th>
    <th>Hospital Primary Email</th>
    <th>Hospital Mobile Number</th>
    <th>Hospital Emergency Number</th>
    <th>Fax Number</th>
  </tr>
  {store.map(k=>(
  <tr>
    <td>{k.hositalName}</td>
    <td>{k.hospitalResiterNumber}</td>
    <td>{k.state}</td>
    <td>{k.pincode}</td>
    <td>{k.nodalPersonName}</td>
    <td>{k.nodalPersonNumber}</td>
    <td>{k.nodalPersonEmail}</td>
    <td>{k.address}</td>
    <td>{k.email}</td>
    <td>{k.mobileNumber}</td>
    <td>{k.emergencyNumber}</td>
    <td>{k.faxNumber}</td>
  
  </tr>
  ))}
  </table>
            </div>
        </div>
    );
}

export default Art;