import { useState } from "react";

const StarshipSearch = (props) => {
  const [starship, setStarship] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStarship("");
  };

  return (
    <>
      <h2>Search</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="starship">Search Term: </label>
        <input
          id="starship"
          name="starship"
          value={starship}
          onChange={(event) => setStarship(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default StarshipSearch;
