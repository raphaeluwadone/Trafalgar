import React from "react";
import Glass from "../static/Frame.png";
import Box from "../static/Frame5.png";
import Pills from "../static/Frame3.png";
import Vee from "../static/Vector.png";
import "./services.css";

function Services() {
  return (
    <div>
      <h2 className='text-center  mx-auto'>Our services</h2>
      <div className='border'></div>
      <p className='text-center container mb-5'>
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment <br /> with our highly
        qualified doctors you can consult with us which type of service is
        suitable for your health
      </p>
      <br />
      <br />
      <div className='container'>
        <div className='card-deck rounded mt-5'>
          <div className='card border-0'>
            <img src={Glass} className='  ml-5 mt-4' alt='...' width='80' />
            <div className='card-body mx-4'>
              <h5 className='card-title'>
                <b>Search doctor</b>
              </h5>
              <p className='card-text mb-4'>
                Choose your doctor from thousands of specialist, general, and
                trusted hospitals
              </p>
            </div>
          </div>
          <div className='card border-0'>
            <img src={Pills} className='  ml-5 mt-4' alt='...' width='50' />
            <div className='card-body mx-4'>
              <h5 className='card-title'>
                <b>Online Pharmacy</b>
              </h5>
              <p className='card-text mb-4'>
                Buy your medicines with our mobile application with a simple
                delivery system
              </p>
            </div>
          </div>
          <div className='card border-0'>
            <img src={Box} className=' ml-5 mt-4' alt='...' width='50' />
            <div className='card-body mx-4'>
              <h5 className='card-title'>
                <b>Consultation</b>
              </h5>
              <p className='card-text mb-4'>
                Free consultation with our trusted doctors and get the best
                recomendations
              </p>
            </div>
          </div>
        </div>
        <img src={Vee} className='vector' alt='' />

        <div className='card-deck rounded mt-5'>
          <div className='card border-0'>
            <img src={Glass} className='  ml-5 mt-4' alt='...' width='80' />
            <div className='card-body mx-4'>
              <h5 className='card-title'>
                <b>Search doctor</b>
              </h5>
              <p className='card-text mb-4'>
                Choose your doctor from thousands of specialist, general, and
                trusted hospitals
              </p>
            </div>
          </div>
          <div className='card border-0'>
            <img src={Pills} className='  ml-5 mt-4' alt='...' width='50' />
            <div className='card-body mx-4'>
              <h5 className='card-title'>
                <b>Online Pharmacy</b>
              </h5>
              <p className='card-text mb-4'>
                Buy your medicines with our mobile application with a simple
                delivery system
              </p>
            </div>
          </div>
          <div className='card border-0'>
            <img src={Box} className=' ml-5 mt-4' alt='...' width='50' />
            <div className='card-body mx-4'>
              <h5 className='card-title'>
                <b>Consultation</b>
              </h5>
              <p className='card-text mb-4'>
                Free consultation with our trusted doctors and get the best
                recomendations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
