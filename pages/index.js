import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const LOGIN = () => {
  const router = useRouter();

  const onButtonContainerClick = useCallback(() => {
    router.push("/d-a-s-h-b-o-a-r-d-d-e-p-a-r-t-e-m-e-n");
  }, [router]);

  return (
    <div className={styles.login}>
      <div className={styles.loginChild} />
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
      <div className={styles.textInputField}>
        <div className={styles.label}>username</div>
        <img className={styles.textInputIcon} alt="" src="/text-input.svg" />
      </div>
      <div className={styles.label1}>Selamat Datang di CHIWA</div>
      <div className={styles.textInputField1}>
        <div className={styles.label}>password</div>
        <img className={styles.textInputIcon} alt="" src="/text-input1.svg" />
      </div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle.svg" />
        <div className={styles.buttonLabel}>Login</div>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle.svg" />
      </div>
      <img className={styles.image02Icon} alt="" src="/image02.svg" />
    </div>
  );
};

export default LOGIN;
