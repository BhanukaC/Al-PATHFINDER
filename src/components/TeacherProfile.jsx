import React, { useState, useEffect } from "react";
import icon from "../assets/pdf-icon.png";
import "./TeacherProfile.css";
import firebase, { auth } from "../firebase";
import "firebase/firestore";

export default function TeacherProfile({ match }) {
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  });

  async function getData() {
    const db = firebase.firestore();
    await db
      .collection("teacher")
      .doc(match.params.id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setData(doc.data());
        } else {
          console.log("not found");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  return (
    <div className="container emp-profile">
      <form>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img src={data.img} alt="teacher-pic" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h1>{data.name}</h1>

              <br />
              <br />
              <hr />
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <h3>INSTITUTES</h3>
              <br />
              <p>{data.institute}</p>
              <br />
            </div>
          </div>
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{data.name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{data.email}</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label>Subject</label>
                  </div>
                  <div className="col-md-6">
                    <p>{data.subject}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>City</label>
                  </div>
                  <div className="col-md-6">
                    <p>{data.city}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="content">
          <div className="video">
            <h3>Lesson</h3>
            <br />
            <iframe
              width="300"
              height="180"
              src={data.youtube}
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video">
            <h3>Tute 01</h3>
            <br />
            <a target="_new" href={data.tute} download>
              <img src={icon} type="application/pdf" />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
