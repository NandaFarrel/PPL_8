import styles from "./p-o-p-u-p-s-k-r-i-p-s-i.module.css";

const POPUPSKRIPSI = ({ onClose }) => {
  return (
    <div className={styles.popupSkripsi}>
      <img
        className={styles.popupSkripsiChild}
        alt=""
        src="/rectangle-18.svg"
      />
      <div className={styles.button}>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
        <div className={styles.buttonLabel}>MENUNGGU SIDANG</div>
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
      <div className={styles.popupSkripsiItem} />
      <div className={styles.button3}>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
        <div className={styles.buttonLabel}>SEDANG AMBIL</div>
        <img className={styles.plusCircleIcon} alt="" src="/pluscircle1.svg" />
      </div>
    </div>
  );
};

export default POPUPSKRIPSI;
