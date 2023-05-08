import React from "react";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
      <div className="container">
        <a href="#" className="navbar-brand">
          Sinar Makmur
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#learn" className="nav-link">
                Tentang Kami
              </a>
            </li>
            <li className="nav-item">
              <a href="#questions" className="nav-link">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a href="#instructors" className="nav-link">
                Beli Mobil
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="btn btn-primary btn-light login"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            LOGIN
          </button>
        </div>
      </div>
    </nav>
  );
}
