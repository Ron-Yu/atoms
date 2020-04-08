import React, { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import initFirebase from "./utils/initFirebase";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    initFirebase();
    uploadData();
  }, []);

  const uploadData = () => {
    const db = firebase.firestore();

    db.collection("users")
      .add({
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

    return {};
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
