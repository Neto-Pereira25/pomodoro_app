import React, { useEffect, useState } from 'react';
import { JSX } from 'react/jsx-runtime';
import { useInterval } from '../hooks/use-interval';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);

  useEffect(() => {
    if (working) {
      document.body.classList.add('working');
    } else {
      //
    }
  }, [working]);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, timeCounting ? 1000 : null);

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
  }

  return (
    <div className='pomodoro'>
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text='Work' onClick={() => configureWork()}></Button>
        <Button text='teste' onClick={() => console.log(1)}></Button>
        <Button text={timeCounting ? 'Pause' : 'Play'} onClick={() => setTimeCounting(!timeCounting)}></Button>
      </div>

      <div className="details">
        <p>Testando: Lorem ipsum dolor</p>
        <p>Testando: Lorem ipsum dolor</p>
        <p>Testando: Lorem ipsum dolor</p>
        <p>Testando: Lorem ipsum dolor</p>
      </div>
    </div>
  );
}
