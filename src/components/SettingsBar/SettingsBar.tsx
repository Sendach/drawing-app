import { Dispatch } from 'react';


import ColorPanel from '../ColorPanel/ColorPanel';
import PenPanel from '../PenPanel/PenPanel';

import styles from './SettingsBar.module.scss';

type Props = {
  tool: string,
  color: string,
  setColor: Dispatch<string>,
  action: string,
  penWidth: number,
  setPenWidth: Dispatch<number>,
  eraserWidth: number,
  setEraserWidth: Dispatch<number>
}

const SettingsBar = ({ tool, color, setColor, action, penWidth, setPenWidth, eraserWidth, setEraserWidth}: Props) => {

  return (
    <div className={styles.settingsBar}>

      {/* LOGO */}
      <div className={styles.logo}>
        <h1>LOGO</h1>
      </div>

      <p className={styles.selectedTool}>
        {tool}
      </p>

      {
        tool === 'pen' && 
          <PenPanel 
            toolWidth={penWidth}
            setToolWidth={setPenWidth}
          />
      }
      
      {
        tool === 'eraser' && 
          <PenPanel
            toolWidth={eraserWidth}
            setToolWidth={setEraserWidth}
          />
      }

      {
        action === 'color' && <ColorPanel color={color} setColor={setColor} />
      }



    </div>
  );
}

export default SettingsBar;