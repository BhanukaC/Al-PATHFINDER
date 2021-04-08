import React, { useRef, useState, useEffect } from "react";
import { Form, Card, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import firebase, { auth } from "../firebase";
import app from "../firebase";

import "firebase/firestore";
import TextDisplay from "./Textdisplay";

export default function Dashboard() {
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const [img, setImg] = useState("");
  const [tute, setTute] = useState("");
  const nameref = useRef();
  const nicref = useRef();
  const cityref = useRef();
  const subjectref = useRef();
  const youtuberef = useRef();
  const institute = useRef();

  useEffect(() => {
    getData("student", localStorage.getItem("email"));
    getData("teacher", localStorage.getItem("email"));
  }, []);

  async function getData(role, email) {
    const db = firebase.firestore();
    await db
      .collection(localStorage.getItem("role"))
      .doc(localStorage.getItem("email"))
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

  async function updateData() {
    const db = firebase.firestore();
    if (img.localeCompare("") === 0 && tute.localeCompare("") === 0) {
      await db
        .collection(localStorage.getItem("role"))
        .doc(localStorage.getItem("email"))
        .update({
          city: cityref.current.value,
          img: data.img,
          institute: institute.current.value,
          name: nameref.current.value,
          nic: nicref.current.value,
          subject: subjectref.current.value,
          tute: data.tute,
          youtube: youtuberef.current.value
        });
    } else if (tute.localeCompare("") === 0) {
      await db
        .collection(localStorage.getItem("role"))
        .doc(localStorage.getItem("email"))
        .update({
          city: cityref.current.value,
          img: img,
          institute: institute.current.value,
          name: nameref.current.value,
          nic: nicref.current.value,
          subject: subjectref.current.value,
          tute: data.tute,
          youtube: youtuberef.current.value
        });
    } else if (img.localeCompare("") === 0) {
      await db
        .collection(localStorage.getItem("role"))
        .doc(localStorage.getItem("email"))
        .update({
          city: cityref.current.value,
          img: data.img,
          institute: institute.current.value,
          name: nameref.current.value,
          nic: nicref.current.value,
          subject: subjectref.current.value,
          tute: data.tute,
          youtube: youtuberef.current.value
        });
    } else {
      await db
        .collection(localStorage.getItem("role"))
        .doc(localStorage.getItem("email"))
        .update({
          city: cityref.current.value,
          img: img,
          institute: institute.current.value,
          name: nameref.current.value,
          nic: nicref.current.value,
          subject: subjectref.current.value,
          tute: tute,
          youtube: youtuberef.current.value
        });
    }
  }
  function update(e) {
    e.preventDefault();
    updateData();
    history.push("/dashboard");
  }

  const imgUp = (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("file uploaded");
      setImg(
        "https://firebasestorage.googleapis.com/v0/b/al-pathfinder.appspot.com/o/" +
          file.name +
          "?alt=media&token=f67535c1-ec47-4750-bf87-c46595ce7b68"
      );
      console.log(img);
    });
  };

  const tuteUp = (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("file uploaded");
      setTute(
        "https://firebasestorage.googleapis.com/v0/b/al-pathfinder.appspot.com/o/" +
          file.name +
          "?alt=media&token=f67535c1-ec47-4750-bf87-c46595ce7b68"
      );
      console.log(tute);
    });
  };

  return (
    <>
      <br />
      <Container
        className=" d-flex justify-content-center align-items-center justify-content-center"
        style={{ minHeight: "80vh" }}
      >
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4"> Update Details </h2>{" "}
            {error && <Alert variant="danger"> {error} </Alert>}{" "}
            <Form onSubmit={update}>
              <Form.Group id="image">
                <Form.Label>Profile Image</Form.Label>
                <Form.Control
                  type="file"
                  defaultValue={data.img}
                  onChange={imgUp}
                />
              </Form.Group>
              <br />
              <Form.Group id="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={data.name}
                  ref={nameref}
                />
              </Form.Group>
              <Form.Group id="NIC">
                <Form.Label>NIC</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={data.nic}
                  ref={nicref}
                />
              </Form.Group>
              <Form.Group id="City">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={data.city}
                  ref={cityref}
                />
              </Form.Group>
              <Form.Group id="Subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={data.subject}
                  ref={subjectref}
                />
              </Form.Group>
              <Form.Group id="video">
                <Form.Label>Youtube Video Link</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={data.youtube}
                  ref={youtuberef}
                />
              </Form.Group>
              <Form.Group id="tute">
                <Form.Label>Tute</Form.Label>
                <Form.Control
                  type="file"
                  defaultValue={data.tute}
                  onChange={tuteUp}
                />
              </Form.Group>
              <Form.Group id="Institutes">
                <Form.Label>Institutes</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={data.institute}
                  ref={institute}
                />
              </Form.Group>

              <Button className="w-100" type="submit">
                Update Details
              </Button>
            </Form>
            <br />
            <Link to="/dashboard" className="btn btn-primary w-100 mt-3">
              Cancel{" "}
            </Link>{" "}
          </Card.Body>{" "}
        </Card>{" "}
      </Container>
      <br /> <br />
    </>
  );
}
