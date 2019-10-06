import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Search from './Search.jsx';
import Results from './Results.jsx';

const Home = () => {
  const [events, setEvents] = useState({
    events: [],
    count: 0,
    query: '',
  });
  const [currentEvents, setCurrentEvents] = useState([]);
  
  const addEvents = (data, count, query) => {
    setEvents({
      events: data,
      count: count,
      query: query
    });
    setCurrentEvents(data);
  }

  const handlePageClick = (pageObj) => {
    const currentPage = pageObj['selected'];
    axios.get(`/events?_page=${currentPage + 1}&q=${events.query}`)
      .then((data) => {
        setCurrentEvents(data.data);
      });
  };

  return (
    <div>
      <h1>Historical Events Finder</h1>
      <Search addEvents={addEvents} />
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={Math.ceil(events.count / 10)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}  
      />
      <Results events={currentEvents} />
    </div>
  );
};

export default Home;