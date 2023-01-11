import "./SearchBar.css";

import { useState } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Location:</label>
      <br></br>
      <input type={"text"} value={searchTerm} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchBar;
