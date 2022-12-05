// import MainPhoto from "../../files/Rectangle.png";
import styles from "./Main.module.scss";
import SideMenuMainPage from "./SideMenuMainPage";
import TextMenuMainPage from "./TextMenuMainPage";

function Main() {
  return (
    <div className={styles.Main}>
      <div className={styles.mainPhoto}>
        <SideMenuMainPage />
        <h1 className={styles.restoranName}>
          Видовой ресторан Food Exxe Relo на Крестовском острове
        </h1>
        <TextMenuMainPage />
      </div>
    </div>
  );
}

export default Main;
