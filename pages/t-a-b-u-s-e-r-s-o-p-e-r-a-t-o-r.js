import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./t-a-b-u-s-e-r-s-o-p-e-r-a-t-o-r.module.css";

const TABUSERSOPERATOR = () => {
  const router = useRouter();

  const onButtonContainer1Click = useCallback(() => {
    router.push("/p-r-o-f-i-l-e-d-e-p-a-r-t-e-m-e-n");
  }, [router]);

  const onButtonContainer2Click = useCallback(() => {
    router.push("/t-a-b-s-k-r-i-p-s-i");
  }, [router]);

  const onButtonContainer3Click = useCallback(() => {
    router.push("/t-a-b-p-k-l");
  }, [router]);

  const onButtonContainer4Click = useCallback(() => {
    router.push("/d-a-s-h-b-o-a-r-d-d-e-p-a-r-t-e-m-e-n");
  }, [router]);

  const onButtonContainer6Click = useCallback(() => {
    router.push("/t-a-b-u-s-e-r-s-m-a-h-a-s-i-s-w-a");
  }, [router]);

  const onButtonContainer7Click = useCallback(() => {
    router.push("/t-a-b-u-s-e-r-s-d-o-s-e-n-w-a-l-i");
  }, [router]);

  return (
    <div className={styles.tabUsersOperator}>
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
      <div className={styles.tabUsersOperatorChild} />
      <div className={styles.button}>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
        <div className={styles.buttonLabel}>Filter</div>
        <img className={styles.plusCircleIcon1} alt="" src="/pluscircle1.svg" />
      </div>
      <div className={styles.tabUsersOperatorItem} />
      <div className={styles.irs}>
        <img className={styles.plusCircleIcon1} alt="" src="/pluscircle2.svg" />
        <div className={styles.buttonLabel} />
        <img className={styles.plusCircleIcon1} alt="" src="/pluscircle2.svg" />
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
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
        <div className={styles.buttonLabel}>Profile</div>
        <img className={styles.plusCircleIcon1} alt="" src="/pluscircle1.svg" />
      </div>
      <div className={styles.button2} onClick={onButtonContainer2Click}>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
        <div className={styles.buttonLabel}>Skripsi</div>
        <img className={styles.plusCircleIcon1} alt="" src="/pluscircle1.svg" />
      </div>
      <div className={styles.button3} onClick={onButtonContainer3Click}>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
        <div className={styles.buttonLabel}>PKL</div>
        <img className={styles.plusCircleIcon1} alt="" src="/pluscircle1.svg" />
      </div>
      <div className={styles.button4} onClick={onButtonContainer4Click}>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
        <div className={styles.buttonLabel}>Dashboard</div>
        <img className={styles.plusCircleIcon1} alt="" src="/pluscircle1.svg" />
      </div>
      <div className={styles.button5}>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
        <div className={styles.buttonLabel}>Users</div>
        <img className={styles.plusCircleIcon1} alt="" src="/pluscircle1.svg" />
      </div>
      <div className={styles.tabUsersOperatorInner} />
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
      <div className={styles.button6} onClick={onButtonContainer6Click}>
        <img className={styles.plusCircleIcon1} alt="" src="/pluscircle1.svg" />
        <div className={styles.buttonLabel}>Mahasiswa</div>
        <img className={styles.plusCircleIcon1} alt="" src="/pluscircle1.svg" />
      </div>
      <div className={styles.operator}>Operator</div>
      <div className={styles.button7} onClick={onButtonContainer7Click}>
        <img className={styles.plusCircleIcon1} alt="" src="/pluscircle1.svg" />
        <div className={styles.buttonLabel}>Dosen Wali</div>
        <img className={styles.plusCircleIcon1} alt="" src="/pluscircle1.svg" />
      </div>
      <div className={styles.button8}>
        <img className={styles.plusCircleIcon1} alt="" src="/pluscircle1.svg" />
        <div className={styles.buttonLabel}>Operator</div>
        <img className={styles.plusCircleIcon1} alt="" src="/pluscircle1.svg" />
      </div>
      <div className={styles.rectangleDiv} />
    </div>
  );
};

export default TABUSERSOPERATOR;
