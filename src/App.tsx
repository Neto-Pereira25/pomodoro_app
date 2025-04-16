import React from 'react';
import { JSX } from 'react/jsx-runtime';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="App">
      <PomodoroTimer defaultPomodoroTime={1500} />
    </div>
  );
}

export default App;
