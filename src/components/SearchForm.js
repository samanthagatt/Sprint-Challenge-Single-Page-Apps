import React from "react";

export default function SearchForm({searchTerm, setSearchTerm}) {
  return (
    <section className="search-form">
      <h2>Search for a character</h2>
      <form>
        <input name="name" 
          type="text" 
          value={searchTerm}
          onChange={
            (e) => setSearchTerm(e.target.value)
          } />
      </form>
    </section>
  );
}