import React from 'react';
import './App.css';
import { Row, Col } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './Home/form';

import Art from './Home/Article';

function App() {
  return (

    <div className='body1'>

      <div className='pageHeader' style={{ display: "flex", justifyContent: "space-around", alignItems: "center", background: "rgb(64,64,64)" }}>


        <h1 style={{ color: "#fff" }}>HOME GENIE</h1>
        <b><p style={{color:"#fff"}}>About</p></b>
        <b><p style={{color:"#fff"}}>Contant</p></b>
        <b><p style={{color:"#fff"}}>Login</p></b>
      </div>
      <div className="mainNav" style={{display:"flex",justifyContent:"start",flexDirection:"column"}}>
        <Row lg={12}><h3 style={{color:"#fff",marginLeft:"4rem"}}>HOME</h3></Row>

        <img src='http://www.clipartbest.com/cliparts/yik/g7d/yikg7d5eT.png' alt='image' width={"80px"} style={{marginLeft:"3rem",marginTop:"3rem"}}/>
        <b><p style={{marginLeft:"1rem",marginTop:"24rem"}}> Already Have An Account</p></b>
        <button style={{width:"60%",height:"2rem",borderColor:"blue",marginLeft:"2rem",marginTop:"2rem",borderRadius:"2rem"}} >Login</button>
      </div>
      <div className="mainArticle">
        <Router>
          <Switch>
            <Route path="/home">
              <Main/>
              </Route>
            <Route path="/details">
              <Art/>
              </Route>



</Switch>
</Router>
      </div>



    </div>
  );
}

export default App;