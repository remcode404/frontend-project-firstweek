// import MainPhoto from "../../files/Rectangle.png";
import { useState } from "react";
import styles from "./Main.module.scss";
import SideMenuMainPage from "../../../components/SideMenuMainPage";
import TextMenuMainPage from "./TextMenuMainPage";
import Menu from "../../OpenMenu/Menu";
import ModalWindow from "../../OpenModal/Modal";
import Entry from '../../../Authorization/EntryWindow/Entry'
import Window from "../../../Authorization/AuthorizationWindow/Window";

function Main() {
  const [menuWindow, setMenuWindow] = useState(false);
  const [modalWindow, setModalWindow] = useState(false);

  const [entryWindow, setEntryWindow] = useState(false)

  const [registration, setRegistration] = useState(false)




  return (
    <div className={styles.Main}>
      <div className={styles.mainPhoto}>
        <SideMenuMainPage
          setMenuWindow={setMenuWindow}
          menuWindow={menuWindow}
        />

        <div className={styles.openMenuWindow}>
          {" "}
          {menuWindow ? (
            <Menu setMenuWindow={setMenuWindow} menuWindow={menuWindow} />
          ) : null}
        </div>
        <div className={styles.openModalWindow}>
          {modalWindow ? (
            <ModalWindow
              setModalWindow={setModalWindow}
              modalWindow={modalWindow}
            />
          ) : null}
        </div>

        {entryWindow ? ( <div className={styles.entryWindow}>  <Entry registration={registration} setRegistration={setRegistration}  entryWindow={entryWindow} setEntryWindow={setEntryWindow} /> </div>): null}   
        {registration ? ( <div className={styles.entryWindow}>  <Window  entryWindow={entryWindow} setEntryWindow={setEntryWindow}  registration={registration} setRegistration={setRegistration} /> </div>): null }

        <h1 className={styles.restoranName}>
          Видовой ресторан Food Exxe Relo на Крестовском острове.
        </h1>
        <TextMenuMainPage
         entryWindow={entryWindow}
          setEntryWindow={setEntryWindow}
          setModalWindow={setModalWindow}
          modalWindow={modalWindow}
        />
      </div>
    </div>
  );
}

export default Main;
