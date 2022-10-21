import React from 'react'
import'./footer.css'

const Footer = () => {
  return (
    <div className='main-footer'>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h4>this is footer</h4>
                    <ul className="list-unstyled">
                        <li>seee yaa</li>
                        <li>seee yaa</li>
                        <li>seee yaa</li>
                        <li>seee yaa</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h4>this is footer</h4>
                    <ul className="list-unstyled">
                        <li>seee yaa</li>
                        <li>seee yaa</li>
                        <li>seee yaa</li>
                        <li>seee yaa</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h4>this is footer</h4>
                    <ul className="list-unstyled">
                        <li>seee yaa</li>
                        <li>seee yaa</li>
                        <li>seee yaa</li>
                        <li>seee yaa</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h4>this is footer</h4>
                    <ul className="list-unstyled">
                        <li>seee yaa</li>
                        <li>seee yaa</li>
                        <li>seee yaa</li>
                        <li>seee yaa</li>
                    </ul>
                </div>
            </div>
            <hr className='footerline'/>
            <div className="row">
               <p className="col-sm">
                &copy;{new Date().getFullYear()} this is copyrighted website | all right reserves | privacy
               </p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer