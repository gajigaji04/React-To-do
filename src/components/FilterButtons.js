import React from "react";

export default function FilterButtons({ filter, setFilter }) {
  return (
    <div className="filter-btn">
      <button onClick={() => setFilter("all")}>전체</button>
      <button onClick={() => setFilter("completed")}>완료</button>
      <button onClick={() => setFilter("active")}>미완료</button>
    </div>
  );
}
