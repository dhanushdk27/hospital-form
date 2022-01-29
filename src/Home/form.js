import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import './Form.css';
import {  addDoc, collection } from "firebase/firestore";
import db from './firebase';

function Main(props) {
  const [name, setname] = useState("");
  const [regi, setregi] = useState("");
  const [sta, setsta] = useState("");
  const [pin, setpin] = useState("");
  const [noname, setnoname] = useState("");
  const [nonum, setnonum] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [primary, setprimary] = useState("");
  const [fax, setfax] = useState("");
  const [tele, settele] = useState("");
  const [emer, setemer] = useState("");
  const [pass, setpass] = useState("");
  const [confirm, setconfirm] = useState("");
let passtive =0;  
  var numbers = /^[0-9]+$/;
  var pattern = /^[6-9][0-9]{9}$/;
  var letters = /^[A-Za-z]+$/;
  let caps = /^[A-Z\s]+$/;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  const handle= async()=>{
    // Add a new document with a generated id.
const docRef = await addDoc(collection(db, "users"), {
  hositalName: name,
  hospitalResiterNumber:regi,
  state:sta,
  pincode:pin,
  nodalPersonName:noname,
  nodalPersonNumber:nonum,
  nodalPersonEmail:email,
  address:address,
  email:email,
  faxNumber:fax,
  mobileNumber:tele,
  emergencyNumber:emer,
  password:pass,
  confirmPassword:confirm
  
});
console.log("Document written with ID: ", docRef.id)
  }
  let selectone = ["State", "TamilNadu", "Kerala", "AndhraPradesh", "Karnataka"]
  let tamil = [
    'Ariyalur',
    'Chennai',
    'Coimbatore',
    'Cuddalore',
    'Dharmapuri',
    'Dindigul',
    'Erode',
    'Kanchipuram',
    'Kanyakumari',
    'Karur',
    'Madurai',
    'Nagapattinam',
    'Nilgiris',
    'Namakkal',
    'Perambalur',
    'Pudukkottai',
    'Ramanathapuram',
    'Salem',
    'Sivaganga',
    'Tirupur',
    'Tiruchirappalli',
    'Theni',
    'Tirunelveli',
    'Thanjavur',
    'Thoothukudi',
    'Tiruvallur',
    'Tiruvarur',
    'Tiruvannamalai',
    'Vellore',
    'Viluppuram',
    'Virudhunagar',
  ];
  let Kerala = [
    'Alappuzha',
    'Ernakulam',
    'Idukki',
    'Kannur',
    'Kasaragod',
    'Kollam',
    'Kottayam',
    'Kozhikode',
    'Malappuram',
    'Palakkad',
    'Pathanamthitta',
    'Thrissur',
    'Thiruvananthapuram',
    'Wayanad'
  ];
  let AndhraPradesh = [
    'Adilabad',
    'Anantapur',
    'Chittoor',
    'Kakinada',
    'Guntur',
    'Hyderabad',
    'Karimnagar',
    'Khammam',
    'Krishna',
    'Kurnool',
    'Mahbubnagar',
    'Medak',
    'Nalgonda',
    'Nizamabad',
    'Ongole',
    'Hyderabad',
    'Srikakulam',
    'Nellore',
    'Visakhapatnam',
    'Vizianagaram',
    'Warangal',
    'Eluru',
    'Kadapa'
  ];
  let Karnataka = [
    'Bagalkot',
    'Bangalore Rural',
    'Bangalore Urban',
    'Belgaum',
    'Bellary',
    'Bidar',
    'Bijapur',
    'Chamarajnagar',
    'Chikkamagaluru',
    'Chikkaballapur',
    'Chitradurga',
    'Davanagere',
    'Dharwad',
    'Dakshina Kannada',
    'Gadag',
    'Gulbarga',
    'Hassan',
    'Haveri district',
    'Kodagu',
    'Kolar',
    'Koppal',
    'Mandya',
    'Mysore',
    'Raichur',
    'Shimoga',
    'Tumkur',
    'Udupi',
    'Uttara Kannada',
    'Ramanagara',
    'Yadgir'
  ];
  return (

    <div>

      <Row lg={12} style={{
        display: "flex",
        justifyContent: "space-around"
      }}><h1 style={{ color: "limegreen" }}>HOSPITAL REGISTRATION</h1></Row>
      {/* 
it's all are input validation and input elements */}
      <u><b><h3 style={{ marginLeft: "2rem", marginTop: "-4rem" }}>INFORMATION</h3></b></u>

      <div style={{
        width: "95%",
        height: "fit-content",
        boxShadow: "rgb(0 0 0 / 19%) 0px 4px 13px 4px",
        marginLeft: "1rem", padding: "1rem"
      }}>
        <Row lg={12} style={{ display: "flex", justifyContent: "space-around", height: "fit-content", borderColor: "blue", marginTop: "2rem" }}>
          <Col lg={6}><Col><div><label>*Hospital Name :</label><input onChange={(e) => { setname(e.target.value) }} type="text" placeholder="Enter Hospital Name" /></div></Col><Col style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "0.2rem"
          }} ><span>{name.length == 0 ? "Please Enter Hospital Name" : letters.test(name) === false ? "Please Enter Hospital Name In Correct Format" : name.length < 5 ? " Hospital NamecAtleast Have 5 Characters" : ""}</span></Col></Col>
          <Col lg={6}><Col><div><label>*Hospital Registration Number : </label><input input onChange={(e) => { setregi(e.target.value) }} type="text" placeholder="Enter Hospital Register Number" /></div></Col><Col style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "0.2rem"
          }} ><span>{regi.length == 0 ? "Please Enter Register Number" : caps.test(regi[0] || regi[1] || regi[2] || regi[3]) === false ? `Hospital Register Number Format Should Be Like "ABCD123456" ` : regi.includes(" ") ? "Hospital Register Number Should Not Contain Space" : caps.test(regi[4] || regi[5] || regi[6] || regi[7]) === true ? `Hospital Register Number Format Should Be Like "ABCD123456" ` : !(regi.length > 7 && regi.length < 12) ? "Hospital Register Number Should Be Within 7-12 Characters" : ""}</span></Col></Col>
        </Row>


        <Row lg={12} style={{ display: "flex", justifyContent: "space-around", height: "fit-content", marginTop: "1rem" }}>
          <Col lg={6}><Col><div><label>*State :</label><select onChange={(e) => { setsta(selectone[e.target.options.selectedIndex]) }}>
            <option>{selectone[0]}</option>
            <option>{selectone[1]}</option>
            <option>{selectone[2]}</option>
            <option>{selectone[3]}</option>
            <option>{selectone[4]}</option>
          </select></div></Col><Col style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "0.2rem"
          }} ><span>{sta.length == 0 ? "Please Select State" : ""}</span></Col></Col>
          <Col lg={6}><Col><div><label>*District</label><select>

            {sta == selectone[1] ? tamil.map(e => (<option>{e}</option>)) : sta == selectone[2] ? Kerala.map(e => (<option>{e}</option>)) : sta == selectone[3] ? AndhraPradesh.map(e => (<option>{e}</option>)) : sta == selectone[3] ? Karnataka.map(e => (<option>{e}</option>)) : <option>District</option>}

          </select></div></Col><Col style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "0.2rem"
          }} ><span>{sta.length == 0 ? "Plase Select District" : ""}</span></Col></Col>

          <Col lg={6}><Col><div><label>*Pincode</label><input onChange={(e) => { setpin(e.target.value) }}  maxLength={6} type="number" placeholder="Enter Pincode" /></div></Col><Col style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "0.2rem"
          }} ><span>{pin.length == 0 ? "Plase Enter Pincode" : pin.length != 6 ? "Pincode Must Be In 6 Digits" : ""}</span></Col></Col>
        </Row>

      </div>



      {/* NODAL PERSION INFORMATION */}

      <u> <h3 style={{
        marginLeft: "2rem",
        marginTop: "2rem"
      }}>FOR OFFICE USE ONLY (THIS INFORMATION WILL NOT BE SHARED PUBLICLY)</h3></u>
      <div style={{
        width: "95%",
        height: "fit-content",
        boxShadow: "rgb(0 0 0 / 19%) 0px 4px 13px 4px",
        marginLeft: "1rem", padding: "1rem"
      }}>

        <Row lg={12} style={{ display: "flex", justifyContent: "space-around", height: "fit-content", borderColor: "blue", marginTop: "2rem" }}>
          <Col lg={6}><Col><div><label>*Nodal Persion Name</label><input onChange={(e) => { setnoname(e.target.value) }} type="text" placeholder="Enter Nodal Person Name" /></div></Col><Col style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "0.2rem"
          }} ><span>{noname.length == 0 ? "Please Enter Nodal Person Name" : letters.test(noname) === false ? "Name Must Only Contains alphabet" : noname.length < 5 ? "  NamecAtleast Have 5 Characters" : ""}</span></Col></Col>
          <Col lg={6}><Col><div><label>*Nodal Persion Number </label><input  onChange={(e) => { setnonum(e.target.value) }} type="number" placeholder="Enter Nodal Person Mobile Number" /></div></Col><Col style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "0.2rem"
          }} ><span>{nonum.length == 0 ? "Please Enter Nodal Person Mobile Number" : pattern.test(nonum) === false ? "Please Enter Valid Phone Number" : nonum.length <10  ? "  Please Enter Valid Phone Number" : ""}</span></Col></Col>
        </Row>


        <Row lg={12} style={{ display: "flex", justifyContent: "space-around", height: "fit-content", marginTop: "1rem" }}>
          <Col lg={6}><Col><div><label>*Nodal Email Id</label><input onChange={(e) => { setemail(e.target.value) }} type="email" placeholder="Enter Nodal Person Email Id" /></div></Col><Col style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "0.2rem"
          }} ><span>{email.length == 0 ? "Please Enter Nodal Person Email Id" : mailformat.test(email) === false ? "Please Enter Valid Email" : !(email.includes(".com") || email.includes(".com")  )?"  Please Enter Valid Email" : ""}</span></Col></Col>
        </Row>
      </div>
      {/* HOSPITAL ADDRESS */}


      <u><b><h3 style={{ marginLeft: "2rem" }}>HOSPITAL DEATILS</h3></b></u>
      <div style={{
        width: "95%",
        height: "fit-content",
        boxShadow: "rgb(0 0 0 / 19%) 0px 4px 13px 4px",
        marginLeft: "1rem", padding: "1rem"
      }}>
        <Row lg={12} style={{ display: "flex", justifyContent: "space-around", height: "fit-content", borderColor: "blue", marginTop: "2rem" }}>
          <Col lg={6}><Col><div><label>*Hospital Address</label><input onChange={(e) => { setaddress(e.target.value) }} type="text" placeholder="Enter Hospital Name" /></div></Col><Col style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "0.2rem"
          }} ><span>{address.length == 0 ? "Please Enter Hospital Address" : " "}</span></Col></Col>
          <Col lg={6}><Col><div><label>Hospital primary Email</label><input onChange={(e) => { setprimary(e.target.value) }} type="email" placeholder="Enter Hospital Primary Email Id"/></div></Col><Col style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "0.2rem"
          }} ><span>{primary.length == 0 ? "Please Enter  Email Id" : mailformat.test(primary) === false ? "Please Enter Valid Email" : !(primary.includes(".com") || primary.includes(".com")  )?"  Please Enter Valid Email" : ""}</span></Col></Col>

        </Row>


        <Row lg={12} style={{ display: "flex", justifyContent: "space-around", height: "fit-content", marginTop: "1rem" }}>
          <Col lg={6}><Col><div><label>*Hospital Faxnumber</label><input  onChange={(e) => { setfax(e.target.value) }}  type="number" placeholder="Enter Fax Number" /></div></Col><Col style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "0.2rem"
          }} ><span>{fax.length == 0 ? "Please Enter Fax Number" :fax.length < 6  ? " Fax Number Length Should Over 6":""}</span></Col></Col>
          <Col lg={6}><Col><div><label>*Telephone Number</label><input  onChange={(e) => { settele(e.target.value) }} type="number" placeholder="Enter Hospital Telephone Number" /></div></Col><Col style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "0.2rem"
          }} ><span>{tele.length == 0 ? "Please Enter Telephone Number" : pattern.test(tele) === false ? "Please Enter Valid Phone Number" : tele.length <10  ? "  Please Enter Valid Phone Number" : ""}</span></Col></Col>

          <Col lg={6}><Col><div><label>*Emergency number</label><input  onChange={(e) => { setemer(e.target.value) }} type="number" placeholder="Enter Hospital Emergency Number"/></div></Col><Col style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "0.2rem"
          }} ><span>{emer.length == 0 ? "Please Enter Nodal Person Mobile Number" : pattern.test(emer) === false ? "Please Enter Valid Phone Number" : emer.length <10  ? "  Please Enter Valid Phone Number" : ""}</span></Col></Col>
        </Row>
        <Row lg={12} style={{ display: "flex", justifyContent: "space-around", height: "fit-content", borderColor: "blue", marginTop: "2rem" }}>
          <Col lg={6}><Col><div><label>*Enter password</label><input  onChange={(e) => { setpass(e.target.value) }} type="password" placeholder="Please Enter Password" /></div></Col><Col style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "0.2rem"
          }} ><span>{pass.length == 0 ? "Please Enter password" : regularExpression.test(pass) === false ? "Please Enter Strong Password" :""}</span></Col></Col>
          <Col lg={6}><Col><div><label>*Enter Confirm password</label><input  onChange={(e) => { setconfirm(e.target.value) }} type="password" placeholder="Please Enter Confirm Password"  /></div></Col><Col style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "0.2rem"
          }} ><span>{confirm.length == 0 ? "Please Enter confirm password" : regularExpression.test(confirm) === false ? "Please Enter Strong Password" : pass != confirm ? "password does not match":""}</span></Col></Col>
          
        </Row>
<Row  style={{ display: "flex", justifyContent: "space-around"}} > <button onClick={()=>{handle()}} >submit</button></Row>
      </div>
    </div>

  );
  
}

export default Main;