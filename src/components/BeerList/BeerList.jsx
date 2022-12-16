import "./BeerList.scss";
import Beer from "../Beer/Beer";

const BeerList = ({ beersArr, searchTerm }) => {
  const filtredBeerList = beersArr.filter((beer) => {
    const lowerCaseName = beer.name.toLowerCase();

    return lowerCaseName.includes(searchTerm);
  });

  const allBeersJsx = filtredBeerList.map(
    ({ id, name, image_url, tagline }) => {
      return <Beer key={id} name={name} image={image_url} tagline={tagline} />;
    }
  );
  return (
    <div className="beer-container">
      <h1>All Our Beers</h1>
      <div className="beer-list">{allBeersJsx}</div>
    </div>
  );
};

export default BeerList;
