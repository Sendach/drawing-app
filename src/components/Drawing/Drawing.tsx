import { KonvaEventObject } from 'konva/lib/Node';
import { useState } from 'react';
import { Stage, Layer, Rect, Line } from 'react-konva';

type Props = {
  lines: any,
}

const Drawing = ({ lines }: Props) => {
  return (
    <>
      {
        lines.map((line: any) => (
          <Line 
            globalCompositeOperation={line.tool === 'brush' ? 'source-over' : 'destination-out'}
            lineCap='round'
            lineJoin='round'
            stroke={line.color}
            strokeWidth={5}
            points={line.points}
          />
        ))
      }
    </>
  );
}

export default Drawing;