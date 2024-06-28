import { useEffect, useState } from "react";
import "./App.css";
import * as starshipService from "./services/starshipService";
// import StarshipSearch from "./components/StarshipSearch";
// import StarshipList from "./components/StarshipList";

function App() {

  const [starships, setStarships] = useState([]);

  const fetchData = async () =>{
    const data = await starshipService.starshipSearch(12)
    console.log("Data:", data);
  }

  // useEffect(() => {

  // }, []);

  return (
    <>
      <h1>Star Wars API</h1>
      <button onClick={fetchData}>Fetch Starship Data</button>
    </>
  );
}

export default App;
