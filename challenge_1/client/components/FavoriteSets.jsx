import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const FavoriteSets = () => {
  const [favoriteSets, setFavoriteSets] = useState([]);
  
  useEffect(() => {
    getFavoriteSets();
  }, []);

  const getFavoriteSets = () => {
    axios.get('/favoriteSets')
      .then((res) => {
        setFavoriteSets(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  
  const addFavoriteSet = () => {
    const name = prompt();
    axios.post('/favoriteSets', { name })
      .then(() => {
        getFavoriteSets();
      });
  };

  const output = favoriteSets.map((set) => {
    return (
      <div key={set.id}>
        <Link to={`/favorites/${set.name}`}> {set.name} </Link>
      </div>
    );
  });

  return (
    <div>
     <h1>Favorite Sets</h1>
     <button onClick={addFavoriteSet}>Add To Favorite Set</button>`
     {output}
    </div>
  );
};

export default FavoriteSets;