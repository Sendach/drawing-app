import { useState } from 'react';
import { Drawing, Toolbar, SettingsBar } from '../index';

const CanvasManager = () => {
  const [color, setColor] = useState('#FF0000');
  const [tool, setTool] = useState('Color');

  return (
    <div>
      <SettingsBar
        selectedTool={tool}
        color={color}
        setColor={setColor}
      />
      <Toolbar />

      <Drawing
        color={color}
      />
      
    </div>
  );
}

export default CanvasManager;