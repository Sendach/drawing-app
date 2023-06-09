import { useState, Dispatch } from 'react';
import { KonvaEventObject } from 'konva/lib/Node';
import { Stage, Layer, Rect } from 'react-konva';

import { Drawing } from '../index';

import styles from './Canvas.module.scss';

type Props = {
  tool: string,
  color: string,
  strokeWidth: number,
}

const Canvas = ({ color, tool, strokeWidth}: Props) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [lines, setLines] = useState([]);

  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    setIsMouseDown(true);
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, strokeWidth, color, points: [pos.x, pos.y] }]);
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
    <div className={styles.canvas}>
      <Stage
        className={styles.stage}
        width={900}
        height={700} 
        onMouseDown={handleMouseDown} 
        onMouseUp={() => setIsMouseDown(false)}
        onMouseMove={isMouseDown && handleMouseMovement}
      >
        <Layer>
          <Rect
            width={900}
            height={700}
            fill='#FFF'
          />

          <Drawing
            lines={lines}
          />
        </Layer>
      </Stage>
    </div>
  );
}

export default Canvas;