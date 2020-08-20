import React from 'react'
import './hero.css'
import heroImage from "../static/trafalgar-header illustration 1.png";
function Hero() {
    return (
      <div>
        <div className='container'>
          <div className='row my-5'>
            <div className='cols-6 '>
              <h1 className=''>
                <b>
                  Virtual healthcare
                  <br /> for you
                </b>
              </h1>
              <p>
                Trafalgar provides progressive and affordable
                <br />
                healthcare accesibile on mobile and online
                <br /> for everyone
              </p>
              <br />
              <button className='btn btn-primary btn-consult'>
                Consult Today
              </button>
            </div>
            <div className='cols-6 ml-auto'>
              <img src={heroImage} className='img-fluid ' alt='' width='500' />
            </div>
          </div>
        </div>
      </div>
    );
}

export default  Hero
