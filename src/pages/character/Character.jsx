const Character = ({ id }) => {
  return (
    <div className="Character-inner">
      <article className="Character-card">
        <img src="image" alt="name" />
        <h2>Name {id}</h2>
      </article>
      <article className="Character-card">
        <h3>Episodes:</h3>
        <h3>Status:</h3>
        <h3>Species:</h3>
        <h3>Gender:</h3>
        <h3>Origin:</h3>
        <h3>Last location:</h3>
      </article>
    </div>
  );
};

export default Character;
