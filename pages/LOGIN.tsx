import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

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
    <div className="relative w-full h-[673px] text-left text-base text-white font-body-small-heavy">
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
      <div className="absolute top-[64px] left-[294px] rounded-smi w-[762px] h-[596px]" />
      <div
        className="absolute top-[129px] left-[512px] rounded-md bg-primary w-[104px] h-12 overflow-hidden flex flex-row items-center justify-center py-3 px-4 box-border gap-[10px] cursor-pointer"
        onClick={onButtonContainerClick}
      >
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle1.svg"
        />
        <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
          Operator
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle1.svg"
        />
      </div>
      <div className="absolute top-[214px] left-[948px] rounded-md bg-primary w-[104px] h-6 overflow-hidden flex flex-row items-center justify-center py-3 px-4 box-border gap-[10px]">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/pluscircle1.svg"
        />
        <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
          Filter
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle1.svg"
        />
      </div>
      <div className="absolute top-[112px] left-[4px] rounded-lg bg-primary w-[293px] h-[554px]" />
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
      <div
        className="absolute top-[125px] left-[0px] rounded-md bg-primary w-[297px] h-[74px] overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px] cursor-pointer"
        onClick={onButtonContainer2Click}
      >
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
        onClick={onButtonContainer3Click}
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
        onClick={onButtonContainer4Click}
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
        onClick={onButtonContainer5Click}
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
      <div className="absolute top-[273px] left-[0px] rounded-md bg-lightslategray w-[297px] h-[74px] overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px]">
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
      <div className="absolute top-[273px] left-[0px] rounded-lg bg-white w-[7px] h-[73px]" />
      <div className="absolute top-[245px] left-[297px] rounded-xl bg-white w-[758px] h-[421px] overflow-hidden flex flex-row items-start justify-start text-primary">
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
      <div
        className="absolute top-[129px] left-[400px] rounded-md bg-primary w-[125px] h-12 overflow-hidden flex flex-row items-center justify-center py-3 px-4 box-border gap-[10px] cursor-pointer"
        onClick={onButtonContainer7Click}
      >
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle.svg"
        />
        <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
          Dosen Wali
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle.svg"
        />
      </div>
      <div className="absolute top-[129px] left-[304px] rounded-md bg-lightslategray w-[108px] h-12 overflow-hidden flex flex-row items-center justify-center py-3 px-4 box-border gap-[10px]">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle.svg"
        />
        <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
          Mahasiswa
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle.svg"
        />
      </div>
      <div className="absolute top-[214px] left-[304px] tracking-[-0.02em] leading-[22px] font-semibold text-primary flex items-center w-[108px] h-[29px]">
        Mahasiswa
      </div>
      <div className="absolute top-[177px] left-[400px] rounded-lg bg-white w-[84px] h-1.5 [transform:_rotate(180deg)] [transform-origin:0_0]" />
    </div>
  );
};

export default TABUSERSMAHASISWA;
