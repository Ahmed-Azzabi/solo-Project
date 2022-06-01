// import {
//   Container,
//   Navbar,
//   Nav,
//   NavDropdown,
//   Button,
//   FormControl,
//   Form,
// } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainView from "./components/MainView";

function App() {
  const [aniList, SetAniList] = useState([]);
  const [popularAnime, SetPopularAnime] = useState([]);
  const [Search, SetSearch] = useState("");

  return (
    <div className="App">
      {" "}
      <Header />{" "}
      <div className="content-wrap">
        <Sidebar popularAnime={popularAnime} /> <MainView />
      </div>
    </div>
  );
}

export default App;
