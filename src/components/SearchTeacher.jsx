import React, { useState, useEffect } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import firebase, { auth } from "../firebase";
import "firebase/firestore";
import TextDisplay from "./Textdisplay";
import CustomContainer from "./CustomContainer";

export default function SearchTeacher() {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const db = firebase.firestore();
    db.collection("teacher")
      .get()
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => doc.data());
        console.log(data);
        setData(data);
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
      {data.map((d) => {
        return (
          <CustomContainer
            key={d.email}
            name={d.name}
            city={d.city}
            subject={d.subject}
            img={d.img}
            email={d.email}
          />
        );
      })}
    </>
  );
}
