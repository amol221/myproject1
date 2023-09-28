import axios from 'axios'
import React, { Component, useState } from 'react'
import { Form } from 'react-bootstrap'
import Errormsg from './Errormsg'
import Loading from './Loading'
import "./register.css"
const Alumni_registration =() => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [batch, setBatch] = useState("")
  const [city, setCity] = useState("")
  const [mobno, setMobno] = useState("")
  const [dob, setDob] = useState("")
  const [aadhar, setAadhar] = useState("")
  const [password, setPassword]= useState("")
  const [confirmpassword, setComfirmPassword]= useState("")
  const [message, setMessage]= useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false);

  const submitHandler = async(e)=>{
    e.preventDefault();
    if(password != confirmpassword){
      setMessage("passwords not matching");
    }
    else{
          setMessage(null)
          try {
            const config = {
              headers:{
                "Content-Type":"application/json",
              },
            };
            setLoading(true);

            const { data } =await axios.post("/api/users",{"mobno":mobno,"name":name,"city":city,
             "batch":batch,"dob":dob, "aadhar":aadhar, "email":email,"password":password},config);
            console.log(data);
            localStorage.setItem("userInfo",JSON.stringify(data));
            setLoading(false); 
            setError(false);

            
          } catch (error) {
            setError(error.response.data.message);
            setLoading(false); 
          }
    }
    console.log(email);
  }
  return (
    <>
        <section className="h-100">
            {loading && <Loading />}
            <Form onSubmit={submitHandler}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" alt="Sample" className="img-fluid" />
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black">
                                            <h3 className="mb-5 text-uppercase">Alumni registration form</h3>

                                            {/* Personal Details */}
                                            <div className="section">
                                                <h5>Personal Details</h5>
                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form3Example1m" className="form-control form-control-lg" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form3Example90" className="form-control form-control-lg" value={dob} placeholder='DOB' onChange={(e) => setDob(e.target.value)} />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form3Example97" className="form-control form-control-lg" value={email} placeholder='Email id' onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                            </div>

                                            {/* Contact Details */}
                                            <div className="section mt-3">
                                                <h5>Contact Details</h5>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <input type="text" id="form3Exampe" className="form-control" value={batch} placeholder='Batch' onChange={(e) => setBatch(e.target.value)} />
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <input type="text" id="form3Example9" className="form-control" value={city} placeholder='City' onChange={(e) => setCity(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form3Exampl9" className="form-control form-control-lg" value={mobno} placeholder='Phone' onChange={(e) => setMobno(e.target.value)} />
                                                </div>
                                            </div>

                                            {/* Other Details */}
                                            <div className="section mt-3">
                                                <h5>Other Details</h5>
                                                <div className="form-outline mb-4">
                                                    <input type="text" id="form3Example" className="form-control form-control-lg" value={aadhar} placeholder='Aadhar' onChange={(e) => setAadhar(e.target.value)} />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form3Example7" className="form-control form-control-lg" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form3Example990" className="form-control form-control-lg" value={confirmpassword} placeholder='Confirm Password' onChange={(e) => setComfirmPassword(e.target.value)} />
                                                </div>
                                            </div>

                                            {message && <Errormsg variant="danger">{message}</Errormsg>}
                                            {error && <Errormsg variant='danger'>{error}</Errormsg>}
                                            
                                            <div className="d-flex1 justify-content-end mt-3">
                                                <button type="submit" className="btn btn-warning btn-lg ms-2">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </section>
    </>
)

  }
export default Alumni_registration;