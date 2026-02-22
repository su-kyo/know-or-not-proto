import { useState, useEffect } from 'react';
import svgPaths from "../../imports/svg-xh57xpmy13";
import InfoBox from './InfoBox';

interface Stage3CompletionProps {
  onMaterialClick: (material: string) => void;
  multilingualUI: boolean;
  instantReveal?: boolean;
  onNextQuestion: () => void;
}

export default function Stage3Completion({ onMaterialClick, multilingualUI, instantReveal = false, onNextQuestion }: Stage3CompletionProps) {
  const [isVisible, setIsVisible] = useState(instantReveal);

  useEffect(() => {
    if (!instantReveal) {
      setTimeout(() => setIsVisible(true), 50);
    }
  }, [instantReveal]);

  return (
    <div className="flex flex-col items-center py-[32px] relative min-h-screen w-full">
      <div className={`content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] my-auto relative shrink-0 w-[800px] ${instantReveal ? '' : 'transition-all duration-[600ms] ease-out'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
          <div className="flex flex-col font-['NPS_font:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fdfbfd] text-[24px] tracking-[-0.48px] whitespace-nowrap">
            <p className="leading-none">정답입니다! 다음 문제를 풀어보세요.</p>
          </div>
        </div>

        <div className="content-stretch flex flex-col gap-[16px] items-center w-full">
          <div className="content-stretch flex flex-col isolate items-center pb-[24px] relative shrink-0 w-full">
            {/* Progress */}
            <div className="content-stretch flex items-end mb-[-24px] relative shrink-0 z-[2]">
              <div className="h-[37.391px] relative shrink-0 w-[100px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 37.3913">
                  <g clipPath="url(#clip0_1_605)">
                    <path d={svgPaths.p3aea93f0} fill="#985C54" />
                    <path d={svgPaths.p7297a00} fill="#B66F56" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_605">
                      <rect fill="white" height="37.3913" width="100" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="bg-[#b3745d] content-stretch flex font-['NPS_font:ExtraBold',sans-serif] gap-[2px] items-center justify-center leading-[0] not-italic py-[8px] relative rounded-[16px] shrink-0 text-[16px] text-white tracking-[-0.32px] w-[72px] whitespace-nowrap">
                <div className="flex flex-col justify-center relative shrink-0">
                  <p className="leading-none">3</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0">
                  <p className="leading-none">/</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0">
                  <p className="leading-none">10</p>
                </div>
              </div>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="h-[37.391px] relative w-[100px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 37.3913">
                      <g clipPath="url(#clip0_1_571)">
                        <path d={svgPaths.p3aea93f0} fill="#985C54" />
                        <path d={svgPaths.p7297a00} fill="#B66F56" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_571">
                          <rect fill="white" height="37.3913" width="100" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Word Display Box */}
            <div className="bg-[#bb765d] mb-[-24px] relative rounded-[20px] shrink-0 w-full z-[1]">
              <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
                <div className="bg-[#593745] relative rounded-[12px] shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center pb-[12px] pt-[24px] px-[16px] relative w-full">
                      <div className="content-stretch flex flex-col items-center justify-center leading-[0] relative shrink-0 text-white w-[518px] whitespace-nowrap">
                        <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[40px] tracking-[-0.8px]">
                          <p className="leading-[1.2]">경험</p>
                        </div>
                        {multilingualUI && (
                          <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] tracking-[-0.32px]">
                            <p className="leading-[1.5]">experience</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <InfoBox
            selectedTab={1}
            showExamples={true}
            onMaterialClick={onMaterialClick}
            multilingualUI={multilingualUI}
          />

          <div className="bg-[#009238] content-stretch flex flex-col items-start pb-[8px] relative rounded-[16px] shrink-0">
            <button onClick={onNextQuestion} className="bg-[#01b145] content-stretch flex h-[55px] items-center justify-center px-[40px] py-[12px] relative rounded-[16px] shrink-0 cursor-pointer hover:bg-[#02c450] transition-colors">
              <div className="flex flex-col font-['NPS_font:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.48px] whitespace-nowrap">
                <p className="leading-none">다음 문제</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
