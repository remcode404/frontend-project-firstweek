import React from "react";
import styles from "./Menu.module.scss";
import logotip from "./files/logo.png";
import x from "./files/eva_close-fill.png";
import logoYouTube from "./files/Group.png";
import logoVK from "./files/Vector (4).png";
import logoTG from "./files/Vector (5).png";
import { Link } from "react-router-dom";

function Menu({ setMenuWindow, menuWindow }) {
  const handleOpenWindow = () => {
    setMenuWindow(!menuWindow);
  };

  return (
    <div className={styles.parentDiv}>
      <div className={styles.frame1}>
        <img src={logotip} alt="logo" className={styles.imgLogo} />

        <div onClick={() => handleOpenWindow()} className={styles.xParent}>
          <img src={x} alt="x" className={styles.imgX} />
        </div>
      </div>

      <div className={styles.frame2}>
        <Link className={styles.linkTextMenu} to="/">
          <div className={styles.textMenu}>На главную</div>
        </Link>
        <Link className={styles.linkMenu} to="/products">
          <div className={styles.textDelivery}>Меню</div>
        </Link>
        <div className={styles.textPayment}>Оплата</div>
        <button className={styles.btnTableReservation}>Бронь столика</button>
      </div>

      <div className={styles.frame3}>
        <img src={logoYouTube} alt="YouTube" className={styles.imgYouTube} />

        <img src={logoVK} alt="VK" className={styles.imgVK} />

        <img src={logoTG} alt="TG" className={styles.imgTG} />
      </div>
    </div>
  );
}

export default Menu;
