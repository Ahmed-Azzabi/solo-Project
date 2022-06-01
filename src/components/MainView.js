import React from "react";
import AnimeCard from "./AnimeCard";

function MainView(props) {
  return (
    <main>
      <div className="main-head">
        <form className="search" onSubmit={props.searchHandler}>
          <input
            type="search"
            placeholder="Pick your poison..."
            required
            value={props.search}
            onChange={(e) => props.SetSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="anime-list">
        {props.aniList.map((anime) => (
          <div className="anime-card">
            <AnimeCard anime={anime} key={anime.mal_id} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainView;
