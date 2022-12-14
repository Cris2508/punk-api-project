import "./Beer.scss";

const Beer = ({ name, image, tagline }) => {
  return (
    <div className="beer">
      <img className="beer__img" src={image} alt={name} />
      <h3 className="beer__name">{name}</h3>
      <p className="beer__tagline">{tagline}</p>
    </div>
  );
};

export default Beer;
