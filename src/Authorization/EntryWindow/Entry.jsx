import React from "react";
import styles from "../EntryWindow/Entry.module.scss";
import entryX from "../EntryWindow/files/eva_close-fill.png";
import logo from "../EntryWindow/files/logo.png";

function Entry() {
  return (
    <div className={styles.entryParent}>
      <div className={styles.blockEntry}>

        <div className={styles.divX}>
          <img className={styles.imgX} src={entryX} alt="x" />
        </div>

        <div className={styles.divLogo}>
          <img className={styles.imgLogo} src={logo} alt="logo" />
        </div>

        <div className={styles.blockEntryText}>
          <div className={styles.entryText}>Вход</div>
        </div>

        <div className={styles.blockInpLogin}>
          <input
            className={styles.inpLogin}
            type="text"
            placeholder="   Hомер телефона или email..."
          />
        </div>

        <div className={styles.blockInpPassword}>
          <input
            className={styles.inpPassword}
            type="password"
            placeholder="   Введите пароль..."
          />
        </div>

        <div className={styles.blockBtnEntry}>
          <button className={styles.btnEntry}>Войти</button>
        </div>

      </div>
    </div>
  );
}

export default Entry;
