import { Dispatch } from 'react';
import { BsPencil, BsEraser } from 'react-icons/bs';

import { ColorSelector } from '../index';

import styles from './Toolbar.module.scss';

type Props = {
  color: string,
  tool: string,
  setTool: Dispatch<string>,
  setAction: Dispatch<string>,
}

const ToolBar = ({ color, tool, setTool, setAction }: Props) => {

  const handleToolSelection = (newTool: string) => {
    if (newTool === 'pen') setTool('pen');
    else if (newTool === 'eraser') setTool('eraser');
    
    setAction('') 
  }

  return (
    <div className={styles.toolbar}>

      <div
        className={`${styles.toolbarIcon} ${tool === 'pen' && styles.selected}`}
        onClick={() => handleToolSelection('pen')}
      >
        <BsPencil size="1rem" />
      </div>

      <div
        className={`${styles.toolbarIcon} ${tool === 'eraser' && styles.selected}`}
        onClick={() => handleToolSelection('eraser')}
      >
        <BsEraser size="1rem" />
      </div>

      <div className={styles.colorSelector}>
        <ColorSelector
          setAction={setAction}
          onToolbar={true}   
          color={color}
        />
      </div>

    </div>
  );
}

export default ToolBar;