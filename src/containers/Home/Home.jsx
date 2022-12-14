import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import BeerList from "../../components/BeerList/BeerList";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [beers, setBeers] = useState([]);
  const getBeers = async () => {
    const response = await fetch(
      "https://api.punkapi.com/v2/beers?page=1&per_page=80"
    );
    const data = await response.json();
    setBeers(data);
  };

  useEffect(() => {
    getBeers();
  }, []);

  return (
    <div className="home">
      <div className="nav">
        <Navbar />
      </div>
      {beers && <BeerList beersArr={beers} />}
    </div>
  );
};

export default Home;
