import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import POPUPSKRIPSI from "../components/p-o-p-u-p-s-k-r-i-p-s-i";
import PortalPopup from "../components/portal-popup";
import { useRouter } from "next/router";
import styles from "./t-a-b-s-k-r-i-p-s-i.module.css";

const TABSKRIPSI = () => {
  const [isPOPUPSKRIPSIOpen, setPOPUPSKRIPSIOpen] = useState(false);
  const [isPOPUPSKRIPSI1Open, setPOPUPSKRIPSI1Open] = useState(false);
  const [isPOPUPSKRIPSI2Open, setPOPUPSKRIPSI2Open] = useState(false);
  const [isPOPUPSKRIPSI3Open, setPOPUPSKRIPSI3Open] = useState(false);
  const [isPOPUPSKRIPSI4Open, setPOPUPSKRIPSI4Open] = useState(false);
  const [isPOPUPSKRIPSI5Open, setPOPUPSKRIPSI5Open] = useState(false);
  const [isPOPUPSKRIPSI6Open, setPOPUPSKRIPSI6Open] = useState(false);
  const router = useRouter();

  const onButtonContainer1Click = useCallback(() => {
    router.push("/p-r-o-f-i-l-e-d-e-p-a-r-t-e-m-e-n");
  }, [router]);

  const onButtonContainer3Click = useCallback(() => {
    router.push("/t-a-b-p-k-l");
  }, [router]);

  const onButtonContainer4Click = useCallback(() => {
    router.push("/d-a-s-h-b-o-a-r-d-d-e-p-a-r-t-e-m-e-n");
  }, [router]);

  const onButtonContainer5Click = useCallback(() => {
    router.push("/t-a-b-u-s-e-r-s-m-a-h-a-s-i-s-w-a");
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
      <div className={styles.tabSkripsi}>
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
        <div className={styles.tabSkripsiChild} />
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
        <div className={styles.tabSkripsiItem} />
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
        <div className={styles.button2}>
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
        <div className={styles.button3} onClick={onButtonContainer3Click}>
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
        <div className={styles.tabSkripsiInner} />
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
          <div className={styles.textCellContainer}>
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
          <div className={styles.frameDiv}>
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
          <div className={styles.textCellParent1}>
            <div className={styles.textCell}>
              <div className={styles.buttonLabel}>STATUS</div>
            </div>
            <div className={styles.textCell1}>
              <div className={styles.text2}>BELUM AMBIL</div>
            </div>
            <div className={styles.textCell1}>
              <div className={styles.text2}>SEDANG AMBIL</div>
            </div>
            <div className={styles.textCell1}>
              <div className={styles.text2}>SEDANG AMBIL</div>
            </div>
            <div className={styles.textCell1}>
              <div className={styles.text2}>MENUNGGU SIDANG</div>
            </div>
            <div className={styles.textCell1}>
              <div className={styles.text2}>MENUNGGU SIDANG</div>
            </div>
            <div className={styles.textCell1}>
              <div className={styles.text2}>LULUS</div>
            </div>
            <div className={styles.textCell7}>
              <div className={styles.text2}>LULUS</div>
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
        <div className={styles.rectangleDiv} />
        <Button
          className={styles.selector}
          variant="outline-primary"
          onClick={openPOPUPSKRIPSI}
        />
        <img
          className={styles.selectorIcon}
          alt=""
          src="/selector.svg"
          onClick={openPOPUPSKRIPSI1}
        />
        <img
          className={styles.selectorIcon1}
          alt=""
          src="/selector.svg"
          onClick={openPOPUPSKRIPSI2}
        />
        <img
          className={styles.selectorIcon2}
          alt=""
          src="/selector.svg"
          onClick={openPOPUPSKRIPSI3}
        />
        <img
          className={styles.selectorIcon3}
          alt=""
          src="/selector.svg"
          onClick={openPOPUPSKRIPSI4}
        />
        <img
          className={styles.selectorIcon4}
          alt=""
          src="/selector.svg"
          onClick={openPOPUPSKRIPSI5}
        />
        <img
          className={styles.selectorIcon5}
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
