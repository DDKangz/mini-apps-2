import React, { useState } from 'react';

const PinSelection = ({ updatePins, pinsRemaining }) => {
  const handleClick = (e) => {
    const number = Number(e.target.value);
    updatePins(number);
  };

  return (
    <div className="pinSelectionContainer">
      <div>
        <button disabled={pinsRemaining < 7} value={7} onClick={handleClick}>7</button>
        <button disabled={pinsRemaining < 8} value={8} onClick={handleClick}>8</button>
        <button disabled={pinsRemaining < 9} value={9} onClick={handleClick}>9</button>
      </div>
      <div>
        <button disabled={pinsRemaining < 4} value={4} onClick={handleClick}>4</button>
        <button disabled={pinsRemaining < 5} value={5} onClick={handleClick}>5</button>
        <button disabled={pinsRemaining < 6} value={6} onClick={handleClick}>6</button>
      </div>
      <div>
        <button disabled={pinsRemaining < 1} value={1} onClick={handleClick}>1</button>
        <button disabled={pinsRemaining < 2} value={2} onClick={handleClick}>2</button>
        <button disabled={pinsRemaining < 3} value={3} onClick={handleClick}>3</button>
      </div>
      <div>
        <button value={0} onClick={handleClick}>0</button>
        <button disabled={pinsRemaining < 10} value={10} onClick={handleClick}>10</button>
      </div>
    </div>
  );
}

export default PinSelection;