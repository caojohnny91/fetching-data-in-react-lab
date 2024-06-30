const BASE_URL = "https://swapi.dev/api/starships/";

const fetchAllStarships = async () => {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching starships:", error);
    throw error;
  }
};

const starshipSearch = async (starshipNum) => {
  try {
    const queryString = `${starshipNum}`;
    const res = await fetch(BASE_URL + queryString);
    const data = await res.json();
    console.log("Data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching starship:", error);
    throw error;
  }
};

export { fetchAllStarships, starshipSearch };
