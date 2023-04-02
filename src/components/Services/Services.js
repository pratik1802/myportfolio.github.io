import React from "react";
import "./Services.css";
// import heartemoji from "../public/Images/heartemoji.png"
import { BsEmojiHeartEyes } from "react-icons/bs";

const Services = () => {
  return (
    <>
      <div className="container first-container">
        <div className="row services">
          <div className="col-md-5 awesome">
            {/* left side */}
            <span> My AWESOME </span>
            {/* <br /> */}
            <span> SERVICES </span>
            {/* <br /> */}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
              Impedit cum veniam facilis soluta
            </span>
            {/* <br /> <br /> */}
            <button type="button" className="btn btn-warning secondcomp">
              Download CV
            </button>
          </div>
          <div className="col-md-7 cards">
            <div class="card  card1" style={{ width: "18rem" }}>
              <div className="card-body text-center">
                <BsEmojiHeartEyes className="icon1" />
                <h5 className="card-title text-center mb-4">Developer</h5>
                <p> HTML,CSS,JAVASCRIPT,BOOTSTAP</p>
                <p> React,NODEJS,EXPRESSJS</p>
                <button
                  type="button"
                  className="btn btn-outline-primary cardbtn"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* card 2 starts here  */}
            <div class="card  card2" style={{ width: "18rem" }}>
              <div className="card-body text-center">
                <BsEmojiHeartEyes className="icon2" />
                <h5 className="card-title text-center mb-4">Developer</h5>
                <p> HTML,CSS,JAVASCRIPT,BOOTSTAP</p>
                <p> React,NODEJS,EXPRESSJS</p>
                <button
                  type="button"
                  className="btn btn-outline-primary cardbtn"
                >
                  Learn More
                </button>
              </div>
            </div>

{/* card2 ends here */}

{/* card 3 starts here */}
<div class="card  card3" style={{ width: "18rem" }}>
              <div className="card-body text-center">
                <BsEmojiHeartEyes className="icon3" />
                <h5 className="card-title text-center mb-4">Developer</h5>
                <p> HTML,CSS,JAVASCRIPT,BOOTSTAP</p>
                <p> React,NODEJS,EXPRESSJS</p>
                <button
                  type="button"
                  className="btn btn-outline-primary cardbtn"
                >
                  Learn More
                </button>
              </div>
            </div>





          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
