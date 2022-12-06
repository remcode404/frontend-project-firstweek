// import MainPhoto from "../../files/Rectangle.png";
import { useState } from "react";
import styles from "./Main.module.scss";
import SideMenuMainPage from "./SideMenuMainPage";
import TextMenuMainPage from "./TextMenuMainPage";
import Menu from "../../OpenMenu/Menu";
import ModalWindow from "../../OpenModal/Modal";
function Main() {
  const [menuWindow, setMenuWindow] = useState(false);
  const [modalWindow, setModalWindow] = useState(false);

  return (
    <div  className={styles.Main}>
      <div className={styles.mainPhoto}>
        <SideMenuMainPage
          setMenuWindow={setMenuWindow}
          menuWindow={menuWindow}
        />

        <div className={styles.openMenuWindow}>
          {" "}
          {menuWindow ? ( <Menu setMenuWindow={setMenuWindow} menuWindow={menuWindow} />) : null}
        </div>
         <div className={styles.openModalWindow}>
         {modalWindow ? <ModalWindow  setModalWindow={setModalWindow} modalWindow={modalWindow} /> : null  }
          </div>
        <h1 className={styles.restoranName}>
          Видовой ресторан Food Exxe Relo на Крестовском острове
        </h1>
        <TextMenuMainPage  setModalWindow={setModalWindow} modalWindow={modalWindow}/>
      </div>
    </div>
  );
}

export default Main;
