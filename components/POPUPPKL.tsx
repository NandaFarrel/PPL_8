import type { NextPage } from "next";
import SizeRegularTypePrimarySt from "./SizeRegularTypePrimarySt";

type POPUPPKLType = {
  onClose?: () => void;
};

const POPUPPKL: NextPage<POPUPPKLType> = ({ onClose }) => {
  return (
    <div className="relative w-[210px] h-[207px] max-w-full max-h-full overflow-auto text-left text-base text-white font-body-heavy">
      <img
        className="absolute top-[-21px] left-[-25px] w-[260px] h-[257px]"
        alt=""
        src="/rectangle-18.svg"
      />
      <SizeRegularTypePrimarySt
        iconImageUrl="/pluscircle1.svg"
        label="MENUNGGU SEMINAR"
        customIconId="/pluscircle1.svg"
        trailingIcon={false}
        leadingIcon={false}
        sizeRegularTypePrimaryStHeight="48px"
        sizeRegularTypePrimaryStPosition="absolute"
        sizeRegularTypePrimaryStTop="100px"
        sizeRegularTypePrimaryStLeft="11px"
        sizeRegularTypePrimaryStWidth="191px"
        sizeRegularTypePrimaryStJustifyContent="flex-start"
        sizeRegularTypePrimaryStCursor="unset"
        sizeRegularTypePrimaryStBackgroundColor="#545f71"
      />
      <SizeRegularTypePrimarySt
        iconImageUrl="/pluscircle1.svg"
        label="LULUS"
        customIconId="/pluscircle1.svg"
        trailingIcon={false}
        leadingIcon={false}
        sizeRegularTypePrimaryStHeight="48px"
        sizeRegularTypePrimaryStPosition="absolute"
        sizeRegularTypePrimaryStTop="148px"
        sizeRegularTypePrimaryStLeft="11px"
        sizeRegularTypePrimaryStWidth="191px"
        sizeRegularTypePrimaryStJustifyContent="flex-start"
        sizeRegularTypePrimaryStCursor="unset"
        sizeRegularTypePrimaryStBackgroundColor="#545f71"
      />
      <div className="absolute top-[14px] left-[13px] rounded-md bg-lightslategray w-[189px] h-12 overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px]">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle1.svg"
        />
        <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
          BELUM AMBIL
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle1.svg"
        />
      </div>
      <div className="absolute top-[14px] left-[13px] rounded-lg bg-white w-[9px] h-12" />
      <div className="absolute top-[62px] left-[13px] rounded-md bg-primary w-[189px] h-12 overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px]">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle1.svg"
        />
        <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
          SEDANG AMBIL
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle1.svg"
        />
      </div>
    </div>
  );
};

export default POPUPPKL;
