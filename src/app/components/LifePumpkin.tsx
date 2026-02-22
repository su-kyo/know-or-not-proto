import { memo, useState, useEffect, CSSProperties } from 'react';
import svgPaths from "../../imports/svg-v8q8v7mu8t";

// Responsive pumpkin size: small on tablet (≈107px@768px), larger on desktop (max 200px)
const PUMPKIN_VIS = 'clamp(80px, 14vw, 200px)';

interface LifePumpkinProps {
  position: 'left' | 'right';
  isActive: boolean;
  isExiting?: boolean;
  isShaking?: boolean;
}

function LifePumpkin({ position, isActive, isExiting = false, isShaking = false }: LifePumpkinProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const delay = position === 'left' ? 150 : 180;
    setTimeout(() => setIsVisible(true), delay);
  }, [position]);

  const translateY = !isVisible ? '28px' : isExiting ? '220px' : '0px';
  const opacity = !isVisible ? 0 : isExiting ? 0 : 1;

  const wrapperStyle: CSSProperties = {
    position: 'fixed',
    bottom: 0,
    [position]: 0,
    width: PUMPKIN_VIS,
    height: PUMPKIN_VIS,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    opacity,
    transform: `translateY(${translateY})`,
    transition: 'opacity 500ms ease-in-out, transform 500ms ease-in-out',
    pointerEvents: 'none',
  };

  return (
    <div style={wrapperStyle}>
      {/* Shake wrapper — sits between translateY and rotation so transforms don't conflict */}
      <div className={isShaking ? 'animate-pumpkin-shake w-full h-full' : 'w-full h-full'}>
        {position === 'left' ? (
          <div className="flex-none rotate-[15.63deg] w-full h-full">
            <div className="overflow-clip relative w-full h-full">
              <PumpkinContent isActive={isActive} />
            </div>
          </div>
        ) : (
          <div className="-scale-y-100 flex-none rotate-[164.37deg] w-full h-full">
            <div className="overflow-clip relative w-full h-full">
              <PumpkinContent isActive={isActive} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(LifePumpkin);

function PumpkinContent({ isActive }: { isActive: boolean }) {
  return (
    <>
      {/* Top */}
      <div className="absolute inset-[3.09%_22.72%_69.42%_22.62%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 188.336 94.7102">
          <g>
            {isActive ? (
              <>
                <path d={svgPaths.p2f07f00} fill="#4A681F" />
                <path d={svgPaths.p315a1f00} fill="#527527" />
                <path d={svgPaths.p13de6680} fill="#527133" />
                <path d={svgPaths.p1e155f00} fill="#668D39" />
                <path d={svgPaths.p1bad500} fill="#87AD45" />
              </>
            ) : (
              <>
                <path d={svgPaths.p13de6680} fill="#30471C" />
                <path d={svgPaths.p2f07f00} fill="#30471C" />
                <path d={svgPaths.p1e155f00} fill="#42612B" />
                <path d={svgPaths.p1bad500} fill="#5B7332" />
                <path d={svgPaths.p315a1f00} fill="#42612B" />
              </>
            )}
          </g>
        </svg>
      </div>

      {/* Body */}
      <div className="absolute inset-[26.66%_4.97%_2.14%_7.02%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 303.181 245.314">
          <g>
            {isActive ? (
              <>
                <path d={svgPaths.p12d4a400} fill="#ED7B1D" />
                <path d={svgPaths.p6e91d00} fill="#ED7B1D" />
                <path d={svgPaths.p26a7d080} fill="#DC6723" />
                <path d={svgPaths.p1e255180} fill="#DC6723" />
                <path d={svgPaths.p37a6b800} fill="#F59831" />
                <path d={svgPaths.p15061d00} fill="#F59831" />
                <path d={svgPaths.p100c100} fill="#F48723" />
                <path d={svgPaths.p2fae1000} fill="#F48723" />
                <path d={svgPaths.p22bda900} fill="#E86E20" />
                <path d={svgPaths.pd48c100} fill="#E86E20" />
                <path d={svgPaths.p1ee06d40} fill="#F59D2D" />
                <path d={svgPaths.p1b70e700} fill="#F59D2D" />
                <path d={svgPaths.p28d75500} fill="#F99423" />
                <path d={svgPaths.p1e7e8800} fill="#F59834" />
                <path d={svgPaths.p57595c0} fill="#FAA73A" />
                <path d={svgPaths.p2868fd00} fill="#EF7422" />
                <path d={svgPaths.p1fc0080} fill="#FEAB3D" />
              </>
            ) : (
              <>
                <path d={svgPaths.p12d4a400} fill="#873F1A" />
                <path d={svgPaths.p6e91d00} fill="#873F1A" />
                <path d={svgPaths.p26a7d080} fill="#6E2B15" />
                <path d={svgPaths.p1e255180} fill="#6E2B15" />
                <path d={svgPaths.p37a6b800} fill="#93561D" />
                <path d={svgPaths.p15061d00} fill="#93561D" />
                <path d={svgPaths.p100c100} fill="#97481C" />
                <path d={svgPaths.p2fae1000} fill="#97481C" />
                <path d={svgPaths.p22bda900} fill="#7E391D" />
                <path d={svgPaths.pd48c100} fill="#7E391D" />
                <path d={svgPaths.p1ee06d40} fill="#995C1D" />
                <path d={svgPaths.p1b70e700} fill="#995C1D" />
                <path d={svgPaths.p1e7e8800} fill="#965424" />
                <g>
                  <path d={svgPaths.p28d75500} fill="#9C5717" />
                  <path d={svgPaths.p57595c0} fill="#A16424" />
                  <path d={svgPaths.p2868fd00} fill="#92411D" />
                  <path d={svgPaths.p1fc0080} fill="#9B6823" />
                </g>
              </>
            )}
          </g>
        </svg>
      </div>

      {/* Face */}
      <div className={`absolute ${isActive ? 'inset-[44.85%_24.54%_17.83%_26.34%]' : 'inset-[44.71%_21.71%_16.51%_24.63%]'}`}>
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox={isActive ? "0 0 169.203 128.601" : "0 0 184.879 133.623"}>
          <g>
            {isActive ? (
              <>
                <path d={svgPaths.p112dc600} fill="#FDF396" />
                <path d={svgPaths.p1d723a80} fill="#F4AA1B" />
                <path d={svgPaths.p37d96680} fill="#F4C113" />
                <path d={svgPaths.p28a97000} fill="#F4C113" />
                <path d={svgPaths.p2b9e0900} fill="#FCF093" />
                <path d={svgPaths.p347d1b00} fill="#FCF093" />
                <path d={svgPaths.p35f64180} fill="#FBEE7D" />
                <g>
                  <path d={svgPaths.p247bc170} fill="#FCBF11" />
                  <path d={svgPaths.pb3746c0} fill="#FCBF11" />
                </g>
              </>
            ) : (
              <>
                <path d={svgPaths.p21c8e480} fill="#986921" />
                <path d={svgPaths.p78b6600} fill="#9B5913" />
                <path d={svgPaths.p3a2ae480} fill="#3B1910" />
                <path d={svgPaths.p48e1680} fill="#3B1910" />
                <path d={svgPaths.p3d1f54c0} fill="#3B1910" />
                <path d={svgPaths.p1bc7dc00} fill="#662D0E" />
                <path d={svgPaths.p3dcbab00} fill="#662D0E" />
                <path d={svgPaths.p37570c00} fill="#3A1910" />
              </>
            )}
          </g>
        </svg>
      </div>
    </>
  );
}
