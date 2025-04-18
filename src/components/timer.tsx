import React from "react";
import { JSX } from "react/jsx-runtime";
import { secondsToMinutes } from "../utils/seconds-to-minutes";

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  return (
    <div className="timer">{secondsToMinutes(props.mainTime)}</div>
  );
}
