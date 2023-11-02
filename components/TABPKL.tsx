import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const TABPKL: NextPage = () => {
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
    router.push("/");
  }, [router]);

  return (
    <div className="w-[1059px] h-[1278px] text-left text-base text-white font-body-small-heavy">
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
      <img
        className="absolute top-[969px] left-[297px] rounded-4xl w-[759px] h-[408px] object-cover"
        alt=""
        src="/image-1@2x.png"
      />
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
        onClick={onButtonContainer1Click}
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
        onClick={onButtonContainer2Click}
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
      <div className="absolute top-[360px] left-[1px] rounded-md bg-lightslategray w-[296px] h-[74px] overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px]">
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
        onClick={onButtonContainer4Click}
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
        onClick={onButtonContainer5Click}
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
      <div className="absolute top-[361px] left-[0px] rounded-lg bg-white w-[7px] h-[73px]" />
      <div className="absolute top-[234px] left-[287px] w-[667px] h-[442px] flex flex-col items-start justify-start p-2.5 box-border text-primary">
        <div className="rounded-xl bg-white w-[760px] h-[421px] overflow-hidden shrink-0 flex flex-row items-start justify-start">
          <div className="w-[72px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
            <div className="self-stretch bg-white flex flex-row items-start justify-start py-3 px-4 border-b-[1px] border-solid border-secondary">
              <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
                #
              </div>
            </div>
            <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
              <div className="relative tracking-[-0.02em] leading-[22px]">
                1
              </div>
            </div>
            <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
              <div className="relative tracking-[-0.02em] leading-[22px]">
                2
              </div>
            </div>
            <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
              <div className="relative tracking-[-0.02em] leading-[22px]">
                3
              </div>
            </div>
            <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
              <div className="relative tracking-[-0.02em] leading-[22px]">
                4
              </div>
            </div>
            <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
              <div className="relative tracking-[-0.02em] leading-[22px]">
                5
              </div>
            </div>
            <div className="self-stretch bg-white flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
              <div className="relative tracking-[-0.02em] leading-[22px]">
                6
              </div>
            </div>
            <div className="self-stretch bg-white flex flex-row items-center justify-start p-4">
              <div className="relative tracking-[-0.02em] leading-[22px]">
                7
              </div>
            </div>
          </div>
          <div className="w-[215px] h-[428px] overflow-hidden shrink-0 flex flex-col items-start justify-start ml-[-15px]">
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
          <div className="w-[140px] overflow-hidden shrink-0 flex flex-col items-start justify-start ml-[-15px]">
            <div className="self-stretch bg-white flex flex-row items-start justify-start py-3 px-4 border-b-[1px] border-solid border-secondary">
              <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
                NIP
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
          <div className="w-[170px] h-[420px] overflow-hidden shrink-0 flex flex-col items-start justify-start ml-[-15px]">
            <div className="bg-white box-border w-[179px] flex flex-row items-start justify-start py-3 px-4 border-b-[1px] border-solid border-secondary">
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
            <div className="bg-white w-[179px] flex flex-row items-center justify-start p-4 box-border">
              <div className="relative tracking-[-0.02em] leading-[22px]">
                20/06/1988
              </div>
            </div>
          </div>
          <div className="relative w-[234px] h-[420px] ml-[-15px]">
            <div className="absolute top-[0px] left-[0px] w-[233px] h-[420px] overflow-hidden">
              <div className="absolute top-[0px] left-[0px] bg-white box-border w-[223px] flex flex-row items-start justify-start py-3 px-4 border-b-[1px] border-solid border-secondary">
                <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
                  STATUS
                </div>
              </div>
              <div className="absolute top-[46px] left-[0px] bg-white box-border w-[223px] flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
                <div className="relative tracking-[-0.02em] leading-[22px]">
                  BELUM AMBIL
                </div>
              </div>
              <div className="absolute top-[100px] left-[0px] bg-white box-border w-[223px] flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
                <div className="relative tracking-[-0.02em] leading-[22px]">
                  SEDANG AMBIL
                </div>
              </div>
              <div className="absolute top-[154px] left-[0px] bg-white box-border w-[223px] flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
                <div className="relative tracking-[-0.02em] leading-[22px]">
                  SEDANG AMBIL
                </div>
              </div>
              <div className="absolute top-[208px] left-[0px] bg-white box-border w-[223px] flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
                <div className="relative tracking-[-0.02em] leading-[22px]">
                  MENUNGGU SEMINAR
                </div>
              </div>
              <div className="absolute top-[262px] left-[0px] bg-white box-border w-[223px] flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
                <div className="relative tracking-[-0.02em] leading-[22px]">
                  MENUNGGU SEMINAR
                </div>
              </div>
              <div className="absolute top-[316px] left-[0px] bg-white box-border w-[223px] flex flex-row items-center justify-start p-4 border-b-[1px] border-solid border-secondary">
                <div className="relative tracking-[-0.02em] leading-[22px]">
                  LULUS
                </div>
              </div>
              <div className="absolute top-[370px] left-[0px] bg-white w-[223px] flex flex-row items-center justify-start p-4 box-border">
                <div className="relative tracking-[-0.02em] leading-[22px]">
                  LULUS
                </div>
              </div>
              <img
                className="absolute top-[60px] left-[199px] w-6 h-6 overflow-hidden"
                alt=""
                src="/selector.svg"
              />
              <img
                className="absolute top-[379px] left-[199px] w-6 h-6 overflow-hidden"
                alt=""
                src="/selector.svg"
              />
              <img
                className="absolute top-[276px] left-[199px] w-6 h-6 overflow-hidden"
                alt=""
                src="/selector.svg"
              />
              <img
                className="absolute top-[331px] left-[199px] w-6 h-6 overflow-hidden"
                alt=""
                src="/selector.svg"
              />
              <img
                className="absolute top-[114px] left-[199px] w-6 h-6 overflow-hidden"
                alt=""
                src="/selector.svg"
              />
              <img
                className="absolute top-[175px] left-[199px] w-6 h-6 overflow-hidden"
                alt=""
                src="/selector.svg"
              />
              <img
                className="absolute top-[229px] left-[199px] w-6 h-6 overflow-hidden"
                alt=""
                src="/selector.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[129px] left-[304px] rounded-md bg-lightslategray w-[120px] h-12 overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px]">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle1.svg"
        />
        <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
          Mahasiswa
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle1.svg"
        />
      </div>
      <div className="absolute top-[214px] left-[304px] tracking-[-0.02em] leading-[22px] font-semibold text-primary flex items-center w-[108px] h-[29px]">
        Mahasiswa
      </div>
      <img
        className="absolute top-[172px] left-[319px] rounded-lg w-[84px] h-1.5"
        alt=""
        src="/rectangle-13.svg"
      />
      <div className="absolute top-[711px] left-[0px] rounded-2xl box-border w-[1059px] h-[669px] overflow-hidden text-center text-lg text-primary border-[4px] border-solid border-primary">
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
      <div className="absolute top-[711px] left-[0px] rounded-2xl box-border w-[1059px] h-[669px] overflow-hidden text-center text-lg text-primary border-[4px] border-solid border-primary">
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
      <div className="absolute top-[775px] left-[294px] rounded-smi w-[762px] h-[596px]" />
      <div className="absolute top-[925px] left-[948px] rounded-md bg-primary w-[104px] h-6 overflow-hidden flex flex-row items-center justify-center py-3 px-4 box-border gap-[10px]">
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
      <div className="absolute top-[823px] left-[4px] rounded-lg bg-primary w-[293px] h-[554px]" />
      <div className="absolute top-[775px] left-[1px] rounded-md bg-primary w-[1058px] h-[61px] overflow-hidden flex flex-row items-center justify-center py-3 px-4 box-border gap-[10px]">
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
        className="absolute top-[781px] left-[24px] w-[45px] h-[42px] overflow-hidden"
        alt=""
        src="/image022.svg"
      />
      <div className="absolute top-[781px] left-[72px] tracking-[-0.02em] leading-[22px] font-medium text-center flex items-center justify-center w-[61px] h-[38px] [-webkit-text-stroke:1px_rgba(0,_0,_0,_0)]">
        CHIWA
      </div>
      <div className="absolute top-[781px] left-[311px] w-[345px] flex flex-col items-start justify-end gap-[7px] text-sm text-primary">
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
      <div className="absolute top-[836px] left-[0px] rounded-md bg-primary w-[297px] h-[74px] overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px]">
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
      <div className="absolute top-[1145px] left-[0px] rounded-md bg-primary w-[296px] h-[74px] overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px]">
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
      <div className="absolute top-[1071px] left-[1px] rounded-md bg-lightslategray w-[296px] h-[74px] overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px]">
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
      <div className="absolute top-[910px] left-[0px] rounded-md bg-primary w-[297px] h-[74px] overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px]">
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
      <div className="absolute top-[984px] left-[0px] rounded-md bg-primary w-[297px] h-[74px] overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px]">
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
      <div className="absolute top-[1072px] left-[0px] rounded-lg bg-white w-[7px] h-[73px]" />
      <div className="absolute top-[840px] left-[304px] rounded-md bg-lightslategray w-[120px] h-12 overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px]">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle1.svg"
        />
        <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
          Mahasiswa
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle1.svg"
        />
      </div>
      <div className="absolute top-[925px] left-[304px] tracking-[-0.02em] leading-[22px] font-semibold text-primary flex items-center w-[108px] h-[29px]">
        Mahasiswa
      </div>
      <img
        className="absolute top-[883px] left-[319px] rounded-lg w-[84px] h-1.5"
        alt=""
        src="/rectangle-13.svg"
      />
      <img
        className="absolute top-[1037px] left-[817px] w-[260px] h-[257px]"
        alt=""
        src="/rectangle-18.svg"
      />
      <div className="absolute top-[1158px] left-[853px] rounded-md bg-primary w-[191px] h-12 overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px]">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle1.svg"
        />
        <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
          MENUNGGU SEMINAR
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle1.svg"
        />
      </div>
      <div className="absolute top-[1206px] left-[853px] rounded-md bg-primary w-[191px] h-12 overflow-hidden flex flex-row items-center justify-start py-3 px-4 box-border gap-[10px]">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle1.svg"
        />
        <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
          LULUS
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle1.svg"
        />
      </div>
    </div>
  );
};

export default TABPKL;
