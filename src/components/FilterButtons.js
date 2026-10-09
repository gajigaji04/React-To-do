import React from "react";
import { FILTERS, FILTER_LABELS } from "../constants/filters";

export default function FilterButtons({ filter, setFilter }) {
  return (
    <div className="filter-btn">
      {Object.values(FILTERS).map((value) => (
        <button
          key={value}
          className={filter === value ? "active" : ""}
          onClick={() => setFilter(value)}
        >
          {FILTER_LABELS[value]}
        </button>
      ))}
    </div>
  );
}
