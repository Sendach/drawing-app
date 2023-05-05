
import { useState, Dispatch } from 'react';

import ColorSelector from '../ColorSelector/ColorSelector';

import styles from './ColorPanel.module.scss';

type Props = {
  color: string
  setColor: Dispatch<string>
}

const ColorPanel = ({ color, setColor } : Props) => {
  const [hexCode, setHexCode] = useState('#');

  return (
    <div className={styles.colorPanel}>

      
        <div className={styles.colorSelection}>
        {
          ['red', 'blue', 'green'].map((color) => (
            <ColorSelector 
              color={color}
              setColor={setColor}
            />
          ))
        }
        </div>


      <input
        id="hex-code"
        className={styles.hexCode}
        value={`#${color}`}
      />
    </div>
  );
}

export default ColorPanel;