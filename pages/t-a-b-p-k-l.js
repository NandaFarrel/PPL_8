import { useState, useCallback } from "react";
import POPUPPKL from "../components/p-o-p-u-p-p-k-l";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import styles from "./t-a-b-p-k-l.module.css";

const TABPKL = () => {
  const [isPOPUPPKLOpen, setPOPUPPKLOpen] = useState(false);
  const [isPOPUPPKL1Open, setPOPUPPKL1Open] = useState(false);
  const [isPOPUPPKL2Open, setPOPUPPKL2Open] = useState(false);
  const [isPOPUPPKL3Open, setPOPUPPKL3Open] = useState(false);
  const [isPOPUPPKL4Open, setPOPUPPKL4Open] = useState(false);
  const [isPOPUPPKL5Open, setPOPUPPKL5Open] = useState(false);
  const [isPOPUPPKL6Open, setPOPUPPKL6Open] = useState(false);
  const router = useRouter();

  const onButtonContainer1Click = useCallback(() => {
    router.push("/p-r-o-f-i-l-e-d-e-p-a-r-t-e-m-e-n");
  }, [router]);

  const onButtonContainer2Click = useCallback(() => {
    router.push("/t-a-b-s-k-r-i-p-s-i");
  }, [router]);

  const onButtonContainer4Click = useCallback(() => {
    router.push("/d-a-s-h-b-o-a-r-d-d-e-p-a-r-t-e-m-e-n");
  }, [router]);

  const onButtonContainer5Click = useCallback(() => {
    router.push("/t-a-b-u-s-e-r-s-m-a-h-a-s-i-s-w-a");
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
      <div className={styles.tabPkl}>
        <div className={styles.webFrameDetachAfterPlaci}>
          <div className={styles.browserHeader}>
            <img
              className={styles.browserHeaderChild}
              alt=""
              src="/group-3.svg"
            />
            <div className={styles.browserHeaderItem} />
            <div className={styles.websitenamecomWrapper}>
              <div className={styles.websitenamecom}>websitename.com</div>
            </div>
          </div>
        </div>
        <div className={styles.webFrameDetachAfterPlaci}>
          <div className={styles.browserHeader}>
            <img
              className={styles.browserHeaderChild}
              alt=""
              src="/group-3.svg"
            />
            <div className={styles.browserHeaderItem} />
            <div className={styles.websitenamecomWrapper}>
              <div className={styles.websitenamecom}>websitename.com</div>
            </div>
          </div>
        </div>
        <div className={styles.tabPklChild} />
        <div className={styles.button}>
          <img
            className={styles.plusCircleIcon}
            alt=""
            src="/pluscircle1.svg"
          />
          <div className={styles.buttonLabel}>Filter</div>
          <img
            className={styles.plusCircleIcon1}
            alt=""
            src="/pluscircle1.svg"
          />
        </div>
        <div className={styles.tabPklItem} />
        <div className={styles.irs}>
          <img
            className={styles.plusCircleIcon1}
            alt=""
            src="/pluscircle2.svg"
          />
          <div className={styles.buttonLabel} />
          <img
            className={styles.plusCircleIcon1}
            alt=""
            src="/pluscircle2.svg"
          />
        </div>
        <img className={styles.image02Icon} alt="" src="/image021.svg" />
        <div className={styles.chiwa}>CHIWA</div>
        <div className={styles.searchInputField}>
          <div className={styles.label}>Search</div>
          <div className={styles.textInput}>
            <div className={styles.text}>Search...</div>
            <img className={styles.plusCircleIcon} alt="" src="/search.svg" />
          </div>
        </div>
        <div className={styles.button1} onClick={onButtonContainer1Click}>
          <img
            className={styles.plusCircleIcon}
            alt=""
            src="/pluscircle1.svg"
          />
          <div className={styles.buttonLabel}>Profile</div>
          <img
            className={styles.plusCircleIcon1}
            alt=""
            src="/pluscircle1.svg"
          />
        </div>
        <div className={styles.button2} onClick={onButtonContainer2Click}>
          <img
            className={styles.plusCircleIcon}
            alt=""
            src="/pluscircle1.svg"
          />
          <div className={styles.buttonLabel}>Skripsi</div>
          <img
            className={styles.plusCircleIcon1}
            alt=""
            src="/pluscircle1.svg"
          />
        </div>
        <div className={styles.button3}>
          <img
            className={styles.plusCircleIcon}
            alt=""
            src="/pluscircle1.svg"
          />
          <div className={styles.buttonLabel}>PKL</div>
          <img
            className={styles.plusCircleIcon1}
            alt=""
            src="/pluscircle1.svg"
          />
        </div>
        <div className={styles.button4} onClick={onButtonContainer4Click}>
          <img
            className={styles.plusCircleIcon}
            alt=""
            src="/pluscircle1.svg"
          />
          <div className={styles.buttonLabel}>Dashboard</div>
          <img
            className={styles.plusCircleIcon1}
            alt=""
            src="/pluscircle1.svg"
          />
        </div>
        <div className={styles.button5} onClick={onButtonContainer5Click}>
          <img
            className={styles.plusCircleIcon}
            alt=""
            src="/pluscircle1.svg"
          />
          <div className={styles.buttonLabel}>Users</div>
          <img
            className={styles.plusCircleIcon1}
            alt=""
            src="/pluscircle1.svg"
          />
        </div>
        <div className={styles.tabPklInner} />
        <div className={styles.tableExampleWrapper}>
          <div className={styles.tableExample}>
            <div className={styles.textCellParent}>
              <div className={styles.textCell}>
                <div className={styles.buttonLabel}>#</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>1</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>2</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>3</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>4</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>5</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>6</div>
              </div>
              <div className={styles.textCell7}>
                <div className={styles.text2}>7</div>
              </div>
            </div>
            <div className={styles.textCellGroup}>
              <div className={styles.textCell}>
                <div className={styles.buttonLabel}>Name</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>Darlene Robertson</div>
              </div>
              <div className={styles.tableExample1}>
                <div className={styles.textCellParent}>
                  <div className={styles.textCell}>
                    <div className={styles.buttonLabel}>#</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>1</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>2</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>3</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>4</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>5</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>6</div>
                  </div>
                  <div className={styles.textCell7}>
                    <div className={styles.text2}>7</div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.textCell}>
                    <div className={styles.buttonLabel}>Name</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>Darlene Robertson</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>Ronald Richards</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>Jerome Bell</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>Robert Fox</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>Bessie Cooper</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>Kathryn Murphy</div>
                  </div>
                  <div className={styles.textCell7}>
                    <div className={styles.text2}>Courtney Henry</div>
                  </div>
                </div>
                <div className={styles.textCellParent1}>
                  <div className={styles.textCell}>
                    <div className={styles.buttonLabel}>NIM</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>2798</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>4600</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>4846</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>9151</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>6025</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>6065</div>
                  </div>
                  <div className={styles.textCell7}>
                    <div className={styles.text2}>9261</div>
                  </div>
                </div>
                <div className={styles.textCellParent2}>
                  <div className={styles.textCell}>
                    <div className={styles.buttonLabel}>TAHUN MASUK</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>02/07/1971</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>28/03/1968</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>12/08/1994</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>02/01/1980</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>27/11/1987</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>22/08/1969</div>
                  </div>
                  <div className={styles.textCell7}>
                    <div className={styles.text2}>20/06/1988</div>
                  </div>
                </div>
                <div className={styles.textCellParent3}>
                  <div className={styles.textCell}>
                    <div className={styles.buttonLabel}>STATUS</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>AKTIF</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>CUTI</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>MANGKIR</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>LULUS</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>UNDUR DIRI</div>
                  </div>
                  <div className={styles.textCell1}>
                    <div className={styles.text2}>MENINGGAL DUNIA</div>
                  </div>
                  <div className={styles.textCell7}>
                    <div className={styles.text2}>Nursing Assistant</div>
                  </div>
                </div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>Ronald Richards</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>Jerome Bell</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>Robert Fox</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>Bessie Cooper</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>Kathryn Murphy</div>
              </div>
              <div className={styles.textCell7}>
                <div className={styles.text2}>Courtney Henry</div>
              </div>
            </div>
            <div className={styles.textCellParent4}>
              <div className={styles.textCell}>
                <div className={styles.buttonLabel}>NIP</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>2798</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>4600</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>4846</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>9151</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>6025</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>6065</div>
              </div>
              <div className={styles.textCell7}>
                <div className={styles.text2}>9261</div>
              </div>
            </div>
            <div className={styles.textCellParent5}>
              <div className={styles.textCell64}>
                <div className={styles.buttonLabel}>TAHUN MASUK</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>02/07/1971</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>28/03/1968</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>12/08/1994</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>02/01/1980</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>27/11/1987</div>
              </div>
              <div className={styles.textCell1}>
                <div className={styles.text2}>22/08/1969</div>
              </div>
              <div className={styles.textCell71}>
                <div className={styles.text2}>20/06/1988</div>
              </div>
            </div>
            <div className={styles.tableExampleInner}>
              <div className={styles.textCellParent6}>
                <div className={styles.textCell72}>
                  <div className={styles.buttonLabel}>STATUS</div>
                </div>
                <div className={styles.textCell73}>
                  <div className={styles.text2}>BELUM AMBIL</div>
                </div>
                <div className={styles.textCell74}>
                  <div className={styles.text2}>SEDANG AMBIL</div>
                </div>
                <div className={styles.textCell75}>
                  <div className={styles.text2}>SEDANG AMBIL</div>
                </div>
                <div className={styles.textCell76}>
                  <div className={styles.text2}>MENUNGGU SEMINAR</div>
                </div>
                <div className={styles.textCell77}>
                  <div className={styles.text2}>MENUNGGU SEMINAR</div>
                </div>
                <div className={styles.textCell78}>
                  <div className={styles.text2}>LULUS</div>
                </div>
                <div className={styles.textCell79}>
                  <div className={styles.text2}>LULUS</div>
                </div>
                <img
                  className={styles.selectorIcon}
                  alt=""
                  src="/selector.svg"
                  onClick={openPOPUPPKL}
                />
                <img
                  className={styles.selectorIcon1}
                  alt=""
                  src="/selector.svg"
                  onClick={openPOPUPPKL1}
                />
                <img
                  className={styles.selectorIcon2}
                  alt=""
                  src="/selector.svg"
                  onClick={openPOPUPPKL2}
                />
                <img
                  className={styles.selectorIcon3}
                  alt=""
                  src="/selector.svg"
                  onClick={openPOPUPPKL3}
                />
                <img
                  className={styles.selectorIcon4}
                  alt=""
                  src="/selector.svg"
                  onClick={openPOPUPPKL4}
                />
                <img
                  className={styles.selectorIcon5}
                  alt=""
                  src="/selector.svg"
                  onClick={openPOPUPPKL5}
                />
                <img
                  className={styles.selectorIcon6}
                  alt=""
                  src="/selector.svg"
                  onClick={openPOPUPPKL6}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.button6}>
          <img
            className={styles.plusCircleIcon1}
            alt=""
            src="/pluscircle1.svg"
          />
          <div className={styles.buttonLabel}>Mahasiswa</div>
          <img
            className={styles.plusCircleIcon1}
            alt=""
            src="/pluscircle1.svg"
          />
        </div>
        <div className={styles.mahasiswa}>Mahasiswa</div>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-13.svg" />
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
