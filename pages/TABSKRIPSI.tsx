import type { NextPage } from "next";
import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import POPUPSKRIPSI from "../components/POPUPSKRIPSI";
import PortalPopup from "../components/PortalPopup";
import { useRouter } from "next/router";
import WebFrameDETACHAFTERPLACI from "../components/WebFrameDETACHAFTERPLACI";
import SizeRegularTypePrimarySt from "../components/SizeRegularTypePrimarySt";
import TypeDefault from "../components/TypeDefault";
import TableExample from "../components/TableExample";

const TABSKRIPSI: NextPage = () => {
  const [isPOPUPSKRIPSIOpen, setPOPUPSKRIPSIOpen] = useState(false);
  const [isPOPUPSKRIPSI1Open, setPOPUPSKRIPSI1Open] = useState(false);
  const [isPOPUPSKRIPSI2Open, setPOPUPSKRIPSI2Open] = useState(false);
  const [isPOPUPSKRIPSI3Open, setPOPUPSKRIPSI3Open] = useState(false);
  const [isPOPUPSKRIPSI4Open, setPOPUPSKRIPSI4Open] = useState(false);
  const [isPOPUPSKRIPSI5Open, setPOPUPSKRIPSI5Open] = useState(false);
  const [isPOPUPSKRIPSI6Open, setPOPUPSKRIPSI6Open] = useState(false);
  const router = useRouter();

  const onButtonContainer1Click = useCallback(() => {
    router.push("/PROFILEDEPARTEMEN");
  }, [router]);

  const onButtonContainer3Click = useCallback(() => {
    router.push("/TABPKL");
  }, [router]);

  const onButtonContainer4Click = useCallback(() => {
    router.push("/DASHBOARDDEPARTEMEN");
  }, [router]);

  const onButtonContainer5Click = useCallback(() => {
    router.push("/TABUSERSMAHASISWA");
  }, [router]);

  const openPOPUPSKRIPSI = useCallback(() => {
    setPOPUPSKRIPSIOpen(true);
  }, []);

  const closePOPUPSKRIPSI = useCallback(() => {
    setPOPUPSKRIPSIOpen(false);
  }, []);

  const openPOPUPSKRIPSI1 = useCallback(() => {
    setPOPUPSKRIPSI1Open(true);
  }, []);

  const closePOPUPSKRIPSI1 = useCallback(() => {
    setPOPUPSKRIPSI1Open(false);
  }, []);

  const openPOPUPSKRIPSI2 = useCallback(() => {
    setPOPUPSKRIPSI2Open(true);
  }, []);

  const closePOPUPSKRIPSI2 = useCallback(() => {
    setPOPUPSKRIPSI2Open(false);
  }, []);

  const openPOPUPSKRIPSI3 = useCallback(() => {
    setPOPUPSKRIPSI3Open(true);
  }, []);

  const closePOPUPSKRIPSI3 = useCallback(() => {
    setPOPUPSKRIPSI3Open(false);
  }, []);

  const openPOPUPSKRIPSI4 = useCallback(() => {
    setPOPUPSKRIPSI4Open(true);
  }, []);

  const closePOPUPSKRIPSI4 = useCallback(() => {
    setPOPUPSKRIPSI4Open(false);
  }, []);

  const openPOPUPSKRIPSI5 = useCallback(() => {
    setPOPUPSKRIPSI5Open(true);
  }, []);

  const closePOPUPSKRIPSI5 = useCallback(() => {
    setPOPUPSKRIPSI5Open(false);
  }, []);

  const openPOPUPSKRIPSI6 = useCallback(() => {
    setPOPUPSKRIPSI6Open(true);
  }, []);

  const closePOPUPSKRIPSI6 = useCallback(() => {
    setPOPUPSKRIPSI6Open(false);
  }, []);

  return (
    <>
      <div className="relative w-full h-[676px] text-center text-base text-white font-body-heavy">
        <WebFrameDETACHAFTERPLACI
          webFrameDETACHAFTERPLACIWidth="1059px"
          webFrameDETACHAFTERPLACIHeight="658px"
          webFrameDETACHAFTERPLACIPosition="absolute"
          webFrameDETACHAFTERPLACITop="11px"
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
          className="absolute top-[79px] left-[17px] w-[45px] h-[42px] overflow-hidden"
          alt=""
          src="/image022.svg"
        />
        <div className="absolute top-[79px] left-[65px] tracking-[-0.02em] leading-[22px] font-medium flex items-center justify-center w-[61px] h-[38px] [-webkit-text-stroke:1px_rgba(0,_0,_0,_0)]">
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
          sizeRegularTypePrimaryStCursor="unset"
          sizeRegularTypePrimaryStBackgroundColor="#7b8595"
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
          onButtonContainer1Click={onButtonContainer3Click}
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
        <div className="absolute top-[434px] left-[0px] rounded-lg bg-white w-[7px] h-[73px]" />
        <TableExample
          text="NIP"
          text1="BELUM AMBIL"
          text2="SEDANG AMBIL"
          text3="SEDANG AMBIL"
          text4="MENUNGGU SIDANG"
          text5="MENUNGGU SIDANG"
          text6="LULUS"
          text7="LULUS"
          tableExamplePosition="absolute"
          tableExampleTop="245px"
          tableExampleLeft="297px"
          tableExampleFlexShrink="unset"
        />
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
        <div className="absolute top-[214px] left-[304px] tracking-[-0.02em] leading-[22px] font-semibold text-primary text-left flex items-center w-[108px] h-[29px]">
          Mahasiswa
        </div>
        <div className="absolute top-[177px] left-[403px] rounded-lg bg-white w-[84px] h-1.5 [transform:_rotate(180deg)] [transform-origin:0_0]" />
        <Button
          className="w-6 absolute top-[305px] left-[1031px] cursor-pointer"
          variant="outline-primary"
          onClick={openPOPUPSKRIPSI}
        />
        <img
          className="absolute top-[359px] left-[1031px] w-6 h-6 overflow-hidden cursor-pointer"
          alt=""
          src="/selector.svg"
          onClick={openPOPUPSKRIPSI1}
        />
        <img
          className="absolute top-[408px] left-[1031px] w-6 h-6 overflow-hidden cursor-pointer"
          alt=""
          src="/selector.svg"
          onClick={openPOPUPSKRIPSI2}
        />
        <img
          className="absolute top-[469px] left-[1031px] w-6 h-6 overflow-hidden cursor-pointer"
          alt=""
          src="/selector.svg"
          onClick={openPOPUPSKRIPSI3}
        />
        <img
          className="absolute top-[521px] left-[1031px] w-6 h-6 overflow-hidden cursor-pointer"
          alt=""
          src="/selector.svg"
          onClick={openPOPUPSKRIPSI4}
        />
        <img
          className="absolute top-[576px] left-[1032px] w-6 h-6 overflow-hidden cursor-pointer"
          alt=""
          src="/selector.svg"
          onClick={openPOPUPSKRIPSI5}
        />
        <img
          className="absolute top-[628px] left-[1031px] w-6 h-6 overflow-hidden cursor-pointer"
          alt=""
          src="/selector.svg"
          onClick={openPOPUPSKRIPSI6}
        />
      </div>
      {isPOPUPSKRIPSIOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPSKRIPSI}
        >
          <POPUPSKRIPSI onClose={closePOPUPSKRIPSI} />
        </PortalPopup>
      )}
      {isPOPUPSKRIPSI1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPSKRIPSI1}
        >
          <POPUPSKRIPSI onClose={closePOPUPSKRIPSI1} />
        </PortalPopup>
      )}
      {isPOPUPSKRIPSI2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPSKRIPSI2}
        >
          <POPUPSKRIPSI onClose={closePOPUPSKRIPSI2} />
        </PortalPopup>
      )}
      {isPOPUPSKRIPSI3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPSKRIPSI3}
        >
          <POPUPSKRIPSI onClose={closePOPUPSKRIPSI3} />
        </PortalPopup>
      )}
      {isPOPUPSKRIPSI4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPSKRIPSI4}
        >
          <POPUPSKRIPSI onClose={closePOPUPSKRIPSI4} />
        </PortalPopup>
      )}
      {isPOPUPSKRIPSI5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPSKRIPSI5}
        >
          <POPUPSKRIPSI onClose={closePOPUPSKRIPSI5} />
        </PortalPopup>
      )}
      {isPOPUPSKRIPSI6Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePOPUPSKRIPSI6}
        >
          <POPUPSKRIPSI onClose={closePOPUPSKRIPSI6} />
        </PortalPopup>
      )}
    </>
  );
};

export default TABSKRIPSI;
