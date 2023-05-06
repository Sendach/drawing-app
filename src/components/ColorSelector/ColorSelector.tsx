
import { useState, Dispatch } from 'react';

import styles from './ColorSelector.module.scss';

type Props = {
  color: string
  setColor: Dispatch<string>
}

const ColorSelector = ({ color, setColor }: Props) => {
  return (
    <div
      className={styles.colorSelector}
      style={{ backgroundColor: color }}
      onClick={() => setColor(color)}
    />
  );
}

export default ColorSelector;