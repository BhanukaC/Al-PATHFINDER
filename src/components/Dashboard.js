import React, { useState, useEffect } from "react";
import { Card, Button, Alert, Container } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import firebase, { auth } from "../firebase";
import "firebase/firestore";
import TextDisplay from "./Textdisplay";

export default function Dashboard() {
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  useEffect(() => {
    getData("student", localStorage.getItem("email"));
    getData("teacher", localStorage.getItem("email"));
  }, []);

  async function getData(role, email) {
    const db = firebase.firestore();
    await db
      .collection(role)
      .doc(email)
      .get()
      .then((doc) => {
        if (doc.exists) {
          localStorage.setItem("role", role);
          setData(doc.data());
        } else {
          console.log("not found");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  async function handleLogout() {
    setError("");

    try {
      await logout();
      localStorage.clear();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4"> Profile </h2>{" "}
            {error && <Alert variant="danger"> {error} </Alert>}{" "}
            {localStorage.getItem("role") === "teacher" && (
              <img
                src={data.img}
                alt="user-image"
                style={{ borderRadius: "50%", height: "70px", width: "70px" }}
              />
            )}
            <TextDisplay name="Email:" value={currentUser.email} />
            <TextDisplay name="Role:" value={localStorage.getItem("role")} />
            {localStorage.getItem("role") === "teacher" && (
              <TextDisplay name="Name:" value={data.name} />
            )}
            {localStorage.getItem("role") === "teacher" && (
              <TextDisplay name="NIC:" value={data.nic} />
            )}
            {localStorage.getItem("role") === "teacher" && (
              <TextDisplay name="City:" value={data.city} />
            )}
            {localStorage.getItem("role") === "teacher" && (
              <TextDisplay name="Subject:" value={data.subject} />
            )}
            {localStorage.getItem("role") === "teacher" && (
              <div>
                <strong>Video:</strong> <br />
                <a target="_new" href={data.youtube}>
                  Lesson 1
                </a>{" "}
                <br />
              </div>
            )}
            {localStorage.getItem("role") === "teacher" && (
              <div>
                <strong>Lesson 1 Note:</strong> <br />
                <a target="_new" href={data.tute} download>
                  Tute 1
                </a>{" "}
                <br />
              </div>
            )}
            {localStorage.getItem("role") === "teacher" && (
              <TextDisplay name="Institutes:" value={data.institute} />
            )}
            <Link to="/update-password" className="btn btn-primary w-100 mt-3">
              Update Password{" "}
            </Link>{" "}
            <br />
            {localStorage.getItem("role") === "teacher" && (
              <Link to="/update-details" className="btn btn-primary w-100 mt-3">
                Update Details{" "}
              </Link>
            )}
            {localStorage.getItem("role") === "student" && (
              <Link to="/search-teacher" className="btn btn-primary w-100 mt-3">
                Find a class{" "}
              </Link>
            )}
            <div className="w-100 text-center mt-2">
              <Button variant="link" onClick={handleLogout}>
                Log Out{" "}
              </Button>{" "}
            </div>{" "}
          </Card.Body>{" "}
        </Card>{" "}
      </Container>
    </>
  );
}
