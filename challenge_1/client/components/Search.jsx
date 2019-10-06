  import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ addEvents }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  
  const handleSubmit = () => {
    axios.get(`/events?_page=1&q=${query}`)
      .then((data) => {
        const count = data.headers['x-total-count'];
        addEvents(data.data, count, query);
        setQuery('');
      });
  };

  return (
    <form>
      <input type="text" onChange={handleChange} value={query} />
      <button type="button" onClick={handleSubmit}>Search</button>
    </form>
  );
};

export default Search;