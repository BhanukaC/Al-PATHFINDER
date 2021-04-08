import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import icon2 from "./../assets/icon2.png";
import student from "./../assets/student.png";
import teacher from "./../assets/teacher.png";
import img1 from "./../assets/img1.png";
import img2 from "./../assets/img2.png";
import img3 from "./../assets/img3.png";
import img4 from "./../assets/img4.png";
import img5 from "./../assets/img5.png";
import img6 from "./../assets/img6.png";

function Home() {
  return (
    <div>
      <div className="container main-container">
        <div className="row">
          <div className="col-md-6">
            <img className="img-fluid" src={icon2} />
          </div>
          <div className="col-md-6">
            <h1 className="display-3 my-header">Where EDUCATION happens</h1>
            <div className="my-page-header mt-6">
              <h2 className="page-header">
                <small>
                  Are you a <b>STUDENT</b> or a{" "}
                  <b>TEACHER? You have come to the right place</b>
                </small>
                ?
              </h2>
              <div className="row">
                <div className="col-md-3 mx-3 mt-3 text-center">
                  <Link to="/signup">
                    <img
                      className="img-fluid  my-box"
                      src={student}
                      alt="student"
                      height="100"
                      width="100"
                    />
                  </Link>
                  <p>
                    <b> I'm a student</b>
                  </p>
                </div>
                <div className="col-md-3 mx-3 mt-3 text-center">
                  <Link to="/signup">
                    <img
                      className="img-fluid  my-box"
                      src={teacher}
                      alt="student"
                      height="100"
                      width="100"
                    />
                  </Link>
                  <p>
                    <b>I'm a teacher</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <p className="text-center">
            <b>OUR PARTNERS</b>
          </p>
        </div>
        <div className="row bt">
          <div className="col-md-2 text-center">
            <img
              className="img-fluid"
              src={img1}
              alt="partners"
              width="100px"
              height="100px"
            />
          </div>
          <div className="col-md-2 text-center">
            <img
              class="img-fluid"
              src={img2}
              alt="partners"
              width="100px"
              height="100px"
            />
          </div>
          <div class="col-md-2 text-center">
            <img
              className="img-fluid"
              src={img3}
              alt="partners"
              width="100px"
              height="100px"
            />
          </div>
          <div class="col-md-2 text-center">
            <img
              className="img-fluid"
              src={img4}
              alt="partners"
              width="100px"
              height="100px"
            />
          </div>
          <div className="col-md-2 text-center">
            <img
              class="img-fluid"
              src={img5}
              alt="partners"
              width="100px"
              height="100px"
            />
          </div>
          <div className="col-md-2 text-center">
            <img
              class="img-fluid"
              src={img6}
              alt="partners"
              width="100px"
              height="100px"
            />
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Home;
