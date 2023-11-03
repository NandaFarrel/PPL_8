import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./p-r-o-f-i-l-e-d-e-p-a-r-t-e-m-e-n.module.css";

const PROFILEDEPARTEMEN = () => {
  const router = useRouter();

  const onButtonContainer1Click = useCallback(() => {
    router.push("/t-a-b-p-k-l");
  }, [router]);

  const onButtonContainer2Click = useCallback(() => {
    router.push("/t-a-b-p-k-l");
  }, [router]);

  const onButtonContainer3Click = useCallback(() => {
    router.push("/d-a-s-h-b-o-a-r-d-d-e-p-a-r-t-e-m-e-n");
  }, [router]);

  const onButtonContainer4Click = useCallback(() => {
    router.push("/t-a-b-u-s-e-r-s-m-a-h-a-s-i-s-w-a");
  }, [router]);

  const onButtonContainer5Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.profileDepartemen}>
      <div className={styles.frame} />
      <div className={styles.frame} />
      <div className={styles.frame} />
      <div className={styles.frame} />
      <div className={styles.frame} />
      <div className={styles.frame} />
      <div className={styles.frame}>
        <div className={styles.frame} />
        <div className={styles.frame}>
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
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameInner} />
          <div className={styles.irs}>
            <img
              className={styles.plusCircleIcon}
              alt=""
              src="/pluscircle2.svg"
            />
            <div className={styles.buttonLabel} />
            <img
              className={styles.plusCircleIcon}
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
              <img className={styles.searchIcon} alt="" src="/search.svg" />
            </div>
          </div>
          <div className={styles.button}>
            <img className={styles.searchIcon} alt="" src="/pluscircle1.svg" />
            <div className={styles.buttonLabel}>Profile</div>
            <img
              className={styles.plusCircleIcon}
              alt=""
              src="/pluscircle1.svg"
            />
          </div>
          <div className={styles.button1} onClick={onButtonContainer1Click}>
            <img className={styles.searchIcon} alt="" src="/pluscircle1.svg" />
            <div className={styles.buttonLabel}>Skripsi</div>
            <img
              className={styles.plusCircleIcon}
              alt=""
              src="/pluscircle1.svg"
            />
          </div>
          <div className={styles.button2} onClick={onButtonContainer2Click}>
            <img className={styles.searchIcon} alt="" src="/pluscircle1.svg" />
            <div className={styles.buttonLabel}>PKL</div>
            <img
              className={styles.plusCircleIcon}
              alt=""
              src="/pluscircle1.svg"
            />
          </div>
          <div className={styles.button3} onClick={onButtonContainer3Click}>
            <img className={styles.searchIcon} alt="" src="/pluscircle1.svg" />
            <div className={styles.buttonLabel}>Dashboard</div>
            <img
              className={styles.plusCircleIcon}
              alt=""
              src="/pluscircle1.svg"
            />
          </div>
          <div className={styles.button4} onClick={onButtonContainer4Click}>
            <img className={styles.searchIcon} alt="" src="/pluscircle1.svg" />
            <div className={styles.buttonLabel}>Users</div>
            <img
              className={styles.plusCircleIcon}
              alt=""
              src="/pluscircle1.svg"
            />
          </div>
          <div className={styles.rectangleDiv} />
          <img className={styles.image02Icon1} alt="" src="/image023.svg" />
          <div className={styles.textCell}>
            <div className={styles.text1}>Seele Vollerei</div>
          </div>
          <div className={styles.textCell1}>
            <div className={styles.text2}>Departemen</div>
          </div>
          <div className={styles.button5} onClick={onButtonContainer5Click}>
            <img className={styles.searchIcon} alt="" src="/pluscircle2.svg" />
            <div className={styles.buttonLabel}>Log Out</div>
            <img
              className={styles.plusCircleIcon}
              alt=""
              src="/pluscircle2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PROFILEDEPARTEMEN;
