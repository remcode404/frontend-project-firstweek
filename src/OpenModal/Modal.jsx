import React from "react";
import styles from "../OpenModal/Modal.module.scss";
import xDelete from "../OpenModal/filesModal/eva_close-fill.png";
import logo from "../OpenModal/filesModal/logo.png";

import { motion } from "framer-motion";

function Modal() {
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
      className={styles.parentModal}
    >
      <div className={styles.opacity_block}>
        <div className={styles.backgroundPhoto}>
          <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1.5 }}
            className={styles.bookingWindow}
          >
            <div className={styles.divX}>
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                src={xDelete}
                alt="x"
                className={styles.imgX}
              />
            </div>

            <div className={styles.divLogo}>
              <img src={logo} alt="logo" className={styles.imgLogo} />
            </div>

            <div className={styles.divTextBooking}>
              <div className={styles.textBooking}>Забронировать столик</div>
            </div>

            <div className={styles.divInpName}>
              <input
                type="text"
                placeholder=" Имя"
                className={styles.inpName}
              />
            </div>

            <div className={styles.divInpPhone}>
              <input
                type="text"
                placeholder=" Телефон"
                className={styles.inpPhone}
              />
            </div>

            <div className={styles.divBtnTableAndTime}>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.btnTable}>Столик</motion.button>

              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.btnTime}>Время</motion.button>
            </div>

            <div className={styles.divBtnBooking}>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.btnBooking}>Забронировать</motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Modal;
