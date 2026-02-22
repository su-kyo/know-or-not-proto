import { useState, useRef, useEffect } from "react";
import svgPaths from "../../imports/svg-v8q8v7mu8t";
import InfoBox from "./InfoBox";
import LifePumpkin from "./LifePumpkin";

interface Stage2InputProps {
  showExamples: boolean;
  livesRemaining: number;
  onWrongAnswer: () => void;
  onCorrectAnswer: () => void;
  onMaterialClick: (material: string) => void;
  isTransitioning: boolean;
  pumpkinsExiting: boolean;
  multilingualUI: boolean;
  shakingPumpkin?: 'left' | 'right' | null;
  instantExamplesReveal?: boolean;
}

export default function Stage2Input({
  showExamples,
  livesRemaining,
  onWrongAnswer,
  onCorrectAnswer,
  onMaterialClick,
  isTransitioning,
  pumpkinsExiting,
  multilingualUI,
  shakingPumpkin = null,
  instantExamplesReveal = false,
}: Stage2InputProps) {
  const [inputValue, setInputValue] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [inputColor, setInputColor] = useState("white");
  const [initialConsonantsSmall, setInitialConsonantsSmall] = useState(false);
  const [showCompletionWord, setShowCompletionWord] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => setInitialConsonantsSmall(true), 300);
    setTimeout(() => inputRef.current?.focus(), 500);
  }, []);

  useEffect(() => {
    if (isTransitioning) setShowCompletionWord(true);
  }, [isTransitioning]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const normalizedInput = inputValue.trim().toLowerCase();
    if (normalizedInput === "경험") {
      setInputColor("#00E92B");
      setTimeout(() => onCorrectAnswer(), 500);
    } else {
      setInputColor("#FFD400");
      setIsShaking(true);
      onWrongAnswer();
      setTimeout(() => {
        setIsShaking(false);
        setInputColor("white");
        setInputValue("");
      }, 600);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    /*
     * min-h-screen + relative: stage fills viewport, is the anchor for
     * absolute-positioned pumpkins.
     */
    <div className="flex flex-col items-center py-[32px] relative h-screen w-full overflow-y-auto">

      {/* Responsive content wrapper — my-auto centers when viewport is taller; collapses to top-align when content is taller */}
      <div
        className={`flex flex-col gap-[16px] items-center justify-center px-[16px] pb-[64px] my-auto relative w-full max-w-[800px] min-w-[640px] transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
      >
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="flex flex-col font-['NPS_font:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fdfbfd] text-[24px] tracking-[-0.48px] whitespace-nowrap">
            <p className="leading-none">
              {showExamples ? "어떤 어휘인지 보고, 직접 입력해보세요!" : "생각한 어휘를 입력해보세요!"}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[16px] items-center w-full">
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

            {/* Word Display + Input */}
            <div className="bg-[#bb765d] mb-[-24px] relative rounded-[20px] shrink-0 w-full z-[1]">
              <div className="flex flex-col items-start p-[8px] relative w-full">
                <div className="bg-[#593745] relative rounded-[12px] shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="flex items-center justify-center pb-[12px] pt-[24px] px-[16px] relative w-full">
                      <div className={`flex flex-col items-center justify-center leading-[0] relative shrink-0 text-white w-[518px] whitespace-nowrap transition-all duration-300 ${isShaking ? "animate-shake" : ""}`}>
                        <div className="relative w-full flex flex-col items-center">
                          {!showCompletionWord ? (
                            <>
                              <input
                                ref={inputRef}
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="정답을 입력해주세요"
                                className="bg-transparent border-none outline-none text-center font-['Noto_Sans_KR:Bold',sans-serif] font-bold text-[40px] tracking-[-0.8px] w-full transition-colors duration-300 input-with-placeholder"
                                style={{ color: inputColor, caretColor: "white" }}
                              />
                              <div className={`flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative text-[16px] tracking-[-0.32px] transition-all duration-300 ${initialConsonantsSmall ? "opacity-100 mt-1" : "opacity-0 -mt-2"}`}>
                                <p className="leading-[1.5]">ㄱㅎ</p>
                              </div>
                            </>
                          ) : (
                            <div className="flex flex-col items-center">
                              <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[40px] tracking-[-0.8px]" style={{ color: inputColor }}>
                                <p className="leading-[1.2]">경험</p>
                              </div>
                              <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] tracking-[-0.32px] opacity-0">
                                <p className="leading-[1.5]">experience</p>
                              </div>
                            </div>
                          )}
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
            showExamples={showExamples}
            onMaterialClick={onMaterialClick}
            multilingualUI={multilingualUI}
            instantReveal={instantExamplesReveal}
          />

          <div className="bg-[#5800c3] flex flex-col items-start pb-[8px] relative rounded-[16px] shrink-0">
            <button
              onClick={handleSubmit}
              className="bg-[#7300ff] flex h-[55px] items-center justify-center px-[40px] py-[12px] relative rounded-[16px] shrink-0 cursor-pointer hover:bg-[#8000ff] transition-colors"
            >
              <div className="flex flex-col font-['NPS_font:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.48px] whitespace-nowrap">
                <p className="leading-none">제출하기</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/*
        Life Pumpkins — siblings to content wrapper, anchored to stage bottom.
        NOT inside the isTransitioning opacity div so they can exit independently.

        isActive logic:
          lives = 2 → both bright   (left: 2≥1✓, right: 2≥2✓)
          lives = 1 → right goes dark (left: 1≥1✓, right: 1≥2✗)
          lives = 0 → both dark, then both exit with animation
      */}
      {!showExamples && (
        <>
          <LifePumpkin position="left" isActive={livesRemaining >= 2} isExiting={pumpkinsExiting} isShaking={shakingPumpkin === 'left'} />
          <LifePumpkin position="right" isActive={livesRemaining >= 1} isExiting={pumpkinsExiting} isShaking={shakingPumpkin === 'right'} />
        </>
      )}
    </div>
  );
}
