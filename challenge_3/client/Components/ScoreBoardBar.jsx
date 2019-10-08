import React, { useState, useEffect } from 'react';

const Scoreboard = ({ frameData, scores }) => {
  const { frameScores } = frameData;

  return (
    <table>
      <tbody>
        <tr>
          <td colSpan="2">1</td>
          <td colSpan="2">2</td>
          <td colSpan="2">3</td>
          <td colSpan="2">4</td>
          <td colSpan="2">5</td>
          <td colSpan="2">6</td>
          <td colSpan="2">7</td>
          <td colSpan="2">8</td>
          <td colSpan="2">9</td>
          <td colSpan="2">10</td>
        </tr>
        <tr>
          {frameScores.map((score, index) => <td>{frameScores[index]}</td>)}
        </tr>
        <tr>
          {scores.map((score, index) => <td colSpan="2">{scores[index]}</td>)}
        </tr>
      </tbody>
    </table>
  );
}

export default Scoreboard;