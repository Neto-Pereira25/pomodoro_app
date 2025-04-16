import React from "react";
import { JSX } from "react/jsx-runtime";
import { secondsToTime } from "../utils/seconds-to-time";

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  return (
    <div className="timer">{secondsToTime(props.mainTime)}</div>
  );
}
