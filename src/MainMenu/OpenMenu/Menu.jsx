import React from "react";
import styles from "./Menu.module.scss";
import logotip from "./files/logo.png";
import x from "./files/eva_close-fill.png";
import logoYouTube from "./files/Group.png";
import logoVK from "./files/Vector (4).png";
import logoTG from "./files/Vector (5).png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

function Menu({ setMenuWindow, menuWindow }) {
  const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 1 },
  };

  const handleOpenWindow = () => {
    setMenuWindow(!menuWindow);
  };

  return (
    <motion.div 
    variants={animationConfiguration}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.5 }}
      className={styles.parentDiv}>
      <div className={styles.frame1}>
        <img src={logotip} alt="logo" className={styles.imgLogo} />

        <div onClick={() => handleOpenWindow()} className={styles.xParent}>
          <motion.img 
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }} 
            src={x} alt="x" className={styles.imgX} />
        </div>
      </div>

      <div className={styles.frame2}>
        <Link className={styles.linkTextMenu} to="/">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}        
            className={styles.textMenu}>На главную</motion.div>
        </Link>
        <Link className={styles.linkMenu} to="/products">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} 
            className={styles.textDelivery}>Меню</motion.div>
        </Link>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className={styles.textPayment}>Оплата</motion.div>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }} 
          className={styles.btnTableReservation}>Бронь столика</motion.button>
      </div>

      <div className={styles.frame3}>
        <img src={logoYouTube} alt="YouTube" className={styles.imgYouTube} />

        <img src={logoVK} alt="VK" className={styles.imgVK} />

        <img src={logoTG} alt="TG" className={styles.imgTG} />
      </div>
    </motion.div>
  );
}

export default Menu;
