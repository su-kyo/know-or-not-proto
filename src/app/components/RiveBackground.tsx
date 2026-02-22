import { memo } from 'react';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';

function RiveBackground() {
  const { RiveComponent } = useRive({
    src: '/source/background.riv',
    artboard: 'background',
    stateMachines: 'State Machine',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  return (
    <div
      style={{
        position: 'fixed', // always covers viewport even when page scrolls
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <RiveComponent style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

export default memo(RiveBackground);
