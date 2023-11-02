import type { NextPage } from "next";
import { useState, useCallback } from "react";
import POPUPPKL from "./POPUPPKL";
import PortalPopup from "./PortalPopup";
import { useRouter } from "next/router";
import WebFrameDETACHAFTERPLACI from "./WebFrameDETACHAFTERPLACI";
import SizeRegularTypePrimarySt from "./SizeRegularTypePrimarySt";
import TypeDefault from "./TypeDefault";
import TypeText from "./TypeText";
import TableExample from "./TableExample";

const TABPKL: NextPage = () => {
  const [isPOPUPPKLOpen, setPOPUPPKLOpen] = useState(false);
  const [isPOPUPPKL1Open, setPOPUPPKL1Open] = useState(false);
  const [isPOPUPPKL2Open, setPOPUPPKL2Open] = useState(false);
  const [isPOPUPPKL3Open, setPOPUPPKL3Open] = useState(false);
  const [isPOPUPPKL4Open, setPOPUPPKL4Open] = useState(false);
  const [isPOPUPPKL5Open, setPOPUPPKL5Open] = useState(false);
  const [isPOPUPPKL6Open, setPOPUPPKL6Open] = useState(false);
  const router = useRouter();

  const onButtonContainer1Click = useCallback(() => {
    router.push("/PROFILEDEPARTEMEN");
  }, [router]);

  const onButtonContainer2Click = useCallback(() => {
    router.push("/TABSKRIPSI");
  }, [router]);

  const onButtonContainer4Click = useCallback(() => {
    router.push("/DASHBOARDDEPARTEMEN");
  }, [router]);

  const onButtonContainer5Click = useCallback(() => {
    router.push("/TABUSERSMAHASISWA");
  }, [router]);

  const openPOPUPPKL = useCallback(() => {
    setPOPUPPKLOpen(true);
  }, []);

  const closePOPUPPKL = useCallback(() => {
    setPOPUPPKLOpen(false);
  }, []);

  const openPOPUPPKL1 = useCallback(() => {
    setPOPUPPKL1Open(true);
  }, []);

  const closePOPUPPKL1 = useCallback(() => {
    setPOPUPPKL1Open(false);
  }, []);

  const openPOPUPPKL2 = useCallback(() => {
    setPOPUPPKL2Open(true);
  }, []);

  const closePOPUPPKL2 = useCallback(() => {
    setPOPUPPKL2Open(false);
  }, []);

  const openPOPUPPKL3 = useCallback(() => {
    setPOPUPPKL3Open(true);
  }, []);

  const closePOPUPPKL3 = useCallback(() => {
    setPOPUPPKL3Open(false);
  }, []);

  const openPOPUPPKL4 = useCallback(() => {
    setPOPUPPKL4Open(true);
  }, []);

  const closePOPUPPKL4 = useCallback(() => {
    setPOPUPPKL4Open(false);
  }, []);

  const openPOPUPPKL5 = useCallback(() => {
    setPOPUPPKL5Open(true);
  }, []);

  const closePOPUPPKL5 = useCallback(() => {
    setPOPUPPKL5Open(false);
  }, []);

  const openPOPUPPKL6 = useCallback(() => {
    setPOPUPPKL6Open(true);
  }, []);

  const closePOPUPPKL6 = useCallback(() => {
    setPOPUPPKL6Open(false);
  }, []);

  return (
    <>
      <div className="w-[1059px] h-[676px] text-left text-base text-primary font-body-heavy">
        <WebFrameDETACHAFTERPLACI
          webFrameDETACHAFTERPLACIWidth="1059px"
          webFrameDETACHAFTERPLACIHeight="669px"
          webFrameDETACHAFTERPLACIPosition="absolute"
          webFrameDETACHAFTERPLACITop="0px"
          webFrameDETACHAFTERPLACILeft="0px"
          frameDivLeft="calc(50% - 232.5px)"
        />
        <WebFrameDETACHAFTERPLACI
          webFrameDETACHAFTERPLACIWidth="1059px"
          webFrameDETACHAFTERPLACIHeight="669px"
          webFrameDETACHAFTERPLACIPosition="absolute"
          webFrameDETACHAFTERPLACITop="0px"
          webFrameDETACHAFTERPLACILeft="0px"
          frameDivLeft="calc(50% - 232.5px)"
        />
        <div className="absolute top-[64px] left-[294px] rounded-smi w-[762px] h-[596px]" />
        <SizeRegularTypePrimarySt
          iconImageUrl="/pluscircle1.svg"
          label="Filter"
          customIconId="/pluscircle1.svg"
          trailingIcon={false}
          leadingIcon
          sizeRegularTypePrimaryStHeight="24px"
          sizeRegularTypePrimaryStPosition="absolute"
          sizeRegularTypePrimaryStTop="214px"
          sizeRegularTypePrimaryStLeft="948px"
          sizeRegularTypePrimaryStWidth="104px"
          sizeRegularTypePrimaryStJustifyContent="center"
          sizeRegularTypePrimaryStCursor="unset"
          sizeRegularTypePrimaryStBackgroundColor="#545f71"
        />
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
          sizeRegularTypePrimaryStTop="125px"
          sizeRegularTypePrimaryStLeft="0px"
          sizeRegularTypePrimaryStWidth="297px"
          sizeRegularTypePrimaryStJustifyContent="flex-start"
          sizeRegularTypePrimaryStCursor="pointer"
          sizeRegularTypePrimaryStBackgroundColor="#545f71"
          onButtonContainer1Click={onButtonContainer1Click}
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
          onButtonContainer1Click={onButtonContainer2Click}
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
          sizeRegularTypePrimaryStCursor="unset"
          sizeRegularTypePrimaryStBackgroundColor="#7b8595"
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
          onButtonContainer1Click={onButtonContainer4Click}
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
          onButtonContainer1Click={onButtonContainer5Click}
        />
        <div className="absolute top-[361px] left-[0px] rounded-lg bg-white w-[7px] h-[73px]" />
        <div className="absolute top-[234px] left-[287px] w-[667px] h-[442px] flex flex-col items-start justify-start p-2.5 box-border">
          <div className="rounded-xl bg-white w-[760px] h-[421px] overflow-hidden shrink-0 flex flex-row items-start justify-start">
            <div className="w-[72px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
              <TypeText
                tableLabel="#"
                typeTextAlignItems="flex-start"
                typeTextPadding="12px 16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="600"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="1"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="2"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="3"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="4"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="5"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="6"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="7"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="unset"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
            </div>
            <div className="w-[215px] h-[428px] overflow-hidden shrink-0 flex flex-col items-start justify-start ml-[-15px]">
              <TypeText
                tableLabel="Name"
                typeTextAlignItems="flex-start"
                typeTextPadding="12px 16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="600"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="Darlene Robertson"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TableExample
                text="NIM"
                text1="AKTIF"
                text2="CUTI"
                text3="MANGKIR"
                text4="LULUS"
                text5="UNDUR DIRI"
                text6="MENINGGAL DUNIA"
                text7="Nursing Assistant"
                tableExamplePosition="unset"
                tableExampleTop="unset"
                tableExampleLeft="unset"
                tableExampleFlexShrink="0"
              />
              <TypeText
                tableLabel="Ronald Richards"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="Jerome Bell"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="Robert Fox"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="Bessie Cooper"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="Kathryn Murphy"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="Courtney Henry"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="unset"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
            </div>
            <div className="w-[140px] overflow-hidden shrink-0 flex flex-col items-start justify-start ml-[-15px]">
              <TypeText
                tableLabel="NIP"
                typeTextAlignItems="flex-start"
                typeTextPadding="12px 16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="600"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="2798"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="4600"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="4846"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="9151"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="6025"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="6065"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="9261"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="unset"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
            </div>
            <div className="w-[170px] h-[420px] overflow-hidden shrink-0 flex flex-col items-start justify-start ml-[-15px]">
              <div className="bg-white box-border w-[179px] flex flex-row items-start justify-start py-3 px-4 border-b-[1px] border-solid border-secondary">
                <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
                  TAHUN MASUK
                </div>
              </div>
              <TypeText
                tableLabel="02/07/1971"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="28/03/1968"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="12/08/1994"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="02/01/1980"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="27/11/1987"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="22/08/1969"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="1px solid #9ba5b7"
                typeTextAlignSelf="stretch"
                typeTextWidth="unset"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
              <TypeText
                tableLabel="20/06/1988"
                typeTextAlignItems="center"
                typeTextPadding="16px"
                typeTextBorderBottom="unset"
                typeTextAlignSelf="unset"
                typeTextWidth="179px"
                typeTextPosition="unset"
                typeTextTop="unset"
                typeTextLeft="unset"
                typeTextHeight="unset"
                textFontWeight="unset"
                textWebkitTextStroke="unset"
              />
            </div>
            <div className="relative w-[234px] h-[420px] ml-[-15px]">
              <div className="absolute top-[0px] left-[0px] w-[233px] h-[420px] overflow-hidden">
                <TypeText
                  tableLabel="STATUS"
                  typeTextAlignItems="flex-start"
                  typeTextPadding="12px 16px"
                  typeTextBorderBottom="1px solid #9ba5b7"
                  typeTextAlignSelf="unset"
                  typeTextWidth="223px"
                  typeTextPosition="absolute"
                  typeTextTop="0px"
                  typeTextLeft="0px"
                  typeTextHeight="unset"
                  textFontWeight="600"
                  textWebkitTextStroke="unset"
                />
                <TypeText
                  tableLabel="BELUM AMBIL"
                  typeTextAlignItems="center"
                  typeTextPadding="16px"
                  typeTextBorderBottom="1px solid #9ba5b7"
                  typeTextAlignSelf="unset"
                  typeTextWidth="223px"
                  typeTextPosition="absolute"
                  typeTextTop="46px"
                  typeTextLeft="0px"
                  typeTextHeight="unset"
                  textFontWeight="unset"
                  textWebkitTextStroke="unset"
                />
                <TypeText
                  tableLabel="SEDANG AMBIL"
                  typeTextAlignItems="center"
                  typeTextPadding="16px"
                  typeTextBorderBottom="1px solid #9ba5b7"
                  typeTextAlignSelf="unset"
                  typeTextWidth="223px"
                  typeTextPosition="absolute"
                  typeTextTop="100px"
                  typeTextLeft="0px"
                  typeTextHeight="unset"
                  textFontWeight="unset"
                  textWebkitTextStroke="unset"
                />
                <TypeText
                  tableLabel="SEDANG AMBIL"
                  typeTextAlignItems="center"
                  typeTextPadding="16px"
                  typeTextBorderBottom="1px solid #9ba5b7"
                  typeTextAlignSelf="unset"
                  typeTextWidth="223px"
                  typeTextPosition="absolute"
                  typeTextTop="154px"
                  typeTextLeft="0px"
                  typeTextHeight="unset"
                  textFontWeight="unset"
                  textWebkitTextStroke="unset"
                />
                <TypeText
                  tableLabel="MENUNGGU SEMINAR"
                  typeTextAlignItems="center"
                  typeTextPadding="16px"
                  typeTextBorderBottom="1px solid #9ba5b7"
                  typeTextAlignSelf="unset"
                  typeTextWidth="223px"
                  typeTextPosition="absolute"
                  typeTextTop="208px"
                  typeTextLeft="0px"
                  typeTextHeight="unset"
                  textFontWeight="unset"
                  textWebkitTextStroke="unset"
                />
                <TypeText
                  tableLabel="MENUNGGU SEMINAR"
                  typeTextAlignItems="center"
                  typeTextPadding="16px"
                  typeTextBorderBottom="1px solid #9ba5b7"
                  typeTextAlignSelf="unset"
                  typeTextWidth="223px"
                  typeTextPosition="absolute"
                  typeTextTop="262px"
                  typeTextLeft="0px"
                  typeTextHeight="unset"
                  textFontWeight="unset"
                  textWebkitTextStroke="unset"
                />
                <TypeText
                  tableLabel="LULUS"
                  typeTextAlignItems="center"
                  typeTextPadding="16px"
                  typeTextBorderBottom="1px solid #9ba5b7"
                  typeTextAlignSelf="unset"
                  typeTextWidth="223px"
                  typeTextPosition="absolute"
                  typeTextTop="316px"
                  typeTextLeft="0px"
                  typeTextHeight="unset"
                  textFontWeight="unset"
                  textWebkitTextStroke="unset"
                />
                <TypeText
                  tableLabel="LULUS"
                  typeTextAlignItems="center"
                  typeTextPadding="16px"
                  typeTextBorderBottom="unset"
                  typeTextAlignSelf="unset"
                  typeTextWidth="223px"
                  typeTextPosition="absolute"
                  typeTextTop="370px"
                  typeTextLeft="0px"
                  typeTextHeight="unset"
                  textFontWeight="unset"
                  textWebkitTextStroke="unset"
                />
                <img
                  className="absolute top-[60px] left-[199px] w-6 h-6 overflow-hidden cursor-pointer"
                  alt=""
                  src="/selector.svg"
                  onClick={openPOPUPPKL}
                />
                <img
                  className="absolute top-[379px] left-[199px] w-6 h-6 overflow-hidden cursor-pointer"
                  alt=""
                  src="/selector.svg"
                  onClick={openPOPUPPKL1}
                />
                <img
                  className="absolute top-[276px] left-[199px] w-6 h-6 overflow-hidden cursor-pointer"
                  alt=""
                  src="/selector.svg"
                  onClick={openPOPUPPKL2}
                />
                <img
                  className="absolute top-[331px] left-[199px] w-6 h-6 overflow-hidden cursor-pointer"
                  alt=""
                  src="/selector.svg"
                  onClick={openPOPUPPKL3}
                />
                <img
                  className="absolute top-[114px] left-[199px] w-6 h-6 overflow-hidden cursor-pointer"
                  alt=""
                  src="/selector.svg"
                  onClick={openPOPUPPKL4}
                />
                <img
                  className="absolute top-[175px] left-[199px] w-6 h-6 overflow-hidden cursor-pointer"
                  alt=""
                  src="/selector.svg"
                  onClick={openPOPUPPKL5}
                />
                <img
                  className="absolute top-[229px] left-[199px] w-6 h-6 overflow-hidden cursor-pointer"
                  alt=""
                  src="/selector.svg"
                  onClick={openPOPUPPKL6}
                />
              </div>
            </div>
          </div>
        </div>
        <SizeRegularTypePrimarySt
          iconImageUrl="/pluscircle1.svg"
          label="Mahasiswa"
          customIconId="/pluscircle1.svg"
          trailingIcon={false}
          leadingIcon={false}
          sizeRegularTypePrimaryStHeight="48px"
          sizeRegularTypePrimaryStPosition="absolute"
          sizeRegularTypePrimaryStTop="129px"
          sizeRegularTypePrimaryStLeft="304px"
          sizeRegularTypePrimaryStWidth="120px"
          sizeRegularTypePrimaryStJustifyContent="flex-start"
          sizeRegularTypePrimaryStCursor="unset"
          sizeRegularTypePrimaryStBackgroundColor="#7b8595"
        />
        <div className="absolute top-[214px] left-[304px] tracking-[-0.02em] leading-[22px] font-semibold flex items-center w-[108px] h-[29px]">
          Mahasiswa
        </div>
        <img
          className="absolute top-[172px] left-[319px] rounded-lg w-[84px] h-1.5"
          alt=""
          src="/rectangle-13.svg"
        />
      </div>
      {isPOPUPPKLOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPPKL}
        >
          <POPUPPKL onClose={closePOPUPPKL} />
        </PortalPopup>
      )}
      {isPOPUPPKL1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPPKL1}
        >
          <POPUPPKL onClose={closePOPUPPKL1} />
        </PortalPopup>
      )}
      {isPOPUPPKL2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPPKL2}
        >
          <POPUPPKL onClose={closePOPUPPKL2} />
        </PortalPopup>
      )}
      {isPOPUPPKL3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPPKL3}
        >
          <POPUPPKL onClose={closePOPUPPKL3} />
        </PortalPopup>
      )}
      {isPOPUPPKL4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPPKL4}
        >
          <POPUPPKL onClose={closePOPUPPKL4} />
        </PortalPopup>
      )}
      {isPOPUPPKL5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPPKL5}
        >
          <POPUPPKL onClose={closePOPUPPKL5} />
        </PortalPopup>
      )}
      {isPOPUPPKL6Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPPKL6}
        >
          <POPUPPKL onClose={closePOPUPPKL6} />
        </PortalPopup>
      )}
    </>
  );
};

export default TABPKL;
