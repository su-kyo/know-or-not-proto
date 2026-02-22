import { memo } from 'react';

interface StageSelectorProps {
  onSelect: (multilingualUI: boolean) => void;
}

function StageSelector({ onSelect }: StageSelectorProps) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-[16px]"
      style={{ zIndex: 10, backgroundColor: '#1c1033' }}
    >
      <div className="flex flex-col gap-[12px] items-center">
        <div className="bg-[#5800c3] flex flex-col items-start pb-[8px] rounded-[16px]">
          <button
            onClick={() => onSelect(true)}
            className="bg-[#7300ff] flex h-[55px] items-center justify-center px-[40px] rounded-[16px] cursor-pointer hover:bg-[#8000ff] transition-colors"
          >
            <span className="font-['NPS_font:Bold',sans-serif] text-[24px] text-white tracking-[-0.48px] whitespace-nowrap">
              다국어 UI 켜고 시작
            </span>
          </button>
        </div>
        <div className="bg-[#3a3a3a] flex flex-col items-start pb-[8px] rounded-[16px]">
          <button
            onClick={() => onSelect(false)}
            className="bg-[#4a4a4a] flex h-[55px] items-center justify-center px-[40px] rounded-[16px] cursor-pointer hover:bg-[#5a5a5a] transition-colors"
          >
            <span className="font-['NPS_font:Bold',sans-serif] text-[24px] text-white tracking-[-0.48px] whitespace-nowrap">
              다국어 UI 끄고 시작
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(StageSelector);
