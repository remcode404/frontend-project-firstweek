import Main from "./main/FirstPage/Main";
import AboutRestaurant from "./main/secondPage/jsxFiles/AboutRestaurant";
import style from "./AboutRestaurant.module.scss";
import Footer from "./footer/Footer";

function AppMain() {
  return (
    <div className={style.AppMain}>
      <div className={style.Main}>
        <Main />
      </div>
      <div className={style.aboutRestaurant}>
        <AboutRestaurant  />
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default AppMain;
