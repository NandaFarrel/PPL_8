import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import WebFrameDETACHAFTERPLACI from "../components/WebFrameDETACHAFTERPLACI";
import SizeRegularTypePrimarySt from "../components/SizeRegularTypePrimarySt";
import TypeDefault from "../components/TypeDefault";

const TABUSERSMAHASISWA: NextPage = () => {
  const router = useRouter();

  const onButtonContainerClick = useCallback(() => {
    router.push("/TABUSERSOPERATOR");
  }, [router]);

  const onButtonContainer2Click = useCallback(() => {
    router.push("/PROFILEDEPARTEMEN");
  }, [router]);

  const onButtonContainer3Click = useCallback(() => {
    router.push("/TABSKRIPSI");
  }, [router]);

  const onButtonContainer4Click = useCallback(() => {
    router.push("/TABPKL");
  }, [router]);

  const onButtonContainer5Click = useCallback(() => {
    router.push("/DASHBOARDDEPARTEMEN");
  }, [router]);

  const onButtonContainer7Click = useCallback(() => {
    router.push("/TABUSERSDOSENWALI");
  }, [router]);

  return (
    <div className="relative w-full h-[673px] text-left text-base text-primary font-body-heavy">
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
      <div className="absolute top-[245px] left-[297px] rounded-xl bg-white w-[758px] h-[421px] overflow-hidden flex flex-row items-start justify-start">
        <div className="w-[72px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
          <div className="self-stretch bg-white flex flex-row items-start justify-start py-3 px-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
              #
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">1</div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">2</div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">3</div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">4</div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">5</div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">6</div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4">
            <div className="relative tracking-[-0.02em] leading-[22px]">7</div>
          </div>
        </div>
        <div className="w-[190px] h-[428px] overflow-hidden shrink-0 flex flex-col items-start justify-start ml-[-17px]">
          <div className="self-stretch bg-white flex flex-row items-start justify-start py-3 px-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
              Name
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              Darlene Robertson
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              Ronald Richards
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              Jerome Bell
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              Robert Fox
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              Bessie Cooper
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              Kathryn Murphy
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              Courtney Henry
            </div>
          </div>
        </div>
        <div className="w-[146px] overflow-hidden shrink-0 flex flex-col items-start justify-start ml-[-17px]">
          <div className="self-stretch bg-white flex flex-row items-start justify-start py-3 px-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
              NIM
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              2798
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              4600
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              4846
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              9151
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              6025
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              6065
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              9261
            </div>
          </div>
        </div>
        <div className="w-[223px] h-[420px] overflow-hidden shrink-0 flex flex-col items-start justify-start ml-[-17px]">
          <div className="self-stretch bg-white flex flex-row items-start justify-start py-3 px-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
              TAHUN MASUK
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              02/07/1971
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              28/03/1968
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              12/08/1994
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              02/01/1980
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              27/11/1987
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              22/08/1969
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              20/06/1988
            </div>
          </div>
        </div>
        <div className="w-[289px] h-[420px] overflow-hidden shrink-0 flex flex-col items-start justify-start ml-[-17px]">
          <div className="self-stretch bg-white flex flex-row items-start justify-start py-3 px-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
              STATUS
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              AKTIF
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              CUTI
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              MANGKIR
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              LULUS
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              UNDUR DIRI
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              MENINGGAL DUNIA
            </div>
          </div>
          <div className="self-stretch bg-white flex flex-row items-center justify-start p-4">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              Nursing Assistant
            </div>
          </div>
        </div>
      </div>
      <SizeRegularTypePrimarySt
        iconImageUrl="/pluscircle.svg"
        label="Dosen Wali"
        customIconId="/pluscircle.svg"
        trailingIcon={false}
        leadingIcon={false}
        sizeRegularTypePrimaryStHeight="48px"
        sizeRegularTypePrimaryStPosition="absolute"
        sizeRegularTypePrimaryStTop="129px"
        sizeRegularTypePrimaryStLeft="400px"
        sizeRegularTypePrimaryStWidth="125px"
        sizeRegularTypePrimaryStJustifyContent="center"
        sizeRegularTypePrimaryStCursor="pointer"
        sizeRegularTypePrimaryStBackgroundColor="#545f71"
        onButtonContainer1Click={onButtonContainer7Click}
      />
      <SizeRegularTypePrimarySt
        iconImageUrl="/pluscircle.svg"
        label="Mahasiswa"
        customIconId="/pluscircle.svg"
        trailingIcon={false}
        leadingIcon={false}
        sizeRegularTypePrimaryStHeight="48px"
        sizeRegularTypePrimaryStPosition="absolute"
        sizeRegularTypePrimaryStTop="129px"
        sizeRegularTypePrimaryStLeft="304px"
        sizeRegularTypePrimaryStWidth="108px"
        sizeRegularTypePrimaryStJustifyContent="center"
        sizeRegularTypePrimaryStCursor="unset"
        sizeRegularTypePrimaryStBackgroundColor="#7b8595"
      />
      <div className="absolute top-[214px] left-[304px] tracking-[-0.02em] leading-[22px] font-semibold flex items-center w-[108px] h-[29px]">
        Mahasiswa
      </div>
      <div className="absolute top-[177px] left-[400px] rounded-lg bg-white w-[84px] h-1.5 [transform:_rotate(180deg)] [transform-origin:0_0]" />
    </div>
  );
};

export default TABUSERSMAHASISWA;
