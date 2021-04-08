import React from "react";
import { Link } from "react-router-dom";
export default function CustomContainer(props) {
  return (
    <div className="container">
      <br />
      <Link to={`/search-teacher/${props.email}`}>
        <div className="row my-container">
          <div className="col-md-4 text-center pt-1">
            <img
              className="img-fluid img-thumbnail"
              src={props.img}
              height="200"
              width="200"
            />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div>
                <b>NAME</b>
              </div>
              <input
                className="form-control"
                type="text"
                placeholder="Read only input here..."
                aria-label="name"
                value={props.name}
                disabled
              />
            </div>
            <div className="row">
              <div>
                <b>CITY</b>
              </div>
              <input
                className="form-control"
                type="text"
                placeholder="Read only input here..."
                aria-label="city"
                value={props.city}
                disabled
              />
            </div>
            <div className="row">
              <div>
                <b>SUBJECT</b>
              </div>
              <input
                className="form-control"
                type="text"
                placeholder="Read only input here..."
                aria-label="subject"
                value={props.subject}
                disabled
              />
            </div>
          </div>
        </div>
      </Link>
      <br />
    </div>
  );
}
