import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type WebFrameDETACHAFTERPLACIType = {
  /** Style props */
  webFrameDETACHAFTERPLACIWidth?: CSSProperties["width"];
  webFrameDETACHAFTERPLACIHeight?: CSSProperties["height"];
  webFrameDETACHAFTERPLACIPosition?: CSSProperties["position"];
  webFrameDETACHAFTERPLACITop?: CSSProperties["top"];
  webFrameDETACHAFTERPLACILeft?: CSSProperties["left"];
  frameDivLeft?: CSSProperties["left"];
};

const WebFrameDETACHAFTERPLACI: NextPage<WebFrameDETACHAFTERPLACIType> = ({
  webFrameDETACHAFTERPLACIWidth,
  webFrameDETACHAFTERPLACIHeight,
  webFrameDETACHAFTERPLACIPosition,
  webFrameDETACHAFTERPLACITop,
  webFrameDETACHAFTERPLACILeft,
  frameDivLeft,
}) => {
  const webFrameDETACHAFTERPLACIStyle: CSSProperties = useMemo(() => {
    return {
      width: webFrameDETACHAFTERPLACIWidth,
      height: webFrameDETACHAFTERPLACIHeight,
      position: webFrameDETACHAFTERPLACIPosition,
      top: webFrameDETACHAFTERPLACITop,
      left: webFrameDETACHAFTERPLACILeft,
    };
  }, [
    webFrameDETACHAFTERPLACIWidth,
    webFrameDETACHAFTERPLACIHeight,
    webFrameDETACHAFTERPLACIPosition,
    webFrameDETACHAFTERPLACITop,
    webFrameDETACHAFTERPLACILeft,
  ]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      left: frameDivLeft,
    };
  }, [frameDivLeft]);

  return (
    <div
      className="rounded-2xl box-border w-[1280px] h-[840px] overflow-hidden text-center text-lg text-primary font-body-heavy border-[4px] border-solid border-primary"
      style={webFrameDETACHAFTERPLACIStyle}
    >
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-tertiary h-16 overflow-hidden">
        <img
          className="absolute top-[24px] left-[24px] w-16 h-4"
          alt=""
          src="/group-3.svg"
        />
        <div className="absolute w-[calc(100%_+_2px)] right-[-1px] bottom-[-1px] left-[-1px] box-border h-0.5 border-t-[2px] border-solid border-primary" />
        <div
          className="absolute top-[14px] left-[calc(50%_-_233px)] rounded-3xs bg-white w-[466px] h-9 overflow-hidden"
          style={frameDivStyle}
        >
          <div className="absolute top-[0px] left-[calc(50%_-_233px)] tracking-[-0.02em] leading-[22px] font-medium flex items-center justify-center w-[466px] h-9">
            websitename.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebFrameDETACHAFTERPLACI;
