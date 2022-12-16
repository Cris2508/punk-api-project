import "./SearchBox.scss";

const SearchBox = (props) => {
  const { label, searchTerm, handleInput } = props;

  return (
    <form className="search-box">
      <label htmlFor={label} className="search-box__label"></label>

      <input
        type="text"
        name={label}
        value={searchTerm}
        onInput={handleInput}
        className="search-box__input"
      />
      <p className="searchForBeer">Search Our Bears</p>
    </form>
  );
};

export default SearchBox;
