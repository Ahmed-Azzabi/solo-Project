import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  FormControl,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainView from "./components/MainView";

function App() {
  const [aniList, SetAniList] = useState([]);
  const [popularAnime, SetPopularAnime] = useState([]);
  const [search, SetSearch] = useState("");

  const getPopularAnime = async () => {
    const arr = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());

    SetPopularAnime(arr.top.slice(0, 5));
  };

  const searchHandler = (e) => {
    e.preventDefault();

    console.log(search);
    FetchAni(search);
  };

  const FetchAni = async (query) => {
    const here = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());
    SetAniList(here.results);
  };

  useEffect(() => {
    getPopularAnime();
  }, []);

  return (
    <div className="App">
      {" "}
      <Header />{" "}
      <div className="content-wrap">
        <Sidebar popularAnime={popularAnime} />{" "}
        <MainView
          searchHandler={searchHandler}
          search={search}
          aniList={aniList}
          SetSearch={SetSearch}
          FetchAni={FetchAni}
        />
      </div>
    </div>
  );
}

export default App;
