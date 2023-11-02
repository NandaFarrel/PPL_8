import type { NextPage } from "next";
import WebFrameDETACHAFTERPLACI from "../components/WebFrameDETACHAFTERPLACI";
import TypeEmpty from "../components/TypeEmpty";
import SizeRegularTypePrimarySt from "../components/SizeRegularTypePrimarySt";
import Image02Icon from "../components/Image02Icon";

const LOGIN: NextPage = () => {
  return (
    <div className="relative w-full h-[669px] text-left text-sm text-primary font-body-heavy">
      <WebFrameDETACHAFTERPLACI
        webFrameDETACHAFTERPLACIWidth="1059px"
        webFrameDETACHAFTERPLACIHeight="669px"
        webFrameDETACHAFTERPLACIPosition="absolute"
        webFrameDETACHAFTERPLACITop="0px"
        webFrameDETACHAFTERPLACILeft="0px"
        frameDivLeft="calc(50% - 232.5px)"
      />
      <TypeEmpty
        inputLabel="username"
        imageDimensions="/text-input1.svg"
        showInputLabel
        typeEmptyPosition="absolute"
        typeEmptyTop="278px"
        typeEmptyLeft="365px"
      />
      <div className="absolute top-[134px] left-[451px] tracking-[-0.02em] leading-[19px] font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap w-[172px]">
        Selamat Datang di CHIWA
      </div>
      <TypeEmpty
        inputLabel="password"
        imageDimensions="/text-input11.svg"
        showInputLabel
        typeEmptyPosition="absolute"
        typeEmptyTop="366px"
        typeEmptyLeft="365px"
      />
      <SizeRegularTypePrimarySt
        iconImageUrl="/pluscircle.svg"
        label="Login"
        customIconId="/pluscircle.svg"
        trailingIcon={false}
        leadingIcon={false}
        sizeRegularTypePrimaryStHeight="48px"
        sizeRegularTypePrimaryStPosition="absolute"
        sizeRegularTypePrimaryStTop="454px"
        sizeRegularTypePrimaryStLeft="456px"
        sizeRegularTypePrimaryStWidth="149px"
        sizeRegularTypePrimaryStJustifyContent="center"
        sizeRegularTypePrimaryStCursor="unset"
        sizeRegularTypePrimaryStBackgroundColor="#545f71"
      />
      <Image02Icon
        imageDimensions="/image021.svg"
        image02IconWidth="83px"
        image02IconHeight="77px"
        image02IconPosition="absolute"
        image02IconTop="159px"
        image02IconLeft="496px"
      />
    </div>
  );
};

export default LOGIN;
