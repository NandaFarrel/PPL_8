import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type TableExampleType = {
  text?: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  text6?: string;
  text7?: string;

  /** Style props */
  tableExamplePosition?: CSSProperties["position"];
  tableExampleTop?: CSSProperties["top"];
  tableExampleLeft?: CSSProperties["left"];
  tableExampleFlexShrink?: CSSProperties["flexShrink"];
};

const TableExample: NextPage<TableExampleType> = ({
  text,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  tableExamplePosition,
  tableExampleTop,
  tableExampleLeft,
  tableExampleFlexShrink,
}) => {
  const tableExampleStyle: CSSProperties = useMemo(() => {
    return {
      position: tableExamplePosition,
      top: tableExampleTop,
      left: tableExampleLeft,
      flexShrink: tableExampleFlexShrink,
    };
  }, [
    tableExamplePosition,
    tableExampleTop,
    tableExampleLeft,
    tableExampleFlexShrink,
  ]);

  return (
    <div
      className="rounded-xl bg-white w-[758px] h-[421px] overflow-hidden flex flex-row items-start justify-start text-left text-base text-primary font-body-heavy"
      style={tableExampleStyle}
    >
      <div className="w-[72px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
        <div className="self-stretch bg-white flex flex-row items-start justify-start py-3 px-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
            #
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">1</div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">2</div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">3</div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">4</div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">5</div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">6</div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4">
          <div className="relative tracking-[-0.02em] leading-[22px]">7</div>
        </div>
      </div>
      <div className="w-[190px] h-[428px] overflow-hidden shrink-0 flex flex-col items-start justify-start ml-[-17px]">
        <div className="self-stretch bg-white flex flex-row items-start justify-start py-3 px-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
            Name
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            Darlene Robertson
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            Ronald Richards
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            Jerome Bell
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            Robert Fox
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            Bessie Cooper
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            Kathryn Murphy
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            Courtney Henry
          </div>
        </div>
      </div>
      <div className="w-[146px] overflow-hidden shrink-0 flex flex-col items-start justify-start ml-[-17px]">
        <div className="self-stretch bg-white flex flex-row items-start justify-start py-3 px-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
            {text}
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">2798</div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">4600</div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">4846</div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">9151</div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">6025</div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">6065</div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4">
          <div className="relative tracking-[-0.02em] leading-[22px]">9261</div>
        </div>
      </div>
      <div className="w-[223px] h-[420px] overflow-hidden shrink-0 flex flex-col items-start justify-start ml-[-17px]">
        <div className="self-stretch bg-white flex flex-row items-start justify-start py-3 px-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
            TAHUN MASUK
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            02/07/1971
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            28/03/1968
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            12/08/1994
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            02/01/1980
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            27/11/1987
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            22/08/1969
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            20/06/1988
          </div>
        </div>
      </div>
      <div className="w-[289px] h-[420px] overflow-hidden shrink-0 flex flex-col items-start justify-start ml-[-17px]">
        <div className="self-stretch bg-white flex flex-row items-start justify-start py-3 px-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
            STATUS
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            {text1}
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            {text2}
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            {text3}
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            {text4}
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            {text5}
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            {text6}
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-row items-center justify-start p-4">
          <div className="relative tracking-[-0.02em] leading-[22px]">
            {text7}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableExample;
