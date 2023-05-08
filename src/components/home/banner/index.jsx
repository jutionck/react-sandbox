import React from "react";
import CarLogo from "../../../assets/car-home.svg";

export default function Banner() {
  return (
    <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>
              Jual Beli Mobil{" "}
              <span className="text-warning"> Sinar Makmur </span>
            </h1>
            <p className="lead my-4">Bawa pulang mobil impianmu!</p>
            <button
              className="btn btn-primary btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#enroll"
            >
              Beli Sekarang
            </button>
          </div>
          <img
            className="img-fluid w-50 d-none d-sm-block"
            width="200px"
            src={CarLogo}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
