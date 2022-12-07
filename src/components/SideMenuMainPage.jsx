import styles from "./Side.module.scss";
import vk from "../MainMenu/files/vk.svg";
import youtube from "../MainMenu/files/youtube.svg";
import telegram from "../MainMenu/files/telegram.svg";
import logo from "../MainMenu/files/logo.svg";
import btnLogo from "../MainMenu/files/btnLogo.svg";

function SideMenuMainPage({menuWindow, setMenuWindow }) {

const handleOpenWindow = () => {
  setMenuWindow(!menuWindow)
}


//  console.log(MenuWindow)
  return (
    <div className={styles.sideMenu}>
      <div className={styles.logo}>
        <img className={styles.logos} src={logo} alt="" />
        <button onClick={() => handleOpenWindow()} className={styles.btnLogo}>
          <img className={styles.btnLogos} src={btnLogo} alt="" />
        </button>
      </div>

      <div className={styles.socialNetworks}>
        <img className={styles.socialMedia} src={youtube} alt="" />
        <img className={styles.socialMedia} src={vk} alt="" />
        <img className={styles.socialMedia} src={telegram} alt="" />
      </div>
    </div>
  );
}

export default SideMenuMainPage;
