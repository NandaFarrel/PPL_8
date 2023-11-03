import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./d-a-s-h-b-o-a-r-d-d-e-p-a-r-t-e-m-e-n.module.css";

const DASHBOARDDEPARTEMEN = () => {
  const router = useRouter();

  const onButtonContainerClick = useCallback(() => {
    router.push("/p-r-o-f-i-l-e-d-e-p-a-r-t-e-m-e-n");
  }, [router]);

  const onButtonContainer1Click = useCallback(() => {
    router.push("/t-a-b-p-k-l");
  }, [router]);

  const onButtonContainer2Click = useCallback(() => {
    router.push("/t-a-b-p-k-l");
  }, [router]);

  const onButtonContainer4Click = useCallback(() => {
    router.push("/t-a-b-u-s-e-r-s-m-a-h-a-s-i-s-w-a");
  }, [router]);

  return (
    <div className={styles.dashboardDepartemen}>
      <div className={styles.dashboardDepartemenChild} />
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
      <div className={styles.dashboardDepartemenItem} />
      <div className={styles.dashboardDepartemenInner} />
      <div className={styles.irs}>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle2.svg" />
        <div className={styles.buttonLabel} />
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle2.svg" />
      </div>
      <img className={styles.image02Icon} alt="" src="/image021.svg" />
      <div className={styles.chiwa}>CHIWA</div>
      <div className={styles.searchInputField}>
        <div className={styles.label}>Search</div>
        <div className={styles.textInput}>
          <div className={styles.text}>Search...</div>
          <img className={styles.searchIcon} alt="" src="/search.svg" />
        </div>
      </div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <img className={styles.searchIcon} alt="" src="/pluscircle1.svg" />
        <div className={styles.buttonLabel}>Profile</div>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
      </div>
      <div className={styles.button1} onClick={onButtonContainer1Click}>
        <img className={styles.searchIcon} alt="" src="/pluscircle1.svg" />
        <div className={styles.buttonLabel}>Skripsi</div>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
      </div>
      <div className={styles.button2} onClick={onButtonContainer2Click}>
        <img className={styles.searchIcon} alt="" src="/pluscircle1.svg" />
        <div className={styles.buttonLabel}>PKL</div>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
      </div>
      <div className={styles.button3}>
        <img className={styles.searchIcon} alt="" src="/pluscircle1.svg" />
        <div className={styles.buttonLabel}>Dashboard</div>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
      </div>
      <div className={styles.button4} onClick={onButtonContainer4Click}>
        <img className={styles.searchIcon} alt="" src="/pluscircle1.svg" />
        <div className={styles.buttonLabel}>Users</div>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.dashboardDepartemenChild1} />
      <div className={styles.seeleVollerei}>SEELE VOLLEREI</div>
      <div className={styles.nip24060121140190}>
        NIP : 24060121140190 | DEPARTEMEN
      </div>
      <img className={styles.image02Icon1} alt="" src="/image024.svg" />
    </div>
  );
};

export default DASHBOARDDEPARTEMEN;
