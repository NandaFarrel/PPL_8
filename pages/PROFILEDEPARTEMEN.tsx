import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import WebFrameDETACHAFTERPLACI from "../components/WebFrameDETACHAFTERPLACI";
import SizeRegularTypePrimarySt from "../components/SizeRegularTypePrimarySt";
import TypeDefault from "../components/TypeDefault";
import Image02Icon from "../components/Image02Icon";
import TypeText from "../components/TypeText";
import FormContainer from "../components/FormContainer";

const PROFILEDEPARTEMEN: NextPage = () => {
  const router = useRouter();

  const onButtonContainer1Click = useCallback(() => {
    router.push("/TABPKL");
  }, [router]);

  const onButtonContainer2Click = useCallback(() => {
    router.push("/TABPKL");
  }, [router]);

  const onButtonContainer3Click = useCallback(() => {
    router.push("/DASHBOARDDEPARTEMEN");
  }, [router]);

  const onButtonContainer4Click = useCallback(() => {
    router.push("/TABUSERSMAHASISWA");
  }, [router]);

  const onButtonContainer5Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="relative w-full h-[666px] text-center text-base text-white font-body-heavy">
      <div className="absolute top-[0px] left-[0px] w-[1059px] h-[669px] overflow-hidden" />
      <div className="absolute top-[1065px] left-[5239px] w-[189px] h-24 overflow-hidden" />
      <div className="absolute top-[0px] left-[0px] w-[1059px] h-[669px] overflow-hidden" />
      <div className="absolute top-[1065px] left-[5239px] w-[189px] h-24 overflow-hidden" />
      <div className="absolute top-[0px] left-[0px] w-[1059px] h-[669px] overflow-hidden" />
      <div className="absolute top-[1065px] left-[5239px] w-[189px] h-24 overflow-hidden" />
      <div className="absolute top-[0px] left-[0px] w-[1059px] h-[669px] overflow-hidden" />
      <div className="absolute top-[1065px] left-[5239px] w-[189px] h-24 overflow-hidden" />
      <div className="absolute top-[0px] left-[0px] w-[1059px] h-[669px] overflow-hidden" />
      <div className="absolute top-[1065px] left-[5239px] w-[189px] h-24 overflow-hidden" />
      <div className="absolute top-[0px] left-[0px] w-[1059px] h-[669px] overflow-hidden" />
      <div className="absolute top-[1065px] left-[5239px] w-[189px] h-24 overflow-hidden" />
      <div className="absolute top-[0px] left-[0px] w-[1059px] h-[669px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] w-[1059px] h-[669px] overflow-hidden" />
        <div className="absolute top-[0px] left-[0px] w-[1059px] h-[669px] overflow-hidden">
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
          <div className="absolute top-[132px] left-[305px] rounded-2xl bg-white w-[750px] h-[534px]" />
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
          <div className="absolute top-[70px] left-[72px] tracking-[-0.02em] leading-[22px] font-medium flex items-center justify-center w-[61px] h-[38px] [-webkit-text-stroke:1px_rgba(0,_0,_0,_0)]">
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
            sizeRegularTypePrimaryStTop="125px"
            sizeRegularTypePrimaryStLeft="0px"
            sizeRegularTypePrimaryStWidth="297px"
            sizeRegularTypePrimaryStJustifyContent="flex-start"
            sizeRegularTypePrimaryStCursor="unset"
            sizeRegularTypePrimaryStBackgroundColor="#7b8595"
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
            sizeRegularTypePrimaryStCursor="pointer"
            sizeRegularTypePrimaryStBackgroundColor="#545f71"
            onButtonContainer1Click={onButtonContainer3Click}
          />
          <SizeRegularTypePrimarySt
            iconImageUrl="/pluscircle1.svg"
            label="Users"
            customIconId="/pluscircle1.svg"
            trailingIcon={false}
            leadingIcon
            sizeRegularTypePrimaryStHeight="74px"
            sizeRegularTypePrimaryStPosition="absolute"
            sizeRegularTypePrimaryStTop="273px"
            sizeRegularTypePrimaryStLeft="0px"
            sizeRegularTypePrimaryStWidth="297px"
            sizeRegularTypePrimaryStJustifyContent="flex-start"
            sizeRegularTypePrimaryStCursor="pointer"
            sizeRegularTypePrimaryStBackgroundColor="#545f71"
            onButtonContainer1Click={onButtonContainer4Click}
          />
          <div className="absolute top-[126px] left-[0px] rounded-lg bg-white w-[7px] h-[73px]" />
          <Image02Icon
            imageDimensions="/image024.svg"
            image02IconWidth="219px"
            image02IconHeight="213px"
            image02IconPosition="absolute"
            image02IconTop="160px"
            image02IconLeft="333px"
          />
          <TypeText
            tableLabel="Seele Vollerei"
            typeTextAlignItems="center"
            typeTextPadding="16px"
            typeTextBorderBottom="1px solid #9ba5b7"
            typeTextAlignSelf="unset"
            typeTextWidth="477px"
            typeTextPosition="absolute"
            typeTextTop="162px"
            typeTextLeft="574px"
            typeTextHeight="45px"
            textFontWeight="unset"
            textWebkitTextStroke="unset"
          />
          <TypeText
            tableLabel="Departemen"
            typeTextAlignItems="center"
            typeTextPadding="16px"
            typeTextBorderBottom="unset"
            typeTextAlignSelf="unset"
            typeTextWidth="172px"
            typeTextPosition="absolute"
            typeTextTop="207px"
            typeTextLeft="574px"
            typeTextHeight="37px"
            textFontWeight="unset"
            textWebkitTextStroke="unset"
          />
          <SizeRegularTypePrimarySt
            iconImageUrl="/pluscircle2.svg"
            label="Log Out"
            customIconId="/pluscircle2.svg"
            trailingIcon={false}
            leadingIcon
            sizeRegularTypePrimaryStHeight="35px"
            sizeRegularTypePrimaryStPosition="absolute"
            sizeRegularTypePrimaryStTop="620px"
            sizeRegularTypePrimaryStLeft="333px"
            sizeRegularTypePrimaryStWidth="110px"
            sizeRegularTypePrimaryStJustifyContent="center"
            sizeRegularTypePrimaryStCursor="pointer"
            sizeRegularTypePrimaryStBackgroundColor="#545f71"
            onButtonContainer1Click={onButtonContainer5Click}
          />
        </div>
      </div>
      <div className="absolute top-[1065px] left-[5239px] w-[189px] h-24 overflow-hidden">
        <div className="absolute top-[0px] left-[0px] w-[189px] h-24 overflow-hidden" />
        <FormContainer />
      </div>
    </div>
  );
};

export default PROFILEDEPARTEMEN;
