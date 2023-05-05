import { KonvaEventObject } from 'konva/lib/Node';
import { useState } from 'react';
import { Stage, Layer, Rect, Line } from 'react-konva';

type Props = {
  color: string
}

const Drawing = ({ color }: Props) => {
  const [tool, setTool] = useState('brush');
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [lines, setLines] = useState([]);

  let mode = 'brush';

  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    setIsMouseDown(true);
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y] }]);
  }

  const handleMouseMovement = (e: KonvaEventObject<MouseEvent>) => { 
    const stage = e.target.getStage();
    const pos = stage.getPointerPosition();
    
    // Create a line between last known position and current position
    let lastLine = lines[lines.length - 1];
    lastLine.points = lastLine.points.concat([pos.x, pos.y])
    
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  }

  return (
    <Stage
      width={600}
      height={600} 
      onMouseDown={handleMouseDown} 
      onMouseUp={() => setIsMouseDown(false)}
      onMouseMove={isMouseDown && handleMouseMovement}
    >
    <Layer>
      <Rect 
        width={600}
        height={600}
        stroke="red"
      />

      {
        lines.map(line => (
          <Line 
            globalCompositeOperation={mode === 'brush' ? 'source-over' : 'destination-out'}
            lineCap='round'
            lineJoin='round'
            stroke={color}
            strokeWidth={5}
            points={line.points}
          />
        ))
      }

    </Layer>
    </Stage>
  );
}

export default Drawing;