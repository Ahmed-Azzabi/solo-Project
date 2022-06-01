import React from "react";

function Sidebar({ popularAnime }) {
  return (
    <div>
      <aside>
        <nav>
          <h3>Popular Anime</h3>
          {popularAnime.map((anime) => (
            <a
              href={anime.url}
              target="_blank"
              rel="noreferrer"
              key={anime.mal_id}
            >
              {anime.title}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;
