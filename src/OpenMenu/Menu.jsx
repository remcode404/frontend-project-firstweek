import React from "react";
import styles from "./Menu.module.scss";
import logotip from "../OpenMenu/files/logo.png";
import x from "../OpenMenu/files/eva_close-fill.png";
import logoYouTube from "../OpenMenu/files/Group.png";
import logoVK from "../OpenMenu/files/Vector (4).png";
import logoTG from "../OpenMenu/files/Vector (5).png";

function Menu() {
  return (
    <div className={styles.parentDiv}>
      <div className={styles.frame1}>
        <img src={logotip} alt="logo" className={styles.imgLogo} />

        <div className={styles.xParent}>
          <img src={x} alt="x" className={styles.imgX} />
        </div>

      </div>


      <div className={styles.frame2}>
        <div className={styles.textMenu}>Меню</div>
        <div className={styles.textDelivery}>Доставка</div>
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
