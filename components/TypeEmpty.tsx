import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type TypeEmptyType = {
  inputLabel?: string;
  imageDimensions?: string;
  showInputLabel?: boolean;

  /** Style props */
  typeEmptyPosition?: CSSProperties["position"];
  typeEmptyTop?: CSSProperties["top"];
  typeEmptyLeft?: CSSProperties["left"];
};

const TypeEmpty: NextPage<TypeEmptyType> = ({
  inputLabel = "Label",
  imageDimensions,
  showInputLabel = true,
  typeEmptyPosition,
  typeEmptyTop,
  typeEmptyLeft,
}) => {
  const typeEmptyStyle: CSSProperties = useMemo(() => {
    return {
      position: typeEmptyPosition,
      top: typeEmptyTop,
      left: typeEmptyLeft,
    };
  }, [typeEmptyPosition, typeEmptyTop, typeEmptyLeft]);

  return (
    <div
      className="w-[345px] flex flex-col items-start justify-end gap-[7px] text-left text-sm text-primary font-body-heavy"
      style={typeEmptyStyle}
    >
      {showInputLabel && (
        <div className="relative tracking-[-0.02em] leading-[19px]">
          {inputLabel}
        </div>
      )}
      <img
        className="self-stretch relative rounded-md max-w-full overflow-hidden h-12 shrink-0"
        alt=""
        src={imageDimensions}
      />
    </div>
  );
};

export default TypeEmpty;
