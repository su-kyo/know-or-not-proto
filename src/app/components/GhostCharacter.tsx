import { memo } from 'react';
import svgPaths from "../../imports/svg-wfcwqkio8l";

interface GhostCharacterProps {
  position: 'left' | 'right';
  visible: boolean;
  animatingOut: boolean;
  variant: 'blue' | 'purple';
  onClick: () => void;
}

function GhostCharacter({
  position,
  visible,
  animatingOut,
  variant,
  onClick
}: GhostCharacterProps) {
  const isBlue = variant === 'blue';
  
  return (
    <div
      className={`absolute size-[318px] cursor-pointer bottom-[40px] ${
        visible && !animatingOut
          ? 'opacity-100 translate-y-0'
          : !visible
          ? 'opacity-0 translate-y-20'
          : 'opacity-0 translate-y-[100px]'
      }`}
      onClick={onClick}
      style={{
        [position === 'left' ? 'left' : 'right']: 'clamp(4px, 3.5vw, 40px)',
        transition: animatingOut
          ? 'opacity 350ms ease-in, transform 350ms ease-in'
          : 'opacity 500ms ease-out, transform 500ms ease-out'
      }}
    >
      {position === 'right' ? (
        <div className="flex items-center justify-center size-full">
          <div className="scale-x-[-1]">
            <div className="overflow-clip relative size-[318px]">
              <GhostContent isBlue={isBlue} />
            </div>
          </div>
        </div>
      ) : (
        <div className="overflow-clip size-[318px]">
          <GhostContent isBlue={isBlue} />
        </div>
      )}
    </div>
  );
}

export default memo(GhostCharacter);

function GhostContent({ isBlue }: { isBlue: boolean }) {
  return (
    <>
      {/* Hat back */}
      <div className="absolute inset-[11.67%_34.91%_58.38%_9.33%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 177.328 95.2368">
          <g>
            <path d={svgPaths.p5167180} fill={isBlue ? "#16336D" : "#462259"} />
          </g>
        </svg>
      </div>

      {/* Body */}
      <div className="absolute inset-[13.46%_29.1%_18.19%_5.82%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 206.968 217.362">
          <g>
            <path d={svgPaths.p81df500} fill="#E6D5D1" />
            <path d={svgPaths.p285df980} fill="#F7ECE7" />
            <path d={svgPaths.p1da8fc00} fill="#FCA193" />
            <path d={svgPaths.p374c8d00} fill="#FCA193" />
          </g>
        </svg>
      </div>

      {/* Eyes open */}
      <div className="absolute inset-[23.14%_44.6%_67.47%_33.71%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.9782 29.8681">
          <g>
            <path d={svgPaths.p1e312680} fill="#352A3B" />
            <path d={svgPaths.p31504780} fill="#352A3B" />
          </g>
        </svg>
      </div>

      {/* Mouth close */}
      <div className="absolute inset-[32.28%_50.6%_65.64%_41.48%]">
        <div className="absolute inset-[-42.11%_-11.06%_-42.1%_-11.05%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.7394 12.1747">
            <g>
              <path d={svgPaths.p2a166100} stroke="#352A3B" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5.565" />
            </g>
          </svg>
        </div>
      </div>

      {/* Hat */}
      <div className="absolute contents inset-[4.55%_34.98%_59.13%_8.58%]">
        <div className="absolute inset-[4.55%_52.08%_70.38%_8.58%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125.106 79.7119">
            <g>
              <path d={svgPaths.pddc680} fill={isBlue ? "#5682E0" : "#9057A6"} />
              <path d={svgPaths.p20044e00} fill={isBlue ? "#769AF1" : "#BD85C1"} />
              <path d={svgPaths.p1c543700} fill={isBlue ? "#3762C0" : "#673F82"} />
              <path d={svgPaths.p5c94b00} fill={isBlue ? "#1F4399" : "#502A66"} />
              <g>
                <path d={svgPaths.p2a219580} fill="#ED8148" />
                <path d={svgPaths.p32281700} fill="#FB985B" />
                <path d={svgPaths.p34ed99c0} fill="#FBB97E" />
                <path d={svgPaths.p19fb5e00} fill="#D97041" />
              </g>
              <path d={svgPaths.p159bae00} fill={isBlue ? "#1B3D8D" : "#422253"} />
            </g>
          </svg>
        </div>
        <div className="absolute inset-[11.67%_34.98%_59.13%_9.33%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 177.104 92.8617">
            <g>
              <path d={svgPaths.p990d500} fill={isBlue ? "#4F78D4" : "#8F55A4"} />
              <path d={svgPaths.p1457af00} fill={isBlue ? "#21408E" : "#462259"} />
            </g>
          </svg>
        </div>
      </div>

      {/* Panel */}
      <div className="absolute inset-[35.98%_9.28%_1.41%_23.25%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 214.578 199.112">
          <g>
            <path d={svgPaths.p2838be80} fill="#9B5E3B" />
            <path d={svgPaths.p14760080} fill="#DE9450" />
            <path d={svgPaths.p3db9e300} fill="#A26237" />
            <path d={svgPaths.p29cd7280} fill="#C27C49" />
            <g>
              <path d={svgPaths.p37e3ab80} fill="#A26237" opacity="0.48" />
              <path d={svgPaths.pd485580} fill="#A26237" opacity="0.48" />
              <path d={svgPaths.pc5a56c0} fill="#A26237" opacity="0.48" />
            </g>
          </g>
        </svg>
      </div>

      {/* Message (Signboard with text) */}
      <div className="absolute inset-[44.29%_16.46%_9.71%_35.3%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153.415 146.275">
          <g>
            <path d={svgPaths.p283f5f60} fill="#A26237" opacity="0.48" />
            <g>
              <path d={svgPaths.p31b172c0} fill="#301808" />
              <g>
                <path d={svgPaths.p1fbb3180} fill="white" />
                <path d={svgPaths.pd76200} fill="white" />
                <path d={svgPaths.p32eeaf00} fill="white" />
              </g>
            </g>
          </g>
        </svg>
      </div>

      {/* Arm */}
      <div className="absolute inset-[46.45%_64.26%_39.15%_23.7%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.2837 45.7814">
          <g>
            <path d={svgPaths.p31683900} fill="#F7ECE7" />
          </g>
        </svg>
      </div>

      {/* Hand */}
      <div className="absolute inset-[32.59%_21.69%_57.41%_66.27%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.293 31.779">
          <g>
            <path d={svgPaths.pbad4600} fill="#F7ECE7" />
            <path d={svgPaths.p3a415480} fill="#EFE2DA" />
          </g>
        </svg>
      </div>
    </>
  );
}