import { KonvaEventObject } from 'konva/lib/Node';
import { useState } from 'react';
import { Stage, Layer, Rect, Circle, Line } from 'react-konva';
import { CanvasManager, Drawing, Toolbar, SettingsBar } from '@/components';

export default function Home() {
  return (
    <>
      <CanvasManager />
    </>
  );
};