import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import WebFrameDETACHAFTERPLACI from "../components/WebFrameDETACHAFTERPLACI";
import SizeRegularTypePrimarySt from "../components/SizeRegularTypePrimarySt";
import TypeDefault from "../components/TypeDefault";
import Image02Icon from "../components/Image02Icon";

const DASHBOARDDEPARTEMEN: NextPage = () => {
  const router = useRouter();

  const onButtonContainerClick = useCallback(() => {
    router.push("/PROFILEDEPARTEMEN");
  }, [router]);

  const onButtonContainer1Click = useCallback(() => {
    router.push("/TABPKL");
  }, [router]);

  const onButtonContainer2Click = useCallback(() => {
    router.push("/TABPKL");
  }, [router]);

  const onButtonContainer4Click = useCallback(() => {
    router.push("/TABUSERSMAHASISWA");
  }, [router]);

  return (
    <div className="relative w-full h-[669px] text-left text-base text-black font-body-heavy">
      <WebFrameDETACHAFTERPLACI
        webFrameDETACHAFTERPLACIWidth="1059px"
        webFrameDETACHAFTERPLACIHeight="669px"
        webFrameDETACHAFTERPLACIPosition="absolute"
        webFrameDETACHAFTERPLACITop="0px"
        webFrameDETACHAFTERPLACILeft="0px"
        frameDivLeft="calc(50% - 232.5px)"
      />
      <div className="absolute top-[70px] left-[293px] rounded-smi bg-gainsboro w-[762px] h-[596px]" />
      <div className="absolute top-[112px] left-[4px] rounded-lg bg-primary w-[293px] h-[554px]" />
      <SizeRegularTypePrimarySt
        iconImageUrl="/pluscircle2.svg"
        customIconId="/pluscircle2.svg"
        trailingIcon={false}
        leadingIcon={false}
        sizeRegularTypePrimaryStHeight="61px"
        sizeRegularTypePrimaryStPosition="absolute"
        sizeRegularTypePrimaryStTop="64px"
        sizeRegularTypePrimaryStLeft="1px"
        sizeRegularTypePrimaryStWidth="1058px"
        sizeRegularTypePrimaryStJustifyContent="center"
        sizeRegularTypePrimaryStCursor="unset"
        sizeRegularTypePrimaryStBackgroundColor="#545f71"
      />
      <img
        className="absolute top-[70px] left-[24px] w-[45px] h-[42px] overflow-hidden"
        alt=""
        src="/image022.svg"
      />
      <div className="absolute top-[70px] left-[72px] tracking-[-0.02em] leading-[22px] font-medium text-white text-center flex items-center justify-center w-[61px] h-[38px] [-webkit-text-stroke:1px_rgba(0,_0,_0,_0)]">
        CHIWA
      </div>
      <TypeDefault
        inputLabel="Search"
        inputText="Search..."
        showInputLabel={false}
        typeDefaultPosition="absolute"
        typeDefaultTop="70px"
        typeDefaultLeft="311px"
      />
      <SizeRegularTypePrimarySt
        iconImageUrl="/pluscircle1.svg"
        label="Profile"
        customIconId="/pluscircle1.svg"
        trailingIcon={false}
        leadingIcon
        sizeRegularTypePrimaryStHeight="74px"
        sizeRegularTypePrimaryStPosition="absolute"
        sizeRegularTypePrimaryStTop="145px"
        sizeRegularTypePrimaryStLeft="8px"
        sizeRegularTypePrimaryStWidth="285px"
        sizeRegularTypePrimaryStJustifyContent="flex-start"
        sizeRegularTypePrimaryStCursor="pointer"
        sizeRegularTypePrimaryStBackgroundColor="#545f71"
        onButtonContainer1Click={onButtonContainerClick}
      />
      <SizeRegularTypePrimarySt
        iconImageUrl="/pluscircle1.svg"
        label="Skripsi"
        customIconId="/pluscircle1.svg"
        trailingIcon={false}
        leadingIcon
        sizeRegularTypePrimaryStHeight="74px"
        sizeRegularTypePrimaryStPosition="absolute"
        sizeRegularTypePrimaryStTop="434px"
        sizeRegularTypePrimaryStLeft="0px"
        sizeRegularTypePrimaryStWidth="296px"
        sizeRegularTypePrimaryStJustifyContent="flex-start"
        sizeRegularTypePrimaryStCursor="pointer"
        sizeRegularTypePrimaryStBackgroundColor="#545f71"
        onButtonContainer1Click={onButtonContainer1Click}
      />
      <SizeRegularTypePrimarySt
        iconImageUrl="/pluscircle1.svg"
        label="PKL"
        customIconId="/pluscircle1.svg"
        trailingIcon={false}
        leadingIcon
        sizeRegularTypePrimaryStHeight="74px"
        sizeRegularTypePrimaryStPosition="absolute"
        sizeRegularTypePrimaryStTop="360px"
        sizeRegularTypePrimaryStLeft="1px"
        sizeRegularTypePrimaryStWidth="296px"
        sizeRegularTypePrimaryStJustifyContent="flex-start"
        sizeRegularTypePrimaryStCursor="pointer"
        sizeRegularTypePrimaryStBackgroundColor="#545f71"
        onButtonContainer1Click={onButtonContainer2Click}
      />
      <SizeRegularTypePrimarySt
        iconImageUrl="/pluscircle1.svg"
        label="Dashboard"
        customIconId="/pluscircle1.svg"
        trailingIcon={false}
        leadingIcon
        sizeRegularTypePrimaryStHeight="74px"
        sizeRegularTypePrimaryStPosition="absolute"
        sizeRegularTypePrimaryStTop="199px"
        sizeRegularTypePrimaryStLeft="0px"
        sizeRegularTypePrimaryStWidth="297px"
        sizeRegularTypePrimaryStJustifyContent="flex-start"
        sizeRegularTypePrimaryStCursor="unset"
        sizeRegularTypePrimaryStBackgroundColor="#7b8595"
      />
      <SizeRegularTypePrimarySt
        iconImageUrl="/pluscircle1.svg"
        label="Users"
        customIconId="/pluscircle1.svg"
        trailingIcon={false}
        leadingIcon
        sizeRegularTypePrimaryStHeight="74px"
        sizeRegularTypePrimaryStPosition="absolute"
        sizeRegularTypePrimaryStTop="279px"
        sizeRegularTypePrimaryStLeft="4px"
        sizeRegularTypePrimaryStWidth="292px"
        sizeRegularTypePrimaryStJustifyContent="flex-start"
        sizeRegularTypePrimaryStCursor="pointer"
        sizeRegularTypePrimaryStBackgroundColor="#545f71"
        onButtonContainer1Click={onButtonContainer4Click}
      />
      <div className="absolute top-[200px] left-[1px] rounded-lg bg-white w-[7px] h-[73px]" />
      <div className="absolute top-[138px] left-[311px] bg-white w-[744px] h-[89px]" />
      <div className="absolute top-[160px] left-[406px] tracking-[-0.02em] leading-[22px] font-semibold">
        SEELE VOLLEREI
      </div>
      <div className="absolute top-[180px] left-[406px] text-[12px] tracking-[-0.02em] leading-[22px] font-light">
        NIP : 24060121140190 | DEPARTEMEN
      </div>
      <Image02Icon
        imageDimensions="/image023.svg"
        image02IconWidth="63px"
        image02IconHeight="63px"
        image02IconPosition="absolute"
        image02IconTop="151px"
        image02IconLeft="320px"
      />
    </div>
  );
};

export default DASHBOARDDEPARTEMEN;
