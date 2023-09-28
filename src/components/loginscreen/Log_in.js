import React, {useEffect, useState } from 'react'
import './login.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import {Form} from "react-bootstrap";
import axios from "axios";
import Loading from '../Loading';
import Errormsg from '../Errormsg';
import { Link } from 'react-router-dom';


 

const Log_in =() => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState(false)
const [loading, setLoading] = useState(false);




   const submitHandler = async(e) =>{
    e.preventDefault()
    try {
      
      const config ={
        headers :{
          "Content-Type":"application/json"
        }
      }
      setLoading(true);

      const { data } =await axios.post("/api/users/login",{"email":email,"password":password},config);
      console.log(data);
      localStorage.setItem("userInfo",JSON.stringify(data));
setLoading(false);      
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);  
    }

  };
    return (
      
      <MDBContainer fluid>
        {error && <Errormsg variant='danger'>{error}</Errormsg>}
        {loading && <Loading/>}
        <Form onSubmit={submitHandler}>
        
      <MDBRow >

        <MDBCol sm='6'>

         

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4' >

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
            <MDBInput wrapperClass='mb-4  mx-3 w-100' placeholder='Email address'
             id='formControlLg1' type='email' value={email} size="lg"
             onChange={(e)=> setEmail(e.target.value)}/>

            <MDBInput wrapperClass='mb-4  mx-3 w-100' placeholder='Password' 
            id='formControlLg' type='password'value={password} size="lg" 
            onChange={(e)=> setPassword(e.target.value)}/>

            <MDBBtn className="mb-1 px-5 mx-3 w-80" color='info' size='lg' >Login</MDBBtn>
         
            <MDBBtn className="mb-1 px-5 mx-3 w-80" color='info' size='lg'>admin</MDBBtn>
            {/* <p className="small mb-5 pb-lg-3 ms-5"><Link className="text-muted" to={"#"}>Forgot password?</Link></p> */}
            <p className='ms-5'>Don't have an account? <Link to={"/Register"} className="link-info">Register here</Link></p>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img2.webp"
            alt="Login " className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>
      </Form>
   

    </MDBContainer>
      )
  
};

export default Log_in;