import React, { useState } from 'react';
import Event from './Event.jsx';

const Results = ({ events }) => {
  let results = events.map((event) => {
    return (
      <Event event={event} key={event.id} />
    );
  });

  return (
    <div>
      {results}     
    </div>
  );
}

export default Results;