  
import React from 'react';

const Pins = ({ pinsRemaining }) => {
  const removedStyle ={opacity: 0};
  const presentStyle ={opacity: 1};
  return (
    <div className="pinContainer">
      <div>
        <img style={pinsRemaining < 1 ? removedStyle : presentStyle}src="./bowling_PNG6.png" width="44px" height="100px"></img>
        <img style={pinsRemaining < 2 ? removedStyle : presentStyle}src="./bowling_PNG6.png" width="44px" height="100px"></img>
        <img style={pinsRemaining < 3 ? removedStyle : presentStyle}src="./bowling_PNG6.png" width="44px" height="100px"></img>
        <img style={pinsRemaining < 4 ? removedStyle : presentStyle}src="./bowling_PNG6.png" width="44px" height="100px"></img>
      </div>
      <div>
        <img style={pinsRemaining < 5 ? removedStyle : presentStyle}src="./bowling_PNG6.png" width="44px" height="100px"></img>
        <img style={pinsRemaining < 6 ? removedStyle : presentStyle}src="./bowling_PNG6.png" width="44px" height="100px"></img>
        <img style={pinsRemaining < 7 ? removedStyle : presentStyle}src="./bowling_PNG6.png" width="44px" height="100px"></img>
      </div>
      <div>
        <img style={pinsRemaining < 8 ? removedStyle : presentStyle}src="./bowling_PNG6.png" width="44px" height="100px"></img>
        <img style={pinsRemaining < 9 ? removedStyle : presentStyle}src="./bowling_PNG6.png" width="44px" height="100px"></img>
      </div>
      <div>
        <img style={pinsRemaining < 10 ? removedStyle : presentStyle} src="./bowling_PNG6.png" width="44px" height="100px"></img>
      </div>
    </div>
  );
};

export default Pins;