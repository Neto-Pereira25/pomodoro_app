import React, { useState } from 'react';
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

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className='pomodoro'>
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text='teste' onClick={() => console.log(1)}></Button>
        <Button text='teste' onClick={() => console.log(1)}></Button>
        <Button text='teste' onClick={() => console.log(1)}></Button>
      </div>

      <div className="details">
        <p>Testando: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi quae quisquam, corrupti in ipsa magnam voluptates magni nemo excepturi labore odio reiciendis. Quibusdam accusamus aliquid officia. Mollitia, ex delectus.</p>
        <p>Testando: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi quae quisquam, corrupti in ipsa magnam voluptates magni nemo excepturi labore odio reiciendis. Quibusdam accusamus aliquid officia. Mollitia, ex delectus.</p>
        <p>Testando: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi quae quisquam, corrupti in ipsa magnam voluptates magni nemo excepturi labore odio reiciendis. Quibusdam accusamus aliquid officia. Mollitia, ex delectus.</p>
        <p>Testando: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi quae quisquam, corrupti in ipsa magnam voluptates magni nemo excepturi labore odio reiciendis. Quibusdam accusamus aliquid officia. Mollitia, ex delectus.</p>
      </div>
    </div>
  );
}
