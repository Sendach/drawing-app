
import { useState, Dispatch, MouseEventHandler } from 'react';

import styles from './ColorSelector.module.scss';

type Props = {
  color: string
  setColor?: Dispatch<string>,
  onToolbar: boolean,
  setAction?: Dispatch<string>
}

const ColorSelector = ({ color, setColor, onToolbar=false, setAction }: Props) => {
  return (
    <div
      className={`${styles.colorSelector} ${onToolbar && styles.onToolbar}`}
      style={{ backgroundColor: color }}
      onClick={() => onToolbar ? setAction('color') : setColor(color)}
    />
  );
}

export default ColorSelector;