import type { NextPage } from "next";
import { useCallback } from "react";

const LOGIN: NextPage = () => {
  const onButtonContainerClick = useCallback(() => {
    // Please sync "DASHBOARD DEPARTEMEN" to the project
  }, []);

  return (
    <div className="relative w-full h-[669px] text-left text-sm text-primary font-body-small-heavy">
      <div className="absolute top-[0px] left-[0px] rounded-2xl box-border w-[1059px] h-[669px] overflow-hidden text-center text-lg border-[4px] border-solid border-primary">
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
      <div className="absolute top-[278px] left-[365px] w-[345px] flex flex-col items-start justify-end gap-[7px]">
        <div className="relative tracking-[-0.02em] leading-[19px]">
          username
        </div>
        <img
          className="self-stretch relative rounded-md max-w-full overflow-hidden h-12 shrink-0"
          alt=""
          src="/text-input.svg"
        />
      </div>
      <div className="absolute top-[134px] left-[451px] tracking-[-0.02em] leading-[19px] font-semibold inline-block overflow-hidden text-ellipsis whitespace-nowrap w-[172px]">
        Selamat Datang di CHIWA
      </div>
      <div className="absolute top-[366px] left-[365px] w-[345px] flex flex-col items-start justify-end gap-[7px]">
        <div className="relative tracking-[-0.02em] leading-[19px]">
          password
        </div>
        <img
          className="self-stretch relative rounded-md max-w-full overflow-hidden h-12 shrink-0"
          alt=""
          src="/text-input1.svg"
        />
      </div>
      <div
        className="absolute top-[454px] left-[456px] rounded-md bg-primary w-[149px] h-12 overflow-hidden flex flex-row items-center justify-center py-3 px-4 box-border gap-[10px] cursor-pointer text-base text-white"
        onClick={onButtonContainerClick}
      >
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle.svg"
        />
        <div className="relative tracking-[-0.02em] leading-[22px] font-semibold">
          Login
        </div>
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0 hidden"
          alt=""
          src="/pluscircle.svg"
        />
      </div>
      <img
        className="absolute top-[159px] left-[496px] w-[83px] h-[77px] overflow-hidden"
        alt=""
        src="/image02.svg"
      />
    </div>
  );
};

export default LOGIN;
