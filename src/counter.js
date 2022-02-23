import React, { useState } from 'react';

export default function Counter() {
  const [p1Count, setP1Count] = useState(0);
  const [p2Count, setP2Count] = useState(0);

  const incrementCountP1 = () => {
    setP1Count(p1Count + 1)
  }

  const incrementCountP2 = () => {
    setP2Count(p2Count + 1)
  }

  return (
    <div>
      <p>Player 1: {p1Count} | Player 2: {p2Count}</p>
    </div>
  );
}