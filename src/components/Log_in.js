import React, { Component } from 'react'
import'./login.css'

export default class Log_in extends Component {
  render() {
    return (
      <div className="section">
      <div className='login'>
       <h1> log in here !</h1>
       <hr className='hr'/>
       <form>
        <div className="form-group">
          <label className='formlabel' For="email">Email adress</label>
          <input className='form-control' type="email" id='email' />
          </div>
          <div className="form-group">
          <label className='formlabel' For="password">Password</label>
          <input className='form-control' type="password" id='password' />
        </div>
        <div className="form-group">
          <input className='form-check-input'  type="checkbox" name="" id="check" />
        <label className='form-check-label' For="check">Remember me</label>
        </div>
        <button className='btn1'>Log_in</button>
       </form>

      </div>
      </div>
    )
  }
}
