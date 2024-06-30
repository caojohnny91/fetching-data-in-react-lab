const StarshipCard = (props) => {
  console.log("StarshipCard props:, props");

  return (
    <>
      <h2>Starship Card Details</h2>
      <p>Class: {props.starships.class}</p>
      <p>Manufacturer: {props.starships.manufacturer}</p>
      <p>Model: {props.starships.model}</p>
    </>
  );
};

export default StarshipCard;
