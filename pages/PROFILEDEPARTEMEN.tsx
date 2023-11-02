import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

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
    router.push("/");
  }, [router]);

  const onButtonContainer5Click = useCallback(() => {
    router.push("/LOGIN");
  }, [router]);

  return (
    <div className="relative w-full h-[666px] text-left text-base text-white font-body-small-heavy">
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
          <div className="absolute top-[0px] left-[0px] rounded-2xl box-border w-[1059px] h-[669px] overflow-hidden text-center text-lg text-primary border-[4px] border-solid border-primary">
            <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-tertiary h-16 overflow-hidden">
              <img
                className="absolute top-[24px] left-[24px] w-16 h-4"
                alt=""
                src="/group-3.svg"
              />
              <div className="absolute w-[calc(100%_+_2px)] right-[-1px] bottom-[-1px] left-[-1px] box-border h-0.5 border-t-[2px] border-solid border-primary" />
              <div className="absolute top-[14px] left-[calc(50%_-_232.5px)] rounded-3xs bg-white w-[466px] h-9 overflow-hidden">
                <div className="absolute top-[0px] left-[calc(50%_-_233px)] tracking-[-0.02em] leading-[22px] font-medium flex items-center justify-center w-[466px] h-9">
                  websitename.com
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[70px] left-[293px] rounded-smi bg-gainsboro w-[762px] h-[596px]" />
          <div className="absolute top-[112px] left-[4px] rounded-lg bg-primary w-[293px] h-[554px]" />
          <div className="absolute top-[132px] left-[305px] rounded-2xl bg-white w-[750px] h-[534px]" />
          <div className="absolute top-[64px] left-[1px] rounded-md bg-primary w-[1058px] h-[61px] overflow-hidden flex flex-row items-center justify-center py-3 px-4 box-border gap-[10px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/pluscircle2.svg"
            />
            <div className="relative tracking-[-0.02em] leading-[22px] font-semibold" />
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/pluscircle2.svg"
            />
          </div>
          <img
            className="absolute top-[70px] left-[24px] w-[45px] h-[42px] overflow-hidden"
            alt=""
            src="/image022.svg"
          />
          <div className="absolute top-[70px] left-[72px] tracking-[-0.02em] leading-[22px] font-medium text-center flex items-center justify-center w-[61px] h-[38px] [-webkit-text-stroke:1px_rgba(0,_0,_0,_0)]">
            CHIWA
          </div>
          <div className="absolute top-[70px] left-[311px] w-[345px] flex flex-col items-start justify-end gap-[7px] text-sm text-primary">
            <div className="relative tracking-[-0.02em] leading-[19px] hidden">
              Search
            </div>
            <div className="self-stretch rounded-md bg-white box-border h-12 flex flex-row items-start justify-start p-3 gap-[12px] text-base border-[1px] border-solid border-primary">
              <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                Search...
              </div>
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0"
                alt=""
                src="/search.svg"
              />
            </div>
          </div>
          <div className="absolute top-[125px] left-[0px] rounded-md bg-lightslategray w-[297px] h-[74px] overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px]">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/pluscircle1.svg"
            />
            <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
              Profile
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/pluscircle1.svg"
            />
          </div>
          <div
            className="absolute top-[434px] left-[0px] rounded-md bg-primary w-[296px] h-[74px] overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px] cursor-pointer"
            onClick={onButtonContainer1Click}
          >
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/pluscircle1.svg"
            />
            <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
              Skripsi
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/pluscircle1.svg"
            />
          </div>
          <div
            className="absolute top-[360px] left-[1px] rounded-md bg-primary w-[296px] h-[74px] overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px] cursor-pointer"
            onClick={onButtonContainer2Click}
          >
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/pluscircle1.svg"
            />
            <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
              PKL
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/pluscircle1.svg"
            />
          </div>
          <div
            className="absolute top-[199px] left-[0px] rounded-md bg-primary w-[297px] h-[74px] overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px] cursor-pointer"
            onClick={onButtonContainer3Click}
          >
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/pluscircle1.svg"
            />
            <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
              Dashboard
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/pluscircle1.svg"
            />
          </div>
          <div
            className="absolute top-[273px] left-[0px] rounded-md bg-primary w-[297px] h-[74px] overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px] cursor-pointer"
            onClick={onButtonContainer4Click}
          >
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/pluscircle1.svg"
            />
            <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
              Users
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/pluscircle1.svg"
            />
          </div>
          <div className="absolute top-[126px] left-[0px] rounded-lg bg-white w-[7px] h-[73px]" />
          <img
            className="absolute top-[160px] left-[333px] w-[219px] h-[213px] overflow-hidden"
            alt=""
            src="/image024.svg"
          />
          <div className="absolute top-[162px] left-[574px] bg-white box-border w-[477px] h-[45px] flex flex-row items-center justify-start p-4 text-primary border-b-[1px] border-solid border-secondary">
            <div className="relative tracking-[-0.02em] leading-[22px] [-webkit-text-stroke:0.2px_#000]">
              Seele Vollerei
            </div>
          </div>
          <div className="absolute top-[207px] left-[574px] bg-white w-[172px] h-[37px] flex flex-row items-center justify-start p-4 box-border text-primary">
            <div className="relative tracking-[-0.02em] leading-[22px]">
              Departemen
            </div>
          </div>
          <div
            className="absolute top-[620px] left-[333px] rounded-md bg-primary w-[110px] h-[35px] overflow-hidden flex flex-row items-center justify-center py-3 px-4 box-border gap-[10px] cursor-pointer"
            onClick={onButtonContainer5Click}
          >
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0"
              alt=""
              src="/pluscircle2.svg"
            />
            <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
              Log Out
            </div>
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/pluscircle2.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[1065px] left-[5239px] w-[189px] h-24 overflow-hidden">
        <div className="absolute top-[0px] left-[0px] w-[189px] h-24 overflow-hidden" />
        <div className="absolute top-[0px] left-[0px] w-[189px] h-24 overflow-hidden">
          <div className="absolute top-[0px] left-[0px] rounded-md bg-lightslategray w-[189px] h-12 overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px]">
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
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-white w-[9px] h-12" />
          <div className="absolute top-[48px] left-[0px] rounded-md bg-primary w-[189px] h-12 overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px]">
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
      </div>
    </div>
  );
};

export default PROFILEDEPARTEMEN;
