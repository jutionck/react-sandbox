import React from "react";

export default function NewsLetter() {
  return (
    <section className="bg-primary text-light p-5" id="newsletter">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <h3 className="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>

          <div className="input-group news-input">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
            />
            <button type="button" className="btn btn-dark">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
