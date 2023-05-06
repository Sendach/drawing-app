import { Dispatch } from 'react';


import ColorPanel from '../ColorPanel/ColorPanel';

import styles from './SettingsBar.module.scss';

type Props = {
  selectedTool: string,
  color: string,
  setColor: Dispatch<string>
}

const SettingsBar = ({ selectedTool, color, setColor }: Props) => {

  return (
    <div className={styles.settingsBar}>

      {/* LOGO */}
      <div className={styles.logo}>
        <h1>LOGO</h1>
      </div>

      <p className={styles.selectedTool}>
        {selectedTool}
      </p>

      <ColorPanel color={color} setColor={setColor}/>

    </div>
  );
}

export default SettingsBar;