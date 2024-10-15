import React, { useCallback } from "react";

const SearchBar = ({
  query,
  setQuery,

  minDate,
  setMinDate,
  maxDate,
  setMaxDate,
  clearDates,
}) => {
  const onChange = useCallback((e) => setQuery(e.target.value), [setQuery]);

  return (
    <div>
      <input
        className="filterNormally"
        type="text"
        value={query}
        onChange={onChange}
        placeholder="Filter by Last Name, First Name, Course, Birthday, or Age"
      />
      <div>
        <label>Min Date:</label>
        <input
          className="dateFilter"
          type="date"
          value={minDate}
          onChange={(e) => setMinDate(e.target.value)}
        />
        <label>Max Date:</label>
        <input
          className="dateFilter"
          type="date"
          value={maxDate}
          onChange={(e) => setMaxDate(e.target.value)}
        />
        <button onClick={clearDates}>Clear Dates</button>
      </div>
    </div>
  );
};

export default SearchBar;
