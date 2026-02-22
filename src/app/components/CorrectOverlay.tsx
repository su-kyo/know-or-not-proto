import { memo } from 'react';

function CorrectOverlay() {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 animate-fadeIn" />
  );
}

export default memo(CorrectOverlay);
