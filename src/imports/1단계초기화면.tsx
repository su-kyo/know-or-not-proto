import svgPaths from "./svg-wfcwqkio8l";
import img1 from "figma:asset/c525837af345f4c9a7636d629dea2a6699465f2c.png";

function Description() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="description">
      <div className="flex flex-col font-['NPS_font:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fdfbfd] text-[24px] tracking-[-0.48px] whitespace-nowrap">
        <p className="leading-none">이 정보를 보고 어떤 어휘인지 알 수 있나요?</p>
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
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[518px]" data-name="texts">
      <div className="flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[40px] text-white tracking-[-0.8px] whitespace-nowrap">
        <p className="leading-[1.2]">ㄱㅎ</p>
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

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[16px] relative shrink-0 w-[800px]" data-name="container">
      <Description />
      <div className="content-stretch flex flex-col isolate items-center pb-[24px] relative shrink-0 w-full" data-name="word-display">
        <Progress />
        <WordDisplayBox />
      </div>
      <InfoBox />
    </div>
  );
}

function HatBackCopy() {
  return (
    <div className="absolute inset-[11.67%_34.91%_58.38%_9.33%]" data-name="hat_back copy">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 177.328 95.2368">
        <g id="hat_back copy">
          <path d={svgPaths.p5167180} fill="var(--fill-0, #16336D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute inset-[13.46%_29.1%_18.19%_5.82%]" data-name="body">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 206.968 217.362">
        <g>
          <path d={svgPaths.p81df500} fill="var(--fill-0, #E6D5D1)" id="Vector" />
          <path d={svgPaths.p285df980} fill="var(--fill-0, #F7ECE7)" id="Vector_2" />
          <path d={svgPaths.p1da8fc00} fill="var(--fill-0, #FCA193)" id="Vector_3" />
          <path d={svgPaths.p374c8d00} fill="var(--fill-0, #FCA193)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function EyesOpen() {
  return (
    <div className="absolute inset-[23.14%_44.6%_67.47%_33.71%]" data-name="eyes_open">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.9782 29.8681">
        <g id="eyes_open">
          <path d={svgPaths.p1e312680} fill="var(--fill-0, #352A3B)" id="Vector" />
          <path d={svgPaths.p31504780} fill="var(--fill-0, #352A3B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MouthClose() {
  return (
    <div className="absolute inset-[32.28%_50.6%_65.64%_41.48%]" data-name="mouth_close">
      <div className="absolute inset-[-42.11%_-11.06%_-42.1%_-11.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.7394 12.1747">
          <g id="mouth_close">
            <path d={svgPaths.p2a166100} id="Vector" stroke="var(--stroke-0, #352A3B)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5.565" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[31.26%_49.48%_62.24%_40.99%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.3133 20.6914">
        <g id="Group">
          <path d={svgPaths.p25cb7400} fill="var(--fill-0, #691F38)" id="Vector" />
          <path d={svgPaths.p404e400} fill="var(--fill-0, #E1595E)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MouthOpen() {
  return (
    <div className="absolute contents inset-[31.26%_49.48%_62.24%_40.99%]" data-name="mouth_open">
      <Group />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[4.55%_52.08%_70.38%_8.58%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125.106 79.7119">
        <g id="Group">
          <path d={svgPaths.pddc680} fill="var(--fill-0, #5682E0)" id="Vector" />
          <path d={svgPaths.p20044e00} fill="var(--fill-0, #769AF1)" id="Vector_2" />
          <path d={svgPaths.p1c543700} fill="var(--fill-0, #3762C0)" id="Vector_3" />
          <path d={svgPaths.p5c94b00} fill="var(--fill-0, #1F4399)" id="Vector_4" />
          <g id="Group_2">
            <path d={svgPaths.p2a219580} fill="var(--fill-0, #ED8148)" id="Vector_5" />
            <path d={svgPaths.p32281700} fill="var(--fill-0, #FB985B)" id="Vector_6" />
            <path d={svgPaths.p34ed99c0} fill="var(--fill-0, #FBB97E)" id="Vector_7" />
            <path d={svgPaths.p19fb5e00} fill="var(--fill-0, #D97041)" id="Vector_8" />
          </g>
          <path d={svgPaths.p159bae00} fill="var(--fill-0, #1B3D8D)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[11.67%_34.98%_59.13%_9.33%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 177.104 92.8617">
        <g id="Group">
          <path d={svgPaths.p990d500} fill="var(--fill-0, #4F78D4)" id="Vector" />
          <path d={svgPaths.p1457af00} fill="var(--fill-0, #21408E)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[4.55%_34.98%_59.13%_8.58%]" data-name="Group">
      <Group2 />
      <Group3 />
    </div>
  );
}

function Hat() {
  return (
    <div className="absolute contents inset-[4.55%_34.98%_59.13%_8.58%]" data-name="hat">
      <Group1 />
    </div>
  );
}

function Panel() {
  return (
    <div className="absolute inset-[35.98%_9.28%_1.41%_23.25%]" data-name="panel">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 214.578 199.112">
        <g id="panel">
          <path d={svgPaths.p2838be80} fill="var(--fill-0, #9B5E3B)" id="Vector" />
          <path d={svgPaths.p14760080} fill="var(--fill-0, #DE9450)" id="Vector_2" />
          <path d={svgPaths.p3db9e300} fill="var(--fill-0, #A26237)" id="Vector_3" />
          <path d={svgPaths.p29cd7280} fill="var(--fill-0, #C27C49)" id="Vector_4" />
          <g id="Group">
            <path d={svgPaths.p37e3ab80} fill="var(--fill-0, #A26237)" id="Vector_5" opacity="0.48" />
            <path d={svgPaths.pd485580} fill="var(--fill-0, #A26237)" id="Vector_6" opacity="0.48" />
            <path d={svgPaths.pc5a56c0} fill="var(--fill-0, #A26237)" id="Vector_7" opacity="0.48" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MessageO() {
  return (
    <div className="absolute inset-[44.29%_16.46%_9.71%_35.3%]" data-name="message_o">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153.415 146.275">
        <g id="message_o">
          <path d={svgPaths.p283f5f60} fill="var(--fill-0, #A26237)" id="Vector" opacity="0.48" />
          <g id="texts">
            <path d={svgPaths.p31b172c0} fill="var(--fill-0, #301808)" id="Vector_2" />
            <g id="Group">
              <path d={svgPaths.p1fbb3180} fill="var(--fill-0, white)" id="Vector_3" />
              <path d={svgPaths.pd76200} fill="var(--fill-0, white)" id="Vector_4" />
              <path d={svgPaths.p32eeaf00} fill="var(--fill-0, white)" id="Vector_5" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Arm() {
  return (
    <div className="absolute inset-[46.45%_64.26%_39.15%_23.7%]" data-name="arm">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.2837 45.7814">
        <g id="arm">
          <path d={svgPaths.p31683900} fill="var(--fill-0, #F7ECE7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Hand() {
  return (
    <div className="absolute inset-[32.59%_21.69%_57.41%_66.27%]" data-name="hand">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.293 31.779">
        <g id="hand">
          <path d={svgPaths.pbad4600} fill="var(--fill-0, #F7ECE7)" id="Vector" />
          <path d={svgPaths.p3a415480} fill="var(--fill-0, #EFE2DA)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function HatBack() {
  return (
    <div className="absolute inset-[11.67%_34.91%_58.38%_9.33%]" data-name="hat_back">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 177.328 95.2368">
        <g id="hat_back">
          <path d={svgPaths.p5167180} fill="var(--fill-0, #462259)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Body1() {
  return (
    <div className="absolute inset-[13.46%_29.1%_18.19%_5.82%]" data-name="body">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 206.968 217.362">
        <g>
          <path d={svgPaths.p81df500} fill="var(--fill-0, #E6D5D1)" id="Vector" />
          <path d={svgPaths.p285df980} fill="var(--fill-0, #F7ECE7)" id="Vector_2" />
          <path d={svgPaths.p1da8fc00} fill="var(--fill-0, #FCA193)" id="Vector_3" />
          <path d={svgPaths.p374c8d00} fill="var(--fill-0, #FCA193)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function EyesOpen1() {
  return (
    <div className="absolute inset-[23.14%_44.6%_67.47%_33.71%]" data-name="eyes_open">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.9782 29.8681">
        <g id="eyes_open">
          <path d={svgPaths.p1e312680} fill="var(--fill-0, #352A3B)" id="Vector" />
          <path d={svgPaths.p31504780} fill="var(--fill-0, #352A3B)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MouthClose1() {
  return (
    <div className="absolute inset-[32.28%_50.6%_65.64%_41.48%]" data-name="mouth_close">
      <div className="absolute inset-[-42.11%_-11.06%_-42.1%_-11.05%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.7394 12.1747">
          <g id="mouth_close">
            <path d={svgPaths.p2a166100} id="Vector" stroke="var(--stroke-0, #352A3B)" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="5.565" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[31.26%_49.48%_62.24%_40.99%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.3133 20.6914">
        <g id="Group">
          <path d={svgPaths.p25cb7400} fill="var(--fill-0, #691F38)" id="Vector" />
          <path d={svgPaths.p404e400} fill="var(--fill-0, #E1595E)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MouthOpen1() {
  return (
    <div className="absolute contents inset-[31.26%_49.48%_62.24%_40.99%]" data-name="mouth_open">
      <Group4 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[4.55%_52.08%_70.38%_8.58%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 125.106 79.7119">
        <g id="Group">
          <path d={svgPaths.pddc680} fill="var(--fill-0, #9057A6)" id="Vector" />
          <path d={svgPaths.p20044e00} fill="var(--fill-0, #BD85C1)" id="Vector_2" />
          <path d={svgPaths.p1c543700} fill="var(--fill-0, #673F82)" id="Vector_3" />
          <path d={svgPaths.p5c94b00} fill="var(--fill-0, #502A66)" id="Vector_4" />
          <g id="Group_2">
            <path d={svgPaths.p2a219580} fill="var(--fill-0, #ED8148)" id="Vector_5" />
            <path d={svgPaths.p32281700} fill="var(--fill-0, #FB985B)" id="Vector_6" />
            <path d={svgPaths.p34ed99c0} fill="var(--fill-0, #FBB97E)" id="Vector_7" />
            <path d={svgPaths.p19fb5e00} fill="var(--fill-0, #D97041)" id="Vector_8" />
          </g>
          <path d={svgPaths.p159bae00} fill="var(--fill-0, #422253)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[11.67%_34.98%_59.13%_9.33%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 177.104 92.8617">
        <g id="Group">
          <path d={svgPaths.p990d500} fill="var(--fill-0, #8F55A4)" id="Vector" />
          <path d={svgPaths.p1457af00} fill="var(--fill-0, #462259)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents inset-[4.55%_34.98%_59.13%_8.58%]" data-name="Group">
      <Group6 />
      <Group7 />
    </div>
  );
}

function HatCopy() {
  return (
    <div className="absolute contents inset-[4.55%_34.98%_59.13%_8.58%]" data-name="hat copy">
      <Group5 />
    </div>
  );
}

function Panel1() {
  return (
    <div className="absolute inset-[35.98%_9.28%_1.41%_23.25%]" data-name="panel">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 214.578 199.112">
        <g id="panel">
          <path d={svgPaths.p2838be80} fill="var(--fill-0, #9B5E3B)" id="Vector" />
          <path d={svgPaths.p14760080} fill="var(--fill-0, #DE9450)" id="Vector_2" />
          <path d={svgPaths.p3db9e300} fill="var(--fill-0, #A26237)" id="Vector_3" />
          <path d={svgPaths.p29cd7280} fill="var(--fill-0, #C27C49)" id="Vector_4" />
          <g id="Group">
            <path d={svgPaths.p37e3ab80} fill="var(--fill-0, #A26237)" id="Vector_5" opacity="0.48" />
            <path d={svgPaths.pd485580} fill="var(--fill-0, #A26237)" id="Vector_6" opacity="0.48" />
            <path d={svgPaths.pc5a56c0} fill="var(--fill-0, #A26237)" id="Vector_7" opacity="0.48" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="relative size-full" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 89.2639 140.826">
        <g id="Group" opacity="0.48">
          <path clipRule="evenodd" d={svgPaths.p38fc6a00} fill="var(--fill-0, #A26237)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p187a7900} fill="var(--fill-0, #A26237)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Texts1() {
  return (
    <div className="relative size-full" data-name="texts">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 154.438 62.6024">
        <g id="texts">
          <path d={svgPaths.p16888500} fill="var(--fill-0, #301808)" id="Vector" />
          <g id="Group">
            <path d={svgPaths.p3bcd6b20} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p236e6480} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p62a0800} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MessageX() {
  return (
    <div className="absolute contents inset-[44.29%_16.3%_11.43%_35.13%]" data-name="message_x">
      <div className="absolute flex inset-[44.29%_26.55%_11.43%_45.38%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[140.826px] rotate-180 w-[89.264px]">
          <Group8 />
        </div>
      </div>
      <div className="absolute flex inset-[57.44%_16.3%_22.87%_35.13%] items-center justify-center">
        <div className="-scale-y-100 flex-none h-[62.602px] rotate-180 w-[154.438px]">
          <Texts1 />
        </div>
      </div>
    </div>
  );
}

function Arm1() {
  return (
    <div className="absolute inset-[46.45%_64.26%_39.15%_23.7%]" data-name="arm">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.2837 45.7814">
        <g id="arm">
          <path d={svgPaths.p31683900} fill="var(--fill-0, #F7ECE7)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Hand1() {
  return (
    <div className="absolute inset-[32.59%_21.69%_57.41%_66.27%]" data-name="hand">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.293 31.779">
        <g id="hand">
          <path d={svgPaths.pbad4600} fill="var(--fill-0, #F7ECE7)" id="Vector" />
          <path d={svgPaths.p3a415480} fill="var(--fill-0, #EFE2DA)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center py-[32px] relative size-full" data-name="1단계_초기 화면">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      <Container />
      <div className="absolute bottom-[40px] left-[40px] overflow-clip size-[318px]" data-name="ghost">
        <HatBackCopy />
        <Body />
        <EyesOpen />
        <MouthClose />
        <MouthOpen />
        <Hat />
        <Panel />
        <MessageO />
        <Arm />
        <Hand />
      </div>
      <div className="absolute bottom-[40px] flex items-center justify-center right-[40px] size-[318px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="overflow-clip relative size-[318px]" data-name="ghost">
            <HatBack />
            <Body1 />
            <EyesOpen1 />
            <MouthClose1 />
            <MouthOpen1 />
            <HatCopy />
            <Panel1 />
            <MessageX />
            <Arm1 />
            <Hand1 />
          </div>
        </div>
      </div>
    </div>
  );
}