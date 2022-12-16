import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import BeerList from "../../components/BeerList/BeerList";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [filterAbv, setFilterAbv] = useState(false);
  const [filterClassic, setFilterClassic] = useState(false);
  const [filterLowPh, setFilterLowPh] = useState(false);

  const getBeers = async (filterAbv, filterClassic, filterLowPh) => {
    let beersArr = [];
    for (let i = 1; i < 6; i++) {
      let url = `https://api.punkapi.com/v2/beers?page=${i}&per_page=80&`;
      if (filterAbv) {
        url += `abv_gt=6&`;
      }
      if (filterClassic) {
        url += `brewed_before=01-2005&`;
      }
      if (filterLowPh) {
        beers = beers.filter((beer) => beer.ph < 4 && beer.ph != null);
      }
      const response = await fetch(url);
      const data = await response.json();
      beersArr = beersArr.concat(data);
    }
    setBeers(beersArr);
  };

  const handleInput = (event) => {
    const userInput = event.target.value.toLowerCase();
    setSearchTerm(userInput);
  };

  useEffect(() => {
    getBeers(filterAbv, filterClassic, filterLowPh);
  }, [filterAbv, filterClassic, filterLowPh]);

  return (
    <div className="home">
      <div className="nav">
        <Navbar
          handleInput={handleInput}
          searchTerm={searchTerm}
          filterAbv={filterAbv}
          setFilterAbv={setFilterAbv}
          filterClassic={filterClassic}
          setFilterClassic={setFilterClassic}
          filterLowPh={filterLowPh}
          setFilterLowPh={setFilterLowPh}
        />
      </div>
      {beers && <BeerList beersArr={beers} searchTerm={searchTerm} />}
    </div>
  );
};

export default Home;
