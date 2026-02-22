import { useState, useEffect } from 'react';
import svgPaths from "../../imports/svg-wfcwqkio8l";
import InfoBox from './InfoBox';
import RiveGhostPair from './RiveGhostPair';

interface Stage1InitialProps {
  onKnowClick: () => void;
  onDontKnowClick: () => void;
  onMaterialClick: (material: string) => void;
  multilingualUI: boolean;
}

export default function Stage1Initial({ onKnowClick, onDontKnowClick, onMaterialClick, multilingualUI }: Stage1InitialProps) {
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [ghostsVisible, setGhostsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setDescriptionVisible(true), 100);
    setTimeout(() => setContentVisible(true), 300);
    setTimeout(() => setGhostsVisible(true), 600);
  }, []);

  return (
    /*
     * min-h-screen: always fills the viewport; grows if content is taller.
     * relative: anchor for the absolutely-positioned RiveGhostPair.
     * overflow: visible: lets ghost canvases render outside stage bounds.
     */
    <div className="flex flex-col items-center py-[32px] relative min-h-screen w-full" style={{ overflow: 'visible' }}>

      {/* Responsive content wrapper — caps at 800px, min 640px. my-auto centers when viewport is taller; collapses to top-align when content is taller */}
      <div
        className={`flex flex-col gap-[16px] items-center justify-center px-[16px] pb-[64px] my-auto relative w-full max-w-[800px] min-w-[640px] transition-opacity duration-500 ${descriptionVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="flex flex-col font-['NPS_font:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fdfbfd] text-[24px] tracking-[-0.48px] whitespace-nowrap">
            <p className="leading-none">이 정보를 보고 어떤 어휘인지 알 수 있나요?</p>
          </div>
        </div>

        <div className={`flex flex-col gap-[16px] items-center w-full transition-all duration-700 ease-out ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col isolate items-center pb-[24px] relative shrink-0 w-full">
            {/* Progress */}
            <div className="flex items-end mb-[-24px] relative shrink-0 z-[2]">
              <div className="h-[37.391px] relative shrink-0 w-[100px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 37.3913">
                  <g clipPath="url(#clip0_1_605)">
                    <path d={svgPaths.p3aea93f0} fill="#985C54" />
                    <path d={svgPaths.p7297a00} fill="#B66F56" />
                  </g>
                  <defs><clipPath id="clip0_1_605"><rect fill="white" height="37.3913" width="100" /></clipPath></defs>
                </svg>
              </div>
              <div className="bg-[#b3745d] flex font-['NPS_font:ExtraBold',sans-serif] gap-[2px] items-center justify-center leading-[0] not-italic py-[8px] relative rounded-[16px] shrink-0 text-[16px] text-white tracking-[-0.32px] w-[72px] whitespace-nowrap">
                <div className="flex flex-col justify-center relative shrink-0"><p className="leading-none">3</p></div>
                <div className="flex flex-col justify-center relative shrink-0"><p className="leading-none">/</p></div>
                <div className="flex flex-col justify-center relative shrink-0"><p className="leading-none">10</p></div>
              </div>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="h-[37.391px] relative w-[100px]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 37.3913">
                      <g clipPath="url(#clip0_1_571)">
                        <path d={svgPaths.p3aea93f0} fill="#985C54" />
                        <path d={svgPaths.p7297a00} fill="#B66F56" />
                      </g>
                      <defs><clipPath id="clip0_1_571"><rect fill="white" height="37.3913" width="100" /></clipPath></defs>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Word Display Box */}
            <div className="bg-[#bb765d] mb-[-24px] relative rounded-[20px] shrink-0 w-full z-[1]">
              <div className="flex flex-col items-start p-[8px] relative w-full">
                <div className="bg-[#593745] relative rounded-[12px] shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="flex items-center justify-center pb-[12px] pt-[24px] px-[16px] relative w-full">
                      <div className="flex flex-col items-center justify-center relative shrink-0 w-[518px]">
                        <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-white tracking-[-0.8px] whitespace-nowrap">
                          <p className="leading-[1.2]">ㄱㅎ</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <InfoBox
            selectedTab={1}
            showExamples={false}
            onMaterialClick={onMaterialClick}
            multilingualUI={multilingualUI}
          />
        </div>
      </div>

      {/*
        Ghost pair — absolutely positioned at the BOTTOM of this stage div.
        RiveGhostPair itself is a full-width bar with a centered max-w container.
      */}
      <RiveGhostPair
        visible={ghostsVisible}
        onKnowClick={onKnowClick}
        onDontKnowClick={onDontKnowClick}
      />
    </div>
  );
}
