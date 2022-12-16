import "./Navbar.scss";
import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../../containers/FiltersList/FiltersList";

const Navbar = ({ handleChange, handleInput, searchTerm }) => {
  return (
    <div className="navigation-bar">
      <SearchBox
        lable="Search Beer"
        searchTerm={searchTerm}
        handleInput={handleInput}
      />
      <FiltersList handleChange={handleChange} />
    </div>
  );
};

export default Navbar;
