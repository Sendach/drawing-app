import { Dispatch } from 'react';
import { BsPencil, BsEraser } from 'react-icons/bs';

import styles from './Toolbar.module.scss';

type Props = {
  setTool: Dispatch<string>
}

const ToolBar = ({ setTool }: Props) => {
  return (
    <div className={styles.toolbar}>
      {/* <button onClick={() => setTool('eraser')}>Eraser</button background-color: ;n> */}
      <div
        className={styles.toolbarIcon}
        onClick={() => setTool('brush')}
      >
        <BsPencil size="1rem" />
      </div>

      <div
        className={styles.toolbarIcon}
        onClick={() => setTool('eraser')}
      >
        <BsEraser size="1rem" />
      </div>
      {/* <button onClick={() => setTool('brush')}>Brush</button> */}
    </div>
  );
}

export default ToolBar;