import Main from "./main/FirstPage/Main";
import AboutRestaurant from "./main/secondPage/jsxFiles/AboutRestaurant";
import style from "./AboutRestaurant.module.scss";
import Footer from "./footer/Footer";
function AppMain() {
  return (
    <div className={style.AppMain}>
      <Main id={style.sec1} />
      <AboutRestaurant id={style.sec2} />
      <Footer />
    </div>
  );
}

export default AppMain;
