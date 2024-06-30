import StarshipCard from "./StarshipCard";

const StarshipList = (props) => {
  return (
    <>
      <h2>Starships</h2>
      <p>Number of results: {props.starships.length}</p>
      {props.starships.map((starship, index) => (
        <StarshipCard key={index} starship={starship} />
      ))}
    </>
  );
};

export default StarshipList;
