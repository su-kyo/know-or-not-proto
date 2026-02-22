import { useState } from 'react';
import svgPaths from "../../imports/svg-wfcwqkio8l";

interface InfoBoxProps {
  selectedTab: number;
  showExamples: boolean;
  onMaterialClick: (material: string) => void;
  multilingualUI: boolean;
  instantReveal?: boolean;
}

const meaningData = [
  {
    korean: "자신이 실제로 해 보거나 겪어 봄. 또는 거기서 얻은 지식이나 기능.",
    english: "Something you've actually done or experienced. Or the knowledge or skills you've gained from it.",
    examples: [
      {
        korean: "실전 경험이 많은 노병사.",
        english: "A veteran soldier with a lot of hands-on experience."
      },
      {
        korean: "그동안의 경험을 살려서 한번 잘 해 보시오.",
        english: "Take advantage of your experience and do well."
      },
      {
        korean: "내 경험에 비추어 볼 때, 이 일은 혼자 힘으로는 할 수 없다.",
        english: "In my experience, this job cannot be done on its own."
      }
    ]
  },
  {
    korean: "객관적 대상에 대한 감각이나 지각 작용에 의하여 깨닫게 되는 내용.",
    english: "Content realized through sensory or perceptual awareness of an objective object.",
    examples: [
      {
        korean: "경험과 직관.",
        english: "Experience and intuition."
      }
    ]
  }
];

export default function InfoBox({ selectedTab, showExamples, onMaterialClick, multilingualUI, instantReveal = false }: InfoBoxProps) {
  const [currentTab, setCurrentTab] = useState(selectedTab);
  const [materialsOpen, setMaterialsOpen] = useState(false);
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);
  const [hoveredMaterial, setHoveredMaterial] = useState<string | null>(null);

  const currentMeaning = meaningData[currentTab - 1];

  return (
    <div className="bg-[#d49b7f] relative rounded-[20px] shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[10px] relative w-full">
        <div className="bg-[#fdfbfd] relative rounded-[12px] shrink-0 w-full">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col gap-[12px] items-center justify-center px-[25px] py-[20px] relative w-full">
              {/* Toggles */}
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                {/* Tabs */}
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <button
                    onClick={() => setCurrentTab(1)}
                    onMouseEnter={() => setHoveredTab(1)}
                    onMouseLeave={() => setHoveredTab(null)}
                    className={`content-stretch cursor-pointer flex items-center justify-center px-[20px] py-[4px] relative rounded-[8px] shrink-0 transition-colors ${
                      currentTab === 1
                        ? 'bg-[#804529]'
                        : hoveredTab === 1
                        ? 'bg-[#a05a3a]'
                        : 'bg-[#f2e1d9]'
                    }`}
                  >
                    <div className={`flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center tracking-[-0.32px] whitespace-nowrap ${
                      currentTab === 1 ? 'text-white' : 'text-[#804529]'
                    }`}>
                      <p className="leading-[1.5]">뜻 1</p>
                    </div>
                  </button>
                  <button
                    onClick={() => setCurrentTab(2)}
                    onMouseEnter={() => setHoveredTab(2)}
                    onMouseLeave={() => setHoveredTab(null)}
                    className={`content-stretch cursor-pointer flex items-center justify-center px-[20px] py-[4px] relative rounded-[8px] shrink-0 transition-colors ${
                      currentTab === 2
                        ? 'bg-[#804529]'
                        : hoveredTab === 2
                        ? 'bg-[#a05a3a]'
                        : 'bg-[#f2e1d9]'
                    }`}
                  >
                    <div className={`flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center tracking-[-0.32px] whitespace-nowrap ${
                      currentTab === 2 ? 'text-white' : 'text-[#804529]'
                    }`}>
                      <p className="leading-[1.5]">뜻 2</p>
                    </div>
                  </button>
                </div>

                {/* Additional Materials */}
                <div className="relative">
                  <button
                    onClick={() => setMaterialsOpen(!materialsOpen)}
                    className="bg-[#f2e1d9] content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#e8d7cf] transition-colors"
                  >
                    {materialsOpen && (
                      <div aria-hidden="true" className="absolute border-2 border-[#804529] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    )}
                    <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#804529] text-[16px] text-center tracking-[-0.32px] whitespace-nowrap">
                      <p className="leading-[1.5]">추가 자료</p>
                    </div>
                    <div className="relative shrink-0 size-[16px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                        <g>
                          <path d={svgPaths.p3253c180} fill="#804529" />
                        </g>
                      </svg>
                    </div>
                  </button>

                  {/* Dropdown */}
                  {materialsOpen && (
                    <div className="absolute bg-[#f2e1d9] content-stretch flex flex-col items-start p-[2px] rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] top-[36px] right-0 z-10">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shrink-0 w-full">
                        <button
                          onClick={() => {
                            onMaterialClick('영상 1번');
                            setMaterialsOpen(false);
                          }}
                          onMouseEnter={() => setHoveredMaterial('영상 1번')}
                          onMouseLeave={() => setHoveredMaterial(null)}
                          className={`content-stretch cursor-pointer flex h-[32px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0 w-[110px] transition-colors ${
                            hoveredMaterial === '영상 1번' ? 'bg-[#f8c2a8]' : 'bg-[#f2e1d9]'
                          }`}
                        >
                          <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#804529] text-[16px] text-center tracking-[-0.32px]">
                            <p className="leading-[1.5] whitespace-pre-wrap">영상 1번</p>
                          </div>
                        </button>
                        <button
                          onClick={() => {
                            onMaterialClick('이미지 2번');
                            setMaterialsOpen(false);
                          }}
                          onMouseEnter={() => setHoveredMaterial('이미지 2번')}
                          onMouseLeave={() => setHoveredMaterial(null)}
                          className={`content-stretch cursor-pointer flex h-[32px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0 w-[110px] transition-colors ${
                            hoveredMaterial === '이미지 2번' ? 'bg-[#f8c2a8]' : 'bg-[#f2e1d9]'
                          }`}
                        >
                          <div className="flex flex-[1_0_0] flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#804529] text-[16px] text-center tracking-[-0.32px]">
                            <p className="leading-[1.5] whitespace-pre-wrap">이미지 2번</p>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Meaning */}
              <div className="content-stretch flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold items-center justify-center leading-[0] relative shrink-0 w-full">
                <div className="flex flex-col justify-center relative shrink-0 text-[#373878] text-[24px] tracking-[-0.48px] w-full">
                  <p className="leading-[1.5] whitespace-pre-wrap">{currentMeaning.korean}</p>
                </div>
                {multilingualUI && (
                  <div className="flex flex-col justify-center relative shrink-0 text-[#918ea9] text-[0px] tracking-[-0.32px] w-full">
                    <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] text-[16px] whitespace-pre-wrap">
                      {currentMeaning.english}
                    </p>
                  </div>
                )}
              </div>

              {/* Examples — max-height transition for smooth reveal (skipped when instantReveal) */}
              <div
                style={{
                  maxHeight: showExamples ? '600px' : '0px',
                  opacity: showExamples ? 1 : 0,
                  overflow: 'hidden',
                  transition: instantReveal ? 'none' : 'max-height 0.35s ease-out, opacity 0.3s ease-out',
                  width: '100%',
                }}
              >
              {true && (
                <div
                  className="bg-[#f5f4e4] relative rounded-[9px] shrink-0 w-full"
                  style={{
                    transform: showExamples ? 'translateY(0)' : 'translateY(8px)',
                    transition: instantReveal ? 'none' : 'transform 0.3s ease-out',
                  }}
                >
                  <div className="flex flex-col items-center justify-center size-full">
                    <div className="content-stretch flex flex-col font-normal gap-[16px] items-center justify-center leading-[0] p-[12px] relative w-full">
                      {currentMeaning.examples.map((example, idx) => (
                        <div key={idx} className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
                          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center relative shrink-0 text-[#785037] text-[20px] tracking-[-0.4px] w-full">
                            <p className="whitespace-pre-wrap">
                              {example.korean.split('경험').map((part, i, arr) => (
                                <span key={i} className="leading-[1.5]">
                                  {part}
                                  {i < arr.length - 1 && (
                                    <span className="decoration-solid font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.5] underline">
                                      경험
                                    </span>
                                  )}
                                </span>
                              ))}
                            </p>
                          </div>
                          {multilingualUI && (
                            <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0 text-[#918ea9] text-[16px] tracking-[-0.32px] w-full">
                              <p className="leading-[1.5] whitespace-pre-wrap">{example.english}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              </div>{/* end max-height transition wrapper */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
