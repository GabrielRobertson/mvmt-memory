import React from 'react';

function TestPhase({ pairs, slide }) {
  return <p>This is the Test Phase. Pairs are {JSON.stringify(pairs)}. You are on slide {slide}.</p>;
}

export default TestPhase;
