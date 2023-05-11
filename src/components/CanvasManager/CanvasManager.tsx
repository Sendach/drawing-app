import { useState } from 'react';

import Canvas from '../Canvas/Canvas';
import { Toolbar, SettingsBar } from '../index';

const CanvasManager = () => {
  const [color, setColor] = useState<string>('#FF0000');
  const [tool, setTool] = useState<string>('pen');
  const [action, setAction] = useState<string>('');
  const [penWidth, setPenWidth] = useState<number>(5);
  const [eraserWidth, setEraserWidth] = useState<number>(5);
  
  return (
    <div id="canvas-manager">

      <SettingsBar
        tool={tool}
        color={color}
        setColor={setColor}
        action={action}
        penWidth={penWidth}
        setPenWidth={setPenWidth}
        eraserWidth={eraserWidth}
        setEraserWidth={setEraserWidth}
      />

      <Toolbar
        color={color}
        tool={tool}
        setTool={setTool}
        setAction={setAction}
      />

      <Canvas 
        tool={tool}
        color={color}
        strokeWidth={tool === 'pen' ? penWidth : eraserWidth}
        penWidth={penWidth}
        eraserWidth={eraserWidth}
      /> 

    </div>
  );
}

export default CanvasManager;