import { Dispatch } from 'react';
import { BsPencil, BsEraser } from 'react-icons/bs';

import { ColorSelector } from '../index';

import styles from './Toolbar.module.scss';

type Props = {
  color: string,
  tool: string,
  setTool: Dispatch<string>,
  action: string,
  setAction: Dispatch<string>,
}

const ToolBar = ({ color, tool, setTool, action, setAction }: Props) => {
  return (
    <div className={styles.toolbar}>

      <div
        className={`${styles.toolbarIcon} ${tool === 'pen' && styles.selected}`}
        onClick={() => { setTool('pen'); setAction('') }}
      >
        <BsPencil size="1rem" />
      </div>

      <div
        className={`${styles.toolbarIcon} ${tool === 'eraser' && styles.selected}`}
        onClick={() => { setTool('eraser'); setAction('') }}
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