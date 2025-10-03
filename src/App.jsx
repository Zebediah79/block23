import React from "react";
import { episodeList } from "./data";
import Episodes from "./components/Episodes/Episodes";
import Details from "./components/Details/Details";

export default function App() {
  const [selectedEpisode, setSelectedEpisode] = React.useState(null);
  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <Episodes
          episodeData={episodeList}
          setSelectedEpisode={setSelectedEpisode}
        />
        <Details selectedEpisode={selectedEpisode} />
      </main>
    </>
  );
}
