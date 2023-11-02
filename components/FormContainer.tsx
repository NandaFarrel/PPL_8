import type { NextPage } from "next";
import SizeRegularTypePrimarySt from "./SizeRegularTypePrimarySt";

const FormContainer: NextPage = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[189px] h-24 overflow-hidden">
      <SizeRegularTypePrimarySt
        iconImageUrl="/pluscircle1.svg"
        label="BELUM AMBIL"
        customIconId="/pluscircle1.svg"
        trailingIcon={false}
        leadingIcon={false}
        sizeRegularTypePrimaryStHeight="48px"
        sizeRegularTypePrimaryStPosition="absolute"
        sizeRegularTypePrimaryStTop="0px"
        sizeRegularTypePrimaryStLeft="0px"
        sizeRegularTypePrimaryStWidth="189px"
        sizeRegularTypePrimaryStJustifyContent="flex-start"
        sizeRegularTypePrimaryStCursor="unset"
        sizeRegularTypePrimaryStBackgroundColor="#7b8595"
      />
      <div className="absolute top-[0px] left-[0px] rounded-lg bg-white w-[9px] h-12" />
      <SizeRegularTypePrimarySt
        iconImageUrl="/pluscircle1.svg"
        label="SEDANG AMBIL"
        customIconId="/pluscircle1.svg"
        trailingIcon={false}
        leadingIcon={false}
        sizeRegularTypePrimaryStHeight="48px"
        sizeRegularTypePrimaryStPosition="absolute"
        sizeRegularTypePrimaryStTop="48px"
        sizeRegularTypePrimaryStLeft="0px"
        sizeRegularTypePrimaryStWidth="189px"
        sizeRegularTypePrimaryStJustifyContent="flex-start"
        sizeRegularTypePrimaryStCursor="unset"
        sizeRegularTypePrimaryStBackgroundColor="#545f71"
      />
    </div>
  );
};

export default FormContainer;
