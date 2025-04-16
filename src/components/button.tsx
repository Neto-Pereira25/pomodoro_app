import React from "react";
import { JSX } from "react/jsx-runtime";

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}

export function Button(props: Props): JSX.Element {
  return (
    <button onClick={props.onClick} className={props.className}>
      {props.text}
    </button>
  );
}
