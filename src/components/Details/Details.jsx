import "./Details.css";

function Details({ selectedEpisode }) {
  if (!selectedEpisode) {
    return (
      <section className="details">
        <p>Select an episode to view details.</p>
      </section>
    );
  }
  return (
    <section className="details">
      <h2>Episode {selectedEpisode?.id}</h2>
      <h3>{selectedEpisode?.title}</h3>
      <p>{selectedEpisode?.description}</p>
      <button>Watch Now</button>
    </section>
  );
}

export default Details;
