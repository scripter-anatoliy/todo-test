import React from "react";
import {
  FilterType,
  FILTER_ALL,
  FILTER_ACTIVE,
  FILTER_COMPLETED,
} from "../../../types";
import "./FilterButtons.scss";

interface FilterButtonsProps {
  filter: FilterType;
  onSetFilter: (filter: FilterType) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  filter,
  onSetFilter,
}) => {
  return (
    <div className="filters-container">
      <button
        className={filter === FILTER_ALL ? "selected" : ""}
        onClick={() => onSetFilter(FILTER_ALL)}
      >
        All
      </button>
      <button
        className={filter === FILTER_ACTIVE ? "selected" : ""}
        onClick={() => onSetFilter(FILTER_ACTIVE)}
      >
        Active
      </button>
      <button
        className={filter === FILTER_COMPLETED ? "selected" : ""}
        onClick={() => onSetFilter(FILTER_COMPLETED)}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
