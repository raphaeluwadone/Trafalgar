import React from 'react'
import './footer.css'
import FootLogo from "../static/logo.png"

function Footer() {
    return (
      <React.Fragment>
        <div className='container-fluid drop py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-5 d-flex align-items-center'>
                <div>
                  <div className="d-flex align-items-end">
                    <div className='circle align-self-start'>T</div>
                    <h4 className="pl-2 align-self-end text-light">Trafalgar</h4>
                  </div>
                  <p className='text-white'>
                    Trafalgar provides progressive, and affordable
                    <br /> healthcare, accessible on mobile and
                    <br /> online for everyone
                  </p>
                </div>
              </div>
              <div className='col-md-2 ml-auto'>
                <h5 className='text-white pb-3 '>
                  <b>Company</b>
                </h5>
                <li>About</li>
                <li>Testimonials</li>
                <li>Find a doctor</li>
                <li> Apps</li>
              </div>
              <div className='col-md-2'>
                <h5 className='text-white pb-3'>
                  <b>Region</b>
                </h5>
                <li>Indonesia</li>
                <li>Singapore</li>
                <li> Hongkong</li>
                <li>Canada</li>
              </div>
              <div calssName='col-md-2'>
                <h5 className='text-white pb-3'>
                  <b>Help</b>
                </h5>
                <li>Help center</li>
                <li>Contact support</li>
                <li>Instructions</li>
                <li>How it works</li>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}


export default Footer