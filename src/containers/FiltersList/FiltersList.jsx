import React from "react";
import FilterItem from "../FilterItem/FilterItem";

const FiltersList = (props) => {
  const {
    filterAbv,
    filterClassic,
    filterLowPh,
    setfilterAbv,
    setfilterClassic,
    setfilterLowPh,
  } = props;

  const handleChangeAbv = () => {
    setfilterAbv(!filterAbv);
  };

  const handleChangeClassic = () => {
    setfilterClassic(!filterClassic);
  };

  const handleChangeLowPh = () => {
    setfilterLowPh(!filterLowPh);
  };

  return (
    <div className="filter">
      <FilterItem handleChange={handleChangeAbv} name="High ABV (> 6.0%)" />
      <FilterItem handleChange={handleChangeClassic} name="Classic Range" />
      <FilterItem handleChange={handleChangeLowPh} name="Acidic (ph < 4)" />
    </div>
  );
};

export default FiltersList;
