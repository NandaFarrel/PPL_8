import type { NextPage } from "next";
import SizeRegularTypePrimarySt from "./SizeRegularTypePrimarySt";

type POPUPSKRIPSIType = {
  onClose?: () => void;
};

const POPUPSKRIPSI: NextPage<POPUPSKRIPSIType> = ({ onClose }) => {
  return (
    <div className="relative w-[210px] h-[207px] max-w-full max-h-full overflow-auto">
      <img
        className="absolute top-[-21px] left-[-25px] w-[260px] h-[257px]"
        alt=""
        src="/rectangle-18.svg"
      />
      <SizeRegularTypePrimarySt
        iconImageUrl="/pluscircle1.svg"
        label="MENUNGGU SIDANG"
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
      <SizeRegularTypePrimarySt
        iconImageUrl="/pluscircle1.svg"
        label="BELUM AMBIL"
        customIconId="/pluscircle1.svg"
        trailingIcon={false}
        leadingIcon={false}
        sizeRegularTypePrimaryStHeight="48px"
        sizeRegularTypePrimaryStPosition="absolute"
        sizeRegularTypePrimaryStTop="7px"
        sizeRegularTypePrimaryStLeft="12px"
        sizeRegularTypePrimaryStWidth="189px"
        sizeRegularTypePrimaryStJustifyContent="flex-start"
        sizeRegularTypePrimaryStCursor="unset"
        sizeRegularTypePrimaryStBackgroundColor="#7b8595"
      />
      <div className="absolute top-[7px] left-[12px] rounded-lg bg-white w-[9px] h-12" />
      <SizeRegularTypePrimarySt
        iconImageUrl="/pluscircle1.svg"
        label="SEDANG AMBIL"
        customIconId="/pluscircle1.svg"
        trailingIcon={false}
        leadingIcon={false}
        sizeRegularTypePrimaryStHeight="48px"
        sizeRegularTypePrimaryStPosition="absolute"
        sizeRegularTypePrimaryStTop="55px"
        sizeRegularTypePrimaryStLeft="12px"
        sizeRegularTypePrimaryStWidth="189px"
        sizeRegularTypePrimaryStJustifyContent="flex-start"
        sizeRegularTypePrimaryStCursor="unset"
        sizeRegularTypePrimaryStBackgroundColor="#545f71"
      />
    </div>
  );
};

export default POPUPSKRIPSI;
