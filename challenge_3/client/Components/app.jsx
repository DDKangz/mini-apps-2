import React, { useState } from 'react';
import Pins from './Pins.jsx';
import Scoreboard from './ScoreboardBar.jsx';
import PinSelection from './NumberPad.jsx';

const App = () => {
  const [pinsRemaining, setPinsRemaining] = useState(10);
  const [scores, setScores] = useState(Array(10).fill(''));
  const [frameData, setFrameData] = useState({
    frameScores: Array(20).fill(''),
    frameNumber: 0,
  });

  const updatePins = (numPins) => {
    const leftoverPins = pinsRemaining - numPins;
    let isSecondThrow = false;
    let isSpare = false;
    let isStrike = false;
    
    if (frameData.frameNumber % 2 === 0 && numPins === 10) {
      isStrike = true;
      setPinsRemaining(10);
    }

    if (frameData.frameNumber % 2 === 1) {
      isSecondThrow = true;
    }

    if (isSecondThrow) {
      if (leftoverPins === 0) {
        isSpare = true;
      }

      setPinsRemaining(10);
    } else {
      if (!isStrike) {
        setPinsRemaining(leftoverPins);
      }
    }

    setFrameData((frameData) => {
      const { frameScores, frameNumber } = frameData;
      const newFrameScores = Array.from(frameScores);
      if (frameNumber % 2 === 0 && numPins === 10) {
        newFrameScores[frameNumber + 1] = 'X';
        isStrike = true;
      } else {
        newFrameScores[frameNumber] = isSpare ? '/' : numPins;
      }

      isSpare = false;

      const newFrameData = {
        frameScores: newFrameScores,
        frameNumber: isStrike ? frameNumber + 2: frameNumber + 1,
      };
      
      return newFrameData;
    });
  };

  return (
    <div>
      <div className="bowlingHeader">
        <h1>BOWLING!!!</h1>
      </div>
      <Scoreboard frameData={frameData} scores={scores} />
      <Pins pinsRemaining={pinsRemaining} />
      <PinSelection updatePins={updatePins} pinsRemaining={pinsRemaining} />
    </div>
  );
};

export default App;
