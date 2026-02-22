import svgPaths from "./svg-xh57xpmy13";
import img3 from "figma:asset/c525837af345f4c9a7636d629dea2a6699465f2c.png";

function Description() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="description">
      <div className="flex flex-col font-['NPS_font:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fdfbfd] text-[24px] tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-none">정답입니다! 다음 문제를 풀어보세요.</p>
      </div>
    </div>
  );
}

function Deco() {
  return (
    <div className="h-[37.391px] relative shrink-0 w-[100px]" data-name="deco">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 37.3913">
        <g clipPath="url(#clip0_1_605)" id="deco">
          <path d={svgPaths.p3aea93f0} fill="var(--fill-0, #985C54)" id="Vector" />
          <path d={svgPaths.p7297a00} fill="var(--fill-0, #B66F56)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_605">
            <rect fill="white" height="37.3913" width="100" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function QuestionCounter() {
  return (
    <div className="bg-[#b3745d] content-stretch flex font-['NPS_font:ExtraBold',sans-serif] gap-[2px] items-center justify-center leading-[0] not-italic py-[8px] relative rounded-[16px] shrink-0 text-[16px] text-white tracking-[-0.32px] w-[72px] whitespace-nowrap" data-name="question-counter">
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
  );
}

function Deco1() {
  return (
    <div className="h-[37.391px] relative w-[100px]" data-name="deco">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 37.3913">
        <g clipPath="url(#clip0_1_571)" id="deco">
          <path d={svgPaths.p3aea93f0} fill="var(--fill-0, #985C54)" id="Vector" />
          <path d={svgPaths.p7297a00} fill="var(--fill-0, #B66F56)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_571">
            <rect fill="white" height="37.3913" width="100" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Progress() {
  return (
    <div className="content-stretch flex items-end mb-[-24px] relative shrink-0 z-[2]" data-name="progress">
      <Deco />
      <QuestionCounter />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Deco1 />
        </div>
      </div>
    </div>
  );
}

function Texts() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[0] relative shrink-0 text-white w-[518px] whitespace-nowrap" data-name="texts">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[40px] tracking-[-0.8px]">
        <p className="leading-[1.2]">경험</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] tracking-[-0.32px]">
        <p className="leading-[1.5]">experience</p>
      </div>
    </div>
  );
}

function TextsContainer() {
  return (
    <div className="bg-[#593745] relative rounded-[12px] shrink-0 w-full" data-name="texts-container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[12px] pt-[24px] px-[16px] relative w-full">
          <Texts />
        </div>
      </div>
    </div>
  );
}

function WordDisplayBox() {
  return (
    <div className="bg-[#bb765d] mb-[-24px] relative rounded-[20px] shrink-0 w-full z-[1]" data-name="word-display-box">
      <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
        <TextsContainer />
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="tabs">
      <button className="bg-[#804529] content-stretch cursor-pointer flex items-center justify-center px-[20px] py-[4px] relative rounded-[8px] shrink-0" data-name="tab">
        <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">
          <p className="leading-[1.5]">뜻 1</p>
        </div>
      </button>
      <div className="bg-[#f2e1d9] content-stretch flex items-center justify-center px-[20px] py-[4px] relative rounded-[8px] shrink-0" data-name="tab">
        <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#804529] text-[16px] text-center tracking-[-0.32px] whitespace-nowrap">
          <p className="leading-[1.5]">뜻 2</p>
        </div>
      </div>
    </div>
  );
}

function Multiple() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="multiple">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="multiple">
          <path d={svgPaths.p3253c180} fill="var(--fill-0, #804529)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Toggles() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="toggles">
      <Tabs />
      <div className="bg-[#f2e1d9] content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] relative rounded-[8px] shrink-0" data-name="additional">
        <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#804529] text-[16px] text-center tracking-[-0.32px] whitespace-nowrap">
          <p className="leading-[1.5]">추가 자료</p>
        </div>
        <Multiple />
      </div>
    </div>
  );
}

function Meaning() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold items-center justify-center leading-[0] relative shrink-0 w-full" data-name="meaning">
      <div className="flex flex-col justify-center relative shrink-0 text-[#373878] text-[24px] tracking-[-0.48px] w-full">
        <p className="leading-[1.5] whitespace-pre-wrap">자신이 실제로 해 보거나 겪어 봄. 또는 거기서 얻은 지식이나 기능.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#918ea9] text-[0px] tracking-[-0.32px] w-full">
        <p className="font-['Noto_Sans_KR:Regular',sans-serif] font-normal leading-[1.5] text-[16px] whitespace-pre-wrap">{`Something you've actually done or experienced. Or the knowledge or skills you've gained from it.`}</p>
      </div>
    </div>
  );
}

function Example() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="example">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center relative shrink-0 text-[#785037] text-[20px] tracking-[-0.4px] w-full">
        <p className="whitespace-pre-wrap">
          <span className="leading-[1.5]">{`실전 `}</span>
          <span className="decoration-solid font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.5] underline">경험</span>
          <span className="leading-[1.5]">이 많은 노병사.</span>
        </p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0 text-[#918ea9] text-[16px] tracking-[-0.32px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">a veteran soldier with a lot of hands-on experience.</p>
      </div>
    </div>
  );
}

function Example1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="example">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center relative shrink-0 text-[#785037] text-[20px] tracking-[-0.4px] w-full">
        <p className="whitespace-pre-wrap">
          <span className="leading-[1.5]">{`그동안의 `}</span>
          <span className="decoration-solid font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.5] underline">경험</span>
          <span className="leading-[1.5]">을 살려서 한번 잘 해 보시오.</span>
        </p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0 text-[#918ea9] text-[16px] tracking-[-0.32px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">Take advantage of your experience and do well.</p>
      </div>
    </div>
  );
}

function Example2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="example">
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] justify-center relative shrink-0 text-[#785037] text-[20px] tracking-[-0.4px] w-full">
        <p className="whitespace-pre-wrap">
          <span className="leading-[1.5]">{`내 `}</span>
          <span className="decoration-solid font-['Noto_Sans_KR:Bold',sans-serif] font-bold leading-[1.5] underline">경험</span>
          <span className="leading-[1.5]">에 비추어 볼 때, 이 일은 혼자 힘으로는 할 수 없다.</span>
        </p>
      </div>
      <div className="flex flex-col font-['Roboto:Regular',sans-serif] justify-center relative shrink-0 text-[#918ea9] text-[16px] tracking-[-0.32px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[1.5] whitespace-pre-wrap">In my experience, this job cannot be done on its own.</p>
      </div>
    </div>
  );
}

function ExampleList() {
  return (
    <div className="bg-[#f5f4e4] relative rounded-[9px] shrink-0 w-full" data-name="example-list">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col font-normal gap-[16px] items-center justify-center leading-[0] p-[12px] relative w-full">
          <Example />
          <Example1 />
          <Example2 />
        </div>
      </div>
    </div>
  );
}

function InfoBoxContainer() {
  return (
    <div className="bg-[#fdfbfd] relative rounded-[12px] shrink-0 w-full" data-name="info-box-container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center px-[25px] py-[20px] relative w-full">
          <Toggles />
          <Meaning />
          <ExampleList />
        </div>
      </div>
    </div>
  );
}

function InfoBox() {
  return (
    <div className="bg-[#d49b7f] relative rounded-[20px] shrink-0 w-full" data-name="info-box">
      <div className="content-stretch flex flex-col items-start p-[10px] relative w-full">
        <InfoBoxContainer />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#01b145] content-stretch flex h-[55px] items-center justify-center px-[40px] py-[12px] relative rounded-[16px] shrink-0" data-name="button">
      <div className="flex flex-col font-['NPS_font:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-none">다음 문제</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] relative shrink-0 w-[800px]" data-name="container">
      <Description />
      <div className="content-stretch flex flex-col isolate items-center pb-[24px] relative shrink-0 w-full" data-name="word-display">
        <Progress />
        <WordDisplayBox />
      </div>
      <InfoBox />
      <div className="bg-[#009238] content-stretch flex flex-col items-start pb-[8px] relative rounded-[16px] shrink-0" data-name="button">
        <Button />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[32px] relative size-full" data-name="3단계_문항완료">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
      <Container />
    </div>
  );
}