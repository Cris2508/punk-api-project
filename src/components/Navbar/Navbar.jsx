import "./Navbar.scss";
import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../../containers/FiltersList/FiltersList";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const handleInput = (event) => {
    const userInput = event.target.value.toLowerCase();
    return setSearchTerm(userInput);
  };
  return (
    <div className="navigation-bar">
      <SearchBox
        lable="Search Beer"
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <FiltersList />
    </div>
  );
};

export default Navbar;
