import { Dispatch } from 'react';


import ColorPanel from '../ColorPanel/ColorPanel';

import styles from './SettingsBar.module.scss';

type Props = {
  tool: string,
  color: string,
  setColor: Dispatch<string>,
  action: string
}

const SettingsBar = ({ tool, color, setColor, action }: Props) => {

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
        tool === 'pen' && <></>
      }
      
      {
        action === 'color' && <ColorPanel color={color} setColor={setColor} />
      }



    </div>
  );
}

export default SettingsBar;