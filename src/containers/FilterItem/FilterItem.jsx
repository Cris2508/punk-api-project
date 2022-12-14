import React from "react";
import "./FilterItem.scss";

const FilterItem = (props) => {
  const { name } = props;
  return (
    <div className="filter-item">
      <p>{name}</p>
      <input type="checkbox" />
    </div>
  );
};

export default FilterItem;
