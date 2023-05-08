import React from "react";
import "./style.css";

export default class Contact extends React.Component {
  render() {
    return (
      <section className="p-5" id="contact">
        <div className="container">
          <div className="row g-4">
            <div className="col col-lg-6 col-md-12 col-sm-12">
              <h2 className="text-center mb-4">Contact Info</h2>
              <ul className="list-group list-group-flush lead">
                <li className="list-group-item">
                  <span className="fw-bold">Main Location:</span> 50 Main st
                  Boston MA
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Enrollment Phone:</span> (555)
                  555-5555
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Student Phone:</span> (333) 333-3333
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Enrollment Email:</span> (555)
                  enroll@frontendbc.test
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Student Email:</span>
                  student@frontendbc.test
                </li>
              </ul>
            </div>
            <div className="col col-lg-6 col-md-12 col-sm-12">
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.802510358887!2d106.77120621494714!3d-6.157199095542137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f73d5da126c5%3A0x7981e1ea6b055340!2sMandiri%20University%20Daan%20Mogot!5e0!3m2!1sen!2sid!4v1668579865012!5m2!1sen!2sid"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
