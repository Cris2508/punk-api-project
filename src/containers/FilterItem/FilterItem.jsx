import React from "react";
import "./FilterItem.scss";

const FilterItem = (props) => {
  const { name, handleChange } = props;

  return (
    <div className="filter-item">
      <p>{name}</p>
      <input id={name} type="checkbox" onChange={handleChange} />
    </div>
  );
};

export default FilterItem;
