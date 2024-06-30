import { useEffect, useState } from "react";
import "./App.css";
import * as starshipService from "./services/starshipService";
import StarshipSearch from "./components/StarshipSearch";
// import StarshipList from "./components/StarshipList";

function App() {
  const [starships, setStarships] = useState([]);

  const fetchData = async (starship) => {
    const data = await starshipService.starshipSearch(starship);
    const newStarshipState = {
      class: data.starship_class,
      manufacturer: data.manufacturer,
      model: data.model,
    };
    setStarships(newStarshipState);
  };

  console.log("State:", starships);

  // useEffect(() => {

  // }, []);

  return (
    <>
      <h1>Star Wars API</h1>
      <StarshipSearch fetchData={fetchData} />
    </>
  );
}

export default App;
