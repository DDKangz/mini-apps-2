import React from 'react';

const Results = ({ events }) => {
  console.log(events);
  if(events.length === 0) {
    return (<div>No Results</div>)
  }

  let results = events.map((event) => {
    return (
      <div>
        <div>{event.category1}</div>
        <div>{event.category2}</div>
        <div>{event.date}</div>
        <div>{event.description}</div>
        <div>{event.granularity}</div>
        <div>{event.lang}</div>
      </div>
    );
  });

  return (
    <div>
      {results}     
    </div>
  );
}

export default Results;