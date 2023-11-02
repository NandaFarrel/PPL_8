import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type TypeDefaultType = {
  inputLabel?: string;
  inputText?: string;
  showInputLabel?: boolean;

  /** Style props */
  typeDefaultPosition?: CSSProperties["position"];
  typeDefaultTop?: CSSProperties["top"];
  typeDefaultLeft?: CSSProperties["left"];
};

const TypeDefault: NextPage<TypeDefaultType> = ({
  inputLabel = "Search",
  inputText = "Enter search terms",
  showInputLabel = true,
  typeDefaultPosition,
  typeDefaultTop,
  typeDefaultLeft,
}) => {
  const typeDefaultStyle: CSSProperties = useMemo(() => {
    return {
      position: typeDefaultPosition,
      top: typeDefaultTop,
      left: typeDefaultLeft,
    };
  }, [typeDefaultPosition, typeDefaultTop, typeDefaultLeft]);

  return (
    <div
      className="w-[345px] flex flex-col items-start justify-end gap-[7px] text-left text-sm text-primary font-body-heavy"
      style={typeDefaultStyle}
    >
      {showInputLabel && (
        <div className="relative tracking-[-0.02em] leading-[19px]">
          {inputLabel}
        </div>
      )}
      <div className="self-stretch rounded-md bg-white box-border h-12 flex flex-row items-start justify-start p-3 gap-[12px] text-base border-[1px] border-solid border-primary">
        <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
          {inputText}
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/search.svg"
        />
      </div>
    </div>
  );
};

export default TypeDefault;
