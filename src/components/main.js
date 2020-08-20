import React from 'react'
import './main.css'
import Body from "../static/trafalgar-illustrationsec021.png";
import RightImage from "../static/trafalgar-illustrationsec031.png";
import Rounded from "../static/image1.png"

function Main() {
    return (
      <React.Fragment>
        <button className='btn btn-outline-primary consult ml-auto text-center'>
          <b>Learn More</b>
        </button>

        <div className='row mb-5'>
          <div className='col-md-6 ml-5'>
            <img src={Body} alt='' className='ml-5' width='600' />
          </div>
          <div className='col-md-5 mt-5 text-left'>
            <h2>
              <b>
                Leading healthcare <br />
                Providers
              </b>
            </h2>
            <div className='border-2'></div>
            <p>
              Trafalgar provides progressive, and affordable
              <br /> healthcare, accessible on mobile and online for
              <br /> everyone. To us, it’s not just work. We take pride <br />
              in the solutions we deliver
            </p>
            <button className='btn btn-outline-primary consult2 ml-auto text-center '>
              <b>Learn More</b>
            </button>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className='container'>
          <div className='row mt-5'>
            <div className='col-md-5 mt-5 text-left ml-5 main-2'>
              <h2 className='mt-5'>
                <b>
                  Download our <br />
                  mobile app
                </b>
              </h2>
              <div className='border-2'></div>
              <p>
                Our dedicated patient engagement app and
                <br />
                web portal allow you to access information
                <br />
                instantaneously (no tedeous form, long calls, <br />
                or administrative hassle) and securely
              </p>
              <button className='btn btn-outline-primary consult2 text-center '>
                <b>
                  Download
                  <span className='pl-3 pr-0'>
                    <svg
                      width='1em'
                      height='1em'
                      viewBox='0 0 16 16'
                      className='bi bi-arrow-down'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M4.646 9.646a.5.5 0 0 1 .708 0L8 12.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z'
                      />
                      <path
                        fill-rule='evenodd'
                        d='M8 2.5a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0V3a.5.5 0 0 1 .5-.5z'
                      />
                    </svg>
                  </span>
                </b>
              </button>
            </div>
            <div className='col-md-5 ml-5'>
              <img src={RightImage} alt='' className='' width='600' />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
        <div
          id='carouselExampleInterval'
          className='carousel slide w-75 mx-auto rounded-xlg  gradient my-5 py-5'
          data-ride='carousel'
        >
          <div className='carousel-inner '>
            <h2 className='text-center pb-4 text-light'>
              What our customers are saying
            </h2>
            <div className='border-3 mx-auto'></div>
            <div className='carousel-item active' data-interval='1000'>
              <div className='row'>
                <div className='col-md-5 mx-auto d-flex justify-content-lg-center '>
                  <img
                    src={Rounded}
                    className='rounded-circle img-fluid round'
                    alt='...'
                  />
                  <div className='align-self-center pl-4 text-light'>
                    <p className='text-white'>
                      <b>Edward Newgate</b>
                    </p>
                    <p className='mt-0 text-light'>Founder circle</p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <p className='mt-0 text-light'>
                    “Our dedicated patient engagement app and
                    <br /> web portal allow you to access information <br />
                    instantaneously (no tedeous form, long calls,
                    <br /> or administrative hassle) and securely”{" "}
                  </p>
                </div>
              </div>
            </div>
            
 
          </div>
          <a
            className='carousel-control-prev'
            href='#carouselExampleInterval'
            role='button'
            data-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Previous</span>
          </a>
          <a
            className='carousel-control-next'
            href='#carouselExampleInterval'
            role='button'
            data-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='sr-only'>Next</span>
          </a>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </React.Fragment>
    );
}


export default Main