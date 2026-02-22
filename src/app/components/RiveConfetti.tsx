import { memo, forwardRef, useImperativeHandle, useState } from 'react';
import { useRive, useStateMachineInput, Layout, Fit, Alignment } from '@rive-app/react-canvas';

export interface RiveConfettiRef {
  trigger: () => void;
}

const RiveConfetti = memo(forwardRef<RiveConfettiRef>((_, ref) => {
  const [visible, setVisible] = useState(false);

  const { rive, RiveComponent } = useRive({
    src: '/source/confetti.riv',
    artboard: 'confetti',
    stateMachines: 'Confetti',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });

  const isCorrectInput = useStateMachineInput(rive, 'Confetti', 'isCorrect');

  useImperativeHandle(ref, () => ({
    trigger: () => {
      setVisible(true);
      if (isCorrectInput) {
        isCorrectInput.fire();
      }
      setTimeout(() => {
        setVisible(false);
      }, 2000);
    },
  }));

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 100,
        pointerEvents: 'none',
        opacity: visible ? 1 : 0,
      }}
    >
      <RiveComponent style={{ width: '100%', height: '100%' }} />
    </div>
  );
}));

RiveConfetti.displayName = 'RiveConfetti';
export default RiveConfetti;
