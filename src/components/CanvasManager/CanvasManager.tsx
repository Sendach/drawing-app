import { useState } from 'react';

import Canvas from '../Canvas/Canvas';
import { Drawing, Toolbar, SettingsBar } from '../index';

const CanvasManager = () => {
  const [color, setColor] = useState('#FF0000');
  const [tool, setTool] = useState('brush');

  return (
    <div id="canvas-manager">
      <SettingsBar
        tool={tool}
        color={color}
        setColor={setColor}
      />

      {/* <Canvas />  */}
      <Toolbar
        setTool={setTool}
      />

      <Canvas 
        tool={tool}
        color={color}
      /> 
      {/* <Drawing
        tool={tool}
        color={color}
      /> */}
      
    </div>
  );
}

export default CanvasManager;