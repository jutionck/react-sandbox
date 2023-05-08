import React from "react";
import "./style.css";

export default function Product() {
  return (
    <section id="course" className="p-5">
      <div className="container">
        <h2 className="text-center">Our Courses</h2>
        <p className="lead text-center mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          facere illo voluptatum at quibusdam ut quia sint voluptatibus soluta
          id excepturi iusto fuga minima, officiis, dignissimos delectus sunt
          pariatur placeat.
        </p>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                src="assets/images/course-js.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6>Mandiri iLearn</h6>
                <h5 className="card-title">JavaScript is Fun</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex justify-content-between mt-5">
                  <h6>Intermediate</h6>
                  <a href="#" className="btn btn-outline-dark">
                    Go somewhere <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                src="assets/images/course-angular.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6>Mandiri iLearn</h6>
                <h5 className="card-title">Angular is Fun</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex justify-content-between mt-5">
                  <h6>Intermediate</h6>
                  <a href="#" className="btn btn-outline-dark">
                    Go somewhere <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card">
              <img
                src="assets/images/course-ionic.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6>Mandiri iLearn</h6>
                <h5 className="card-title">Ionic is Fun</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex justify-content-between mt-5">
                  <h6>Intermediate</h6>
                  <a href="#" className="btn btn-outline-dark">
                    Go somewhere <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g4">
          <div className="d-flex justify-content-center btn-showmore">
            <button className="btn btn-outline-dark" routerLink="/courses">
              Show More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
