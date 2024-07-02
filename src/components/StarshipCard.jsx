const StarshipCard = (props) => {
  console.log("StarshipCard props:, props");

  return (
    <>
      <div className="card">
        <h2>{props.starship.name}</h2>
        <p>Class: {props.starship.starship_class}</p>
        <p>Manufacturer: {props.starship.manufacturer}</p>
        <p>Model: {props.starship.model}</p>
      </div>
    </>
  );
};

export default StarshipCard;
