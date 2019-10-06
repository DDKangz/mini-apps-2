  
import React, { useState } from 'react';
import axios from 'axios';

const Event = ({ event }) => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleDateEdit = (e) => {
    const updatedDate = { date };
    axios.patch(`/events/${event.id}`, updatedDate)
      .then(() => {
        event.date = date;
        setDate('');
      })
      .catch((err) => {
        console.error(err);
      });
  };
  
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleDescriptionEdit = (e) => {
    const updatedDescription = { description };
    axios.patch(`/events/${event.id}`, updatedDescription)
      .then(() => {
        event.description = description;
        setDescription('');
      })
      .catch((err) => {
        console.error(err);
      });
  };
  
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  
  return (
    <div className="event">
        <div> 
          <div>Date: {event.date}</div>
          <form>
            <input type="text" onChange={handleDateChange} value={date}/> 
            <button type="button" onClick={handleDateEdit}>Edit Date</button>
          </form>
        </div>
        <div> 
          <div>Description: {event.description}</div>
          <form>
            <input type="text" onChange={handleDescriptionChange} value={description}/> 
            <button type="button" onClick={handleDescriptionEdit}>Edit Description</button>
          </form>
        </div>
        <div> Language: {event.lang} </div>
        <div> Category 1: {event.category1} </div>
        <div> Category 2: {event.category2} </div>
        <div> Granularity: {event.granularity} </div>
    </div>
  );
}

export default Event;