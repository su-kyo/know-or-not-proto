import svgPaths from "./svg-02xih2nv8j";
import imgInputText from "figma:asset/c525837af345f4c9a7636d629dea2a6699465f2c.png";

function Description() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="description">
      <div className="flex flex-col font-['NPS_font:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fdfbfd] text-[24px] tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-none">생각한 어휘를 입력해보세요!</p>
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
    <div className="content-stretch flex flex-col items-center justify-center leading-[0] relative shrink-0 w-[518px] whitespace-nowrap" data-name="texts">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#ffd400] text-[40px] tracking-[-0.8px]">
        <p className="leading-[1.2]">기회</p>
      </div>
      <div className="flex flex-col font-['Noto_Sans_KR:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[16px] text-white tracking-[-0.32px]">
        <p className="leading-[1.5]">ㄱㅎ</p>
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

function InfoBoxContainer() {
  return (
    <div className="bg-[#fdfbfd] relative rounded-[12px] shrink-0 w-full" data-name="info-box-container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-center justify-center px-[25px] py-[20px] relative w-full">
          <Toggles />
          <Meaning />
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
    <div className="bg-[#7300ff] content-stretch flex h-[55px] items-center justify-center px-[40px] py-[12px] relative rounded-[16px] shrink-0" data-name="button">
      <div className="flex flex-col font-['NPS_font:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-none">제출하기</p>
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
      <div className="bg-[#5800c3] content-stretch flex flex-col items-start pb-[8px] relative rounded-[16px] shrink-0" data-name="button">
        <Button />
      </div>
    </div>
  );
}

function TopSad() {
  return (
    <div className="absolute inset-[3.09%_22.72%_69.42%_22.62%]" data-name="top_sad">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 188.336 94.7102">
        <g id="top_sad">
          <path d={svgPaths.p13de6680} fill="var(--fill-0, #30471C)" id="Vector" />
          <path d={svgPaths.p2f07f00} fill="var(--fill-0, #30471C)" id="Vector_2" />
          <path d={svgPaths.p1e155f00} fill="var(--fill-0, #42612B)" id="Vector_3" />
          <path d={svgPaths.p1bad500} fill="var(--fill-0, #5B7332)" id="Vector_4" />
          <path d={svgPaths.p315a1f00} fill="var(--fill-0, #42612B)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function BodySad() {
  return (
    <div className="absolute inset-[26.66%_4.97%_2.14%_7.02%]" data-name="body_sad">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 303.181 245.314">
        <g id="body_sad">
          <path d={svgPaths.p12d4a400} fill="var(--fill-0, #873F1A)" id="Vector" />
          <path d={svgPaths.p6e91d00} fill="var(--fill-0, #873F1A)" id="Vector_2" />
          <path d={svgPaths.p26a7d080} fill="var(--fill-0, #6E2B15)" id="Vector_3" />
          <path d={svgPaths.p1e255180} fill="var(--fill-0, #6E2B15)" id="Vector_4" />
          <path d={svgPaths.p37a6b800} fill="var(--fill-0, #93561D)" id="Vector_5" />
          <path d={svgPaths.p15061d00} fill="var(--fill-0, #93561D)" id="Vector_6" />
          <path d={svgPaths.p100c100} fill="var(--fill-0, #97481C)" id="Vector_7" />
          <path d={svgPaths.p2fae1000} fill="var(--fill-0, #97481C)" id="Vector_8" />
          <path d={svgPaths.p22bda900} fill="var(--fill-0, #7E391D)" id="Vector_9" />
          <path d={svgPaths.pd48c100} fill="var(--fill-0, #7E391D)" id="Vector_10" />
          <path d={svgPaths.p1ee06d40} fill="var(--fill-0, #995C1D)" id="Vector_11" />
          <path d={svgPaths.p1b70e700} fill="var(--fill-0, #995C1D)" id="Vector_12" />
          <path d={svgPaths.p1e7e8800} fill="var(--fill-0, #965424)" id="Vector_13" />
          <g id="Group">
            <path d={svgPaths.p28d75500} fill="var(--fill-0, #9C5717)" id="Vector_14" />
            <path d={svgPaths.p57595c0} fill="var(--fill-0, #A16424)" id="Vector_15" />
            <path d={svgPaths.p2868fd00} fill="var(--fill-0, #92411D)" id="Vector_16" />
            <path d={svgPaths.p1fc0080} fill="var(--fill-0, #9B6823)" id="Vector_17" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FaceSad() {
  return (
    <div className="absolute inset-[44.71%_21.71%_16.51%_24.63%]" data-name="face_sad">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 184.879 133.623">
        <g id="face_sad">
          <path d={svgPaths.p21c8e480} fill="var(--fill-0, #986921)" id="Vector" />
          <path d={svgPaths.p78b6600} fill="var(--fill-0, #9B5913)" id="Vector_2" />
          <path d={svgPaths.p3a2ae480} fill="var(--fill-0, #3B1910)" id="Vector_3" />
          <path d={svgPaths.p48e1680} fill="var(--fill-0, #3B1910)" id="Vector_4" />
          <path d={svgPaths.p3d1f54c0} fill="var(--fill-0, #3B1910)" id="Vector_5" />
          <path d={svgPaths.p1bc7dc00} fill="var(--fill-0, #662D0E)" id="Vector_6" />
          <path d={svgPaths.p3dcbab00} fill="var(--fill-0, #662D0E)" id="Vector_7" />
          <path d={svgPaths.p37570c00} fill="var(--fill-0, #3A1910)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function TopHappy() {
  return (
    <div className="absolute inset-[3.09%_22.72%_69.42%_22.62%]" data-name="top_happy">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 188.336 94.7102">
        <g id="top_happy">
          <path d={svgPaths.p2f07f00} fill="var(--fill-0, #4A681F)" id="Vector" />
          <path d={svgPaths.p315a1f00} fill="var(--fill-0, #527527)" id="Vector_2" />
          <path d={svgPaths.p13de6680} fill="var(--fill-0, #527133)" id="Vector_3" />
          <path d={svgPaths.p1e155f00} fill="var(--fill-0, #668D39)" id="Vector_4" />
          <path d={svgPaths.p1bad500} fill="var(--fill-0, #87AD45)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function BodyHappy() {
  return (
    <div className="absolute inset-[26.66%_4.97%_2.14%_7.02%]" data-name="body_happy">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 303.181 245.314">
        <g id="body_happy">
          <path d={svgPaths.p12d4a400} fill="var(--fill-0, #ED7B1D)" id="Vector" />
          <path d={svgPaths.p6e91d00} fill="var(--fill-0, #ED7B1D)" id="Vector_2" />
          <path d={svgPaths.p26a7d080} fill="var(--fill-0, #DC6723)" id="Vector_3" />
          <path d={svgPaths.p1e255180} fill="var(--fill-0, #DC6723)" id="Vector_4" />
          <path d={svgPaths.p37a6b800} fill="var(--fill-0, #F59831)" id="Vector_5" />
          <path d={svgPaths.p15061d00} fill="var(--fill-0, #F59831)" id="Vector_6" />
          <path d={svgPaths.p100c100} fill="var(--fill-0, #F48723)" id="Vector_7" />
          <path d={svgPaths.p2fae1000} fill="var(--fill-0, #F48723)" id="Vector_8" />
          <path d={svgPaths.p22bda900} fill="var(--fill-0, #E86E20)" id="Vector_9" />
          <path d={svgPaths.pd48c100} fill="var(--fill-0, #E86E20)" id="Vector_10" />
          <path d={svgPaths.p1ee06d40} fill="var(--fill-0, #F59D2D)" id="Vector_11" />
          <path d={svgPaths.p1b70e700} fill="var(--fill-0, #F59D2D)" id="Vector_12" />
          <path d={svgPaths.p28d75500} fill="var(--fill-0, #F99423)" id="Vector_13" />
          <path d={svgPaths.p1e7e8800} fill="var(--fill-0, #F59834)" id="Vector_14" />
          <path d={svgPaths.p57595c0} fill="var(--fill-0, #FAA73A)" id="Vector_15" />
          <path d={svgPaths.p2868fd00} fill="var(--fill-0, #EF7422)" id="Vector_16" />
          <path d={svgPaths.p1fc0080} fill="var(--fill-0, #FEAB3D)" id="Vector_17" />
        </g>
      </svg>
    </div>
  );
}

function FaceSmile() {
  return (
    <div className="absolute inset-[44.85%_24.54%_17.83%_26.34%]" data-name="face_smile">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 169.203 128.601">
        <g id="face_smile">
          <path d={svgPaths.p112dc600} fill="var(--fill-0, #FDF396)" id="Vector" />
          <path d={svgPaths.p1d723a80} fill="var(--fill-0, #F4AA1B)" id="Vector_2" />
          <path d={svgPaths.p37d96680} fill="var(--fill-0, #F4C113)" id="Vector_3" />
          <path d={svgPaths.p28a97000} fill="var(--fill-0, #F4C113)" id="Vector_4" />
          <path d={svgPaths.p2b9e0900} fill="var(--fill-0, #FCF093)" id="Vector_5" />
          <path d={svgPaths.p347d1b00} fill="var(--fill-0, #FCF093)" id="Vector_6" />
          <path d={svgPaths.p35f64180} fill="var(--fill-0, #FBEE7D)" id="Vector_7" />
          <g id="Group">
            <path d={svgPaths.p247bc170} fill="var(--fill-0, #FCBF11)" id="Vector_8" />
            <path d={svgPaths.pb3746c0} fill="var(--fill-0, #FCBF11)" id="Vector_9" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function InputText() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center py-[32px] relative size-full" data-name="input-text_오답 효과">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgInputText} />
      <Container />
      <div className="absolute flex items-center justify-center left-[-93px] size-[424.578px] top-[467px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "57" } as React.CSSProperties}>
        <div className="flex-none rotate-[15.63deg]">
          <div className="overflow-clip relative size-[344.515px]" data-name="life">
            <TopSad />
            <BodySad />
            <FaceSad />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1057px] size-[424.578px] top-[467px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "57" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[164.37deg]">
          <div className="overflow-clip relative size-[344.515px]" data-name="life">
            <TopHappy />
            <BodyHappy />
            <FaceSmile />
          </div>
        </div>
      </div>
    </div>
  );
}