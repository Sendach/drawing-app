import { useState } from 'react';

import Canvas from '../Canvas/Canvas';
import { Drawing, Toolbar, SettingsBar } from '../index';

const CanvasManager = () => {
  const [color, setColor] = useState<string>('#FF0000');
  const [tool, setTool] = useState<string>('pen');
  const [action, setAction] = useState<string>('');

  return (
    <div id="canvas-manager">

      <SettingsBar
        tool={tool}
        color={color}
        setColor={setColor}
        action={action}
      />

      <Toolbar
        color={color}
        tool={tool}
        setTool={setTool}
        action={action}
        setAction={setAction}
      />

      <Canvas 
        tool={tool}
        color={color}
      /> 

    </div>
  );
}

export default CanvasManager;