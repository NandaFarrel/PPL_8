import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type SizeRegularTypePrimaryStType = {
  iconImageUrl?: string;
  label?: string;
  customIconId?: string;
  trailingIcon?: boolean;
  leadingIcon?: boolean;

  /** Style props */
  sizeRegularTypePrimaryStHeight?: CSSProperties["height"];
  sizeRegularTypePrimaryStPosition?: CSSProperties["position"];
  sizeRegularTypePrimaryStTop?: CSSProperties["top"];
  sizeRegularTypePrimaryStLeft?: CSSProperties["left"];
  sizeRegularTypePrimaryStWidth?: CSSProperties["width"];
  sizeRegularTypePrimaryStJustifyContent?: CSSProperties["justifyContent"];
  sizeRegularTypePrimaryStCursor?: CSSProperties["cursor"];
  sizeRegularTypePrimaryStBackgroundColor?: CSSProperties["backgroundColor"];

  /** Action props */
  onButtonContainer1Click?: () => void;
};

const SizeRegularTypePrimarySt: NextPage<SizeRegularTypePrimaryStType> = ({
  iconImageUrl,
  label = "Button label",
  customIconId,
  trailingIcon = true,
  leadingIcon = true,
  sizeRegularTypePrimaryStHeight,
  sizeRegularTypePrimaryStPosition,
  sizeRegularTypePrimaryStTop,
  sizeRegularTypePrimaryStLeft,
  sizeRegularTypePrimaryStWidth,
  sizeRegularTypePrimaryStJustifyContent,
  sizeRegularTypePrimaryStCursor,
  sizeRegularTypePrimaryStBackgroundColor,
  onButtonContainer1Click,
}) => {
  const sizeRegularTypePrimaryStStyle: CSSProperties = useMemo(() => {
    return {
      height: sizeRegularTypePrimaryStHeight,
      position: sizeRegularTypePrimaryStPosition,
      top: sizeRegularTypePrimaryStTop,
      left: sizeRegularTypePrimaryStLeft,
      width: sizeRegularTypePrimaryStWidth,
      justifyContent: sizeRegularTypePrimaryStJustifyContent,
      cursor: sizeRegularTypePrimaryStCursor,
      backgroundColor: sizeRegularTypePrimaryStBackgroundColor,
    };
  }, [
    sizeRegularTypePrimaryStHeight,
    sizeRegularTypePrimaryStPosition,
    sizeRegularTypePrimaryStTop,
    sizeRegularTypePrimaryStLeft,
    sizeRegularTypePrimaryStWidth,
    sizeRegularTypePrimaryStJustifyContent,
    sizeRegularTypePrimaryStCursor,
    sizeRegularTypePrimaryStBackgroundColor,
  ]);

  return (
    <div
      className="rounded-md bg-primary h-12 overflow-hidden flex flex-row items-center justify-center py-3 px-4 box-border gap-[10px] text-left text-base text-white font-body-heavy"
      style={sizeRegularTypePrimaryStStyle}
      onClick={onButtonContainer1Click}
    >
      {leadingIcon && (
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src={iconImageUrl}
        />
      )}
      <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
        {label}
      </div>
      {trailingIcon && (
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src={customIconId}
        />
      )}
    </div>
  );
};

export default SizeRegularTypePrimarySt;
