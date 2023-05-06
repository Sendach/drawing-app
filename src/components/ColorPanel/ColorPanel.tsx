
import { useState, Dispatch, ChangeEvent, useEffect } from 'react';

import ColorSelector from '../ColorSelector/ColorSelector';

import styles from './ColorPanel.module.scss';

type Props = {
  color: string
  setColor: Dispatch<string>
}

/*

Red, Green, Blue, Yellow, Orange, 
Pink, Purple, Brown, Black, White
*/

const colors = [
  '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FFA500', 
  '#FFC0CB', '#A020F0', '#964B00', '#000', '#FFF'
];

const ColorPanel = ({ color, setColor } : Props) => {
  const [hexCode, setHexCode] = useState(color);

  const handleHexCode = (e: ChangeEvent<HTMLInputElement>) => {
    setHexCode(e.target.value)
  }

  useEffect(() => {
    if (hexCode[0] !== '#') setHexCode('#' + hexCode)

    if (hexCode.length === 7) setColor(hexCode);
  }, [hexCode])

  useEffect(() => {
    setHexCode(color);
  }, [color])

  return (
    <div className={styles.colorPanel}>

      <div className={styles.colorSelection}>
        {
          colors.map((color) => (
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
        value={hexCode}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleHexCode(e)}
        maxLength={7}
      />
    </div>
  );
}

export default ColorPanel;