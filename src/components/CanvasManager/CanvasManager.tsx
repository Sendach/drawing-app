import { useState } from 'react';
import { Drawing, Toolbar, SettingsBar } from '../index';

const CanvasManager = () => {
  const [color, setColor] = useState('green');

  console.log('color:', color)
  return (
    <div>
      <SettingsBar
        selectedTool="brush"
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