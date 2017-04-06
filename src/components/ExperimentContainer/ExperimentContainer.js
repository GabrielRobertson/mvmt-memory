import React from 'react';
import FrontPage from '../FrontPage/FrontPage';
import LearningPhase from '../LearningPhase/LearningPhase';
import Intermission from '../Intermission/Intermission';
import TestPhase from '../TestPhase/TestPhase';
import ThxBye from '../ThxBye/ThxBye';

function ExperimentContainer({ db, phase, ...rest }) {
  switch (phase) {
    case 1:
      return <LearningPhase {...rest} />;
    case 2:
      return <Intermission />;
    case 3:
      return <TestPhase {...rest} />;
    case 4:
      return <ThxBye />;
    case 0:
    default:
      return <FrontPage db={db} />;
  }
}

export default ExperimentContainer;
