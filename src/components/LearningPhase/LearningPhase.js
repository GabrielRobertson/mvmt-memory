import React from 'react';

function LearningPhase({ pairs, slide }) {
  return <p>This is the Learning Phase. Pairs are {JSON.stringify(pairs)}. You are on slide {slide}.</p>;
}

export default LearningPhase;
