import React from "react";
import styles from "../EntryWindow/Entry.module.scss";
import entryX from "../EntryWindow/files/eva_close-fill.png";
import logo from "../EntryWindow/files/logo.png";
import { motion } from "framer-motion";

function Entry() {
  const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      drag
      dragConstraints={{
        top: -150,
        left: -150,
        right: 150,
        bottom: 150,
      }}
      className={styles.entryParent}
    >
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1.5 }}
        className={styles.blockEntry}
      >
        <div className={styles.divX}>
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className={styles.imgX}
            src={entryX}
            alt="x"
          />
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
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.btnEntry}
          >
            Войти
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Entry;