import React from 'react'
import './articles.css'
import Medic from "../static/image21.png";
import Spa from "../static/image3.png";
import Exp from "../static/image2.png";
import Element from "../static/element.png";
import Vee2 from "../static/Vector6.png"

function Articles() {
    return (
      <div>
        <h2 className='text-center'>Check out our latest articles</h2>
        <div className='border-4 mx-auto'></div>
        <br />
        <br />
        <br />
        <br />
        <div className='container'>
          <div className='card-deck  mt-5'>
            <div className='card border-0 tile'>
              <img src={Medic} className='' alt='...' />
              <div className='card-body mx-4'>
                <h5 className='card-title'>
                  <b>
                    Disease detection, check <br /> up in the laboratory
                  </b>
                </h5>
                <p className='card-text mb-4'>
                  In this case, the role of the health laboratory is very
                  important to do a disease detection...
                </p>
                <a className='' href='#'>
                  Read more
                  <span className='ml-3'>
                    <svg
                      width='1em'
                      height='1em'
                      viewBox='0 0 16 16'
                      className='bi bi-arrow-right'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z'
                      />
                      <path
                        fill-rule='evenodd'
                        d='M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z'
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className='card border-0 tile'>
              <img src={Exp} className='' alt='...' />
              <div className='card-body mx-4'>
                <h5 className='card-title'>
                  <b>
                    {" "}
                    Herbal medicines that are <br />
                    safe for consumption
                  </b>
                </h5>
                <p className='card-text mb-4'>
                  Herbal medicine is very widely used at this time because of
                  its very good for your health...
                </p>
                <a className='' href='#'>
                  Read more
                  <span className='ml-3'>
                    <svg
                      width='1em'
                      height='1em'
                      viewBox='0 0 16 16'
                      className='bi bi-arrow-right'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z'
                      />
                      <path
                        fill-rule='evenodd'
                        d='M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z'
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className='card border-0 tile'>
              <img src={Spa} className='' alt='...' />
              <div className='card-body mx-4'>
                <h5 className='card-title'>
                  <b>
                    Natural care for healthy <br />
                    facial skin
                  </b>
                </h5>
                <p className='card-text mb-4'>
                  A healthy lifestyle should start from now and also for your
                  skin health. There are some...
                </p>
                <a className='' href='#'>
                  Read more
                  <span className='ml-3'>
                    <svg
                      width='1em'
                      height='1em'
                      viewBox='0 0 16 16'
                      className='bi bi-arrow-right'
                      fill='currentColor'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z'
                      />
                      <path
                        fill-rule='evenodd'
                        d='M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z'
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <img src={Vee2} className='vee-two'width='450'/>
          </div>
        </div>
        <a href='#'>
          <button className='btn btn-outline-primary  consult3 text-center mx-auto'>
           <b>View all</b>
          </button>
          </a>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
         <img src={Element} alt='' className='element'/>
      </div>
    );
}


export default Articles