import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import WebFrameDETACHAFTERPLACI from "../components/WebFrameDETACHAFTERPLACI";
import SizeRegularTypePrimarySt from "../components/SizeRegularTypePrimarySt";
import TypeDefault from "../components/TypeDefault";
import TableExample from "../components/TableExample";

const TABUSERSDOSENWALI: NextPage = () => {
  const router = useRouter();

  const onButtonContainerClick = useCallback(() => {
    router.push("/TABUSERSOPERATOR");
  }, [router]);

  const onButtonContainer2Click = useCallback(() => {
    router.push("/PROFILEDEPARTEMEN");
  }, [router]);

  const onButtonContainer3Click = useCallback(() => {
    router.push("/TABPKL");
  }, [router]);

  const onButtonContainer4Click = useCallback(() => {
    router.push("/TABPKL");
  }, [router]);

  const onButtonContainer5Click = useCallback(() => {
    router.push("/DASHBOARDDEPARTEMEN");
  }, [router]);

  const onButtonContainer7Click = useCallback(() => {
    router.push("/TABUSERSMAHASISWA");
  }, [router]);

  return (
    <div className="relative w-full h-[673px] text-center text-base text-white font-body-heavy">
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
        label="Operator"
        customIconId="/pluscircle1.svg"
        trailingIcon={false}
        leadingIcon={false}
        sizeRegularTypePrimaryStHeight="48px"
        sizeRegularTypePrimaryStPosition="absolute"
        sizeRegularTypePrimaryStTop="129px"
        sizeRegularTypePrimaryStLeft="512px"
        sizeRegularTypePrimaryStWidth="104px"
        sizeRegularTypePrimaryStJustifyContent="center"
        sizeRegularTypePrimaryStCursor="pointer"
        sizeRegularTypePrimaryStBackgroundColor="#545f71"
        onButtonContainer1Click={onButtonContainerClick}
      />
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
        sizeRegularTypePrimaryStCursor="pointer"
        sizeRegularTypePrimaryStBackgroundColor="#545f71"
        onButtonContainer1Click={onButtonContainer2Click}
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
        onButtonContainer1Click={onButtonContainer3Click}
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
        onButtonContainer1Click={onButtonContainer4Click}
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
        onButtonContainer1Click={onButtonContainer5Click}
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
        sizeRegularTypePrimaryStCursor="unset"
        sizeRegularTypePrimaryStBackgroundColor="#7b8595"
      />
      <div className="absolute top-[273px] left-[0px] rounded-lg bg-white w-[7px] h-[73px]" />
      <TableExample
        text="NIP"
        text1="AKTIF"
        text2="CUTI"
        text3="MANGKIR"
        text4="LULUS"
        text5="UNDUR DIRI"
        text6="MENINGGAL DUNIA"
        text7="Nursing Assistant"
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
        sizeRegularTypePrimaryStCursor="pointer"
        sizeRegularTypePrimaryStBackgroundColor="#545f71"
        onButtonContainer1Click={onButtonContainer7Click}
      />
      <div className="absolute top-[214px] left-[304px] tracking-[-0.02em] leading-[22px] font-semibold text-primary text-left flex items-center w-[108px] h-[29px]">
        Dosen Wali
      </div>
      <SizeRegularTypePrimarySt
        iconImageUrl="/pluscircle1.svg"
        label="Dosen Wali"
        customIconId="/pluscircle1.svg"
        trailingIcon={false}
        leadingIcon={false}
        sizeRegularTypePrimaryStHeight="48px"
        sizeRegularTypePrimaryStPosition="absolute"
        sizeRegularTypePrimaryStTop="129px"
        sizeRegularTypePrimaryStLeft="407px"
        sizeRegularTypePrimaryStWidth="118px"
        sizeRegularTypePrimaryStJustifyContent="center"
        sizeRegularTypePrimaryStCursor="unset"
        sizeRegularTypePrimaryStBackgroundColor="#7b8595"
      />
      <div className="absolute top-[177px] left-[505px] rounded-lg bg-white w-[84px] h-1.5 [transform:_rotate(180deg)] [transform-origin:0_0]" />
    </div>
  );
};

export default TABUSERSDOSENWALI;
