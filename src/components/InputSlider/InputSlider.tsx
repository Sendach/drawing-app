import { useState, Dispatch} from 'react';

import styles from './InputSlider.module.scss'

type Props = {
  toolWidth: number,
  setToolWidth: Dispatch<number>
}

const InputSlider = ({ toolWidth, setToolWidth }: Props) => {

  return (
    <>
      <input 
        className={styles.inputSlider}
        type="range"
        max={50}
        min={1}
        value={toolWidth}
        onChange={(e) => setToolWidth(e.target.valueAsNumber)}
      />
    </>
  )
}

export default InputSlider;