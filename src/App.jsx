// src/App.jsx
import { useEffect, useState } from "react";
import "./App.css";
import * as starshipService from "./services/starshipService";
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";

function App() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await starshipService.fetchAllStarships();
        setStarships(data);
      } catch (error) {
        console.error("Error fetching starships on load:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchStarshipData = async (starship) => {
    setLoading(true);
    try {
      const data = await starshipService.starshipSearch(starship);
      const newStarshipState = {
        class: data.starship_class,
        manufacturer: data.manufacturer,
        model: data.model,
      };
      setStarships([newStarshipState]);
    } catch (error) {
      console.error("Error fetching starship:", error);
    } finally {
      setLoading(false);
    }
  };

  console.log("State:", starships);

  return (
    <>
      <h1>Star Wars API</h1>
      <StarshipSearch fetchData={fetchStarshipData} />
      {loading ? <p>Loading...</p> : <StarshipList starships={starships} />}
    </>
  );
}

export default App;
