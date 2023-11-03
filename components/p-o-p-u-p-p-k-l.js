import styles from "./p-o-p-u-p-p-k-l.module.css";

const POPUPPKL = ({ onClose }) => {
  return (
    <div className={styles.popupPkl}>
      <img className={styles.popupPklChild} alt="" src="/rectangle-18.svg" />
      <div className={styles.button}>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
        <div className={styles.buttonLabel}>MENUNGGU SEMINAR</div>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
      </div>
      <div className={styles.button1}>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
        <div className={styles.buttonLabel}>LULUS</div>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
      </div>
      <div className={styles.button2}>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
        <div className={styles.buttonLabel}>BELUM AMBIL</div>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
      </div>
      <div className={styles.popupPklItem} />
      <div className={styles.button3}>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
        <div className={styles.buttonLabel}>SEDANG AMBIL</div>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
      </div>
    </div>
  );
};

export default POPUPPKL;
