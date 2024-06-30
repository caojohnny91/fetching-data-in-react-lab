const StarshipCard = (props) => {
  console.log("StarshipCard props:, props");

  return (
    <>
      <h2>Starship Card Details</h2>
      <p>Class: {props.starship.starship_class}</p>
      <p>Manufacturer: {props.starship.manufacturer}</p>
      <p>Model: {props.starship.model}</p>
    </>
  );
};

export default StarshipCard;
