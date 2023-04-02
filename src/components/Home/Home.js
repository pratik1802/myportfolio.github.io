import React from 'react'

import './Home.css'
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { BsEmojiSunglasses } from "react-icons/bs";
// import Services from '../Services/Services';


const Home = () => {
  return (
    <>
      <div class="container d-flex justify-content my-5 hero">
        <div class="row" style={{width:"100%"}}>
          <div class="col-md-6" >
            <div className='row firstelement '>
              <h1 className='hy'>
                Hy! I am
              </h1>
              <span className='span1 fw-bold'>Pratik Bhalerao</span>
            <p class="hometext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> In finibus arcu a dictum rutrum. Curabitur placerat a velit sed sodales. 

              </p>

            </div>
            <div><button type="button" class="btn btn-warning btn1 click my-4">Contact us</button>
            </div>
            
            <div class="d-flex justify-content-start icons ">
            <BsInstagram />
           <FaLinkedinIn />
           <FaGithub /></div>
 
          </div>


          <div class="col-md-6 i-right" >
           
              <img  className='one img-fluid'  src='../images/vector1.png'  />
              <img className='two img-fluid' src='../images/vector2.png'  />
              <img className='three img-fluid' src='../images/boy.png'  />
               <div className=' bar1'>
                <div className=''>
                  <FaRegThumbsUp className='thumb '/>
                </div>
                <div className=' hometext2'>
                  Web Developer
                </div>
              </div>

              <div className='row bar2'>
                <div className='col-md '>
                  <GiQueenCrown className='crown mx-3'/>
                </div>
                <div className='col-md hometext2'>
                  Web Developer
                </div>
              </div> 
          </div>

        </div>
      </div>
{/* <Services/> */}
      
    </>
  )
}

export default Home