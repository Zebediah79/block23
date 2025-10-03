import React from "react";
import "./Episodes.css";

function Episodes({ episodeData, setSelectedEpisode }) {
  return (
    <section className="episode">
      <h2>Episodes</h2>
      <ul>
        {episodeData.map((episode) => (
          <li
            key={episode.id}
            onClick={() => {
              setSelectedEpisode(episode);
            }}
          >
            {episode.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Episodes;
