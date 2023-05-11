
import { useState, Dispatch, ChangeEvent, useEffect } from 'react';

import { InputSlider } from '../index';

import styles from './PenPanel.module.scss';

type Props = {
  toolWidth: number,
  setToolWidth: Dispatch<number>
}

const PenPanel = ({ toolWidth, setToolWidth }: Props) => {

  return (
    <div className={styles.penPanel}>
      <InputSlider 
        toolWidth={toolWidth}
        setToolWidth={setToolWidth}
      />
    </div>
  );
}

export default PenPanel;