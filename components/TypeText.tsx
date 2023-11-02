import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type TypeTextType = {
  tableLabel?: string;

  /** Style props */
  typeTextAlignItems?: CSSProperties["alignItems"];
  typeTextPadding?: CSSProperties["padding"];
  typeTextBorderBottom?: CSSProperties["borderBottom"];
  typeTextAlignSelf?: CSSProperties["alignSelf"];
  typeTextWidth?: CSSProperties["width"];
  typeTextPosition?: CSSProperties["position"];
  typeTextTop?: CSSProperties["top"];
  typeTextLeft?: CSSProperties["left"];
  typeTextHeight?: CSSProperties["height"];
  textFontWeight?: CSSProperties["fontWeight"];
  textWebkitTextStroke?: CSSProperties["webkitTextStroke"];
};

const TypeText: NextPage<TypeTextType> = ({
  tableLabel,
  typeTextAlignItems,
  typeTextPadding,
  typeTextBorderBottom,
  typeTextAlignSelf,
  typeTextWidth,
  typeTextPosition,
  typeTextTop,
  typeTextLeft,
  typeTextHeight,
  textFontWeight,
  textWebkitTextStroke,
}) => {
  const typeTextStyle: CSSProperties = useMemo(() => {
    return {
      alignItems: typeTextAlignItems,
      padding: typeTextPadding,
      borderBottom: typeTextBorderBottom,
      alignSelf: typeTextAlignSelf,
      width: typeTextWidth,
      position: typeTextPosition,
      top: typeTextTop,
      left: typeTextLeft,
      height: typeTextHeight,
    };
  }, [
    typeTextAlignItems,
    typeTextPadding,
    typeTextBorderBottom,
    typeTextAlignSelf,
    typeTextWidth,
    typeTextPosition,
    typeTextTop,
    typeTextLeft,
    typeTextHeight,
  ]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: textFontWeight,
      webkitTextStroke: textWebkitTextStroke,
    };
  }, [textFontWeight, textWebkitTextStroke]);

  return (
    <div
      className="bg-white box-border flex flex-row items-center justify-start p-4 text-left text-base text-primary font-body-heavy self-stretch border-b-[1px] border-solid border-secondary"
      style={typeTextStyle}
    >
      <div
        className="relative tracking-[-0.02em] leading-[22px]"
        style={textStyle}
      >
        {tableLabel}
      </div>
    </div>
  );
};

export default TypeText;
