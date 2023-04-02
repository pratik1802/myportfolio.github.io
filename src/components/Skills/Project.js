import React from "react";
import "./Skill.css";

const Project = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <h1 class="text-center my-3 chek"> My projects </h1>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="./Screenshot (82).png"
              class="d-block w-100  firstimage"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="./Screenshot (83).png"
              class="d-block w-100 firstimage"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="./Screenshot (84).png"
              class="d-block w-100 firstimage"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="./Screenshot (85).png"
              class="d-block w-100 firstimage"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="./Screenshot (86).png"
              class="d-block w-100 firstimage"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Project;
