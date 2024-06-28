const STARSHIP_BASE_URL = "https://swapi.dev/api/starships/";

const StarshipSearch = async (starshipNum) => {
  try {
    const queryString = `${starshipNum}`;
    const res = await fetch(STARSHIP_BASE_URL + queryString);
    const data = await res.json();
    console.log("Data:", data);
  } catch (error) {
    console.log(error);
    console.log(
      "There was an issue with the starship api request from the search function"
    );
  }
};

export { StarshipSearch };
