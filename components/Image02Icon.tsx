import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type Image02IconType = {
  imageDimensions?: string;

  /** Style props */
  image02IconWidth?: CSSProperties["width"];
  image02IconHeight?: CSSProperties["height"];
  image02IconPosition?: CSSProperties["position"];
  image02IconTop?: CSSProperties["top"];
  image02IconLeft?: CSSProperties["left"];
};

const Image02Icon: NextPage<Image02IconType> = ({
  imageDimensions,
  image02IconWidth,
  image02IconHeight,
  image02IconPosition,
  image02IconTop,
  image02IconLeft,
}) => {
  const image02IconStyle: CSSProperties = useMemo(() => {
    return {
      width: image02IconWidth,
      height: image02IconHeight,
      position: image02IconPosition,
      top: image02IconTop,
      left: image02IconLeft,
    };
  }, [
    image02IconWidth,
    image02IconHeight,
    image02IconPosition,
    image02IconTop,
    image02IconLeft,
  ]);

  return (
    <img
      className="w-6 h-6 overflow-hidden"
      alt=""
      src={imageDimensions}
      style={image02IconStyle}
    />
  );
};

export default Image02Icon;
