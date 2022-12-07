import ContactsComponent from "../components/Contacts";
import SideMenuMainPage from "../components/SideMenuMainPage";
import Footer from "../MainMenu/footer/Footer";
 import style from "./StylesPage/ProductPage.module.scss";
import logoUser from "../MainMenu/files/logoUser.svg";
import logoBasket from "../MainMenu/files/logoBasket.svg";
function ProductPage() {
  return (
    <>
    <div className={style.mainProductPage}>

    <SideMenuMainPage />
      <div className={style.contentMenuProduct}>
       
        <div className={style.logoUser}>
          <img src={logoUser} alt="g" />{" "}
        </div>
        <div className={style.logoBasket}>
          <img src={logoBasket} alt='f' />
        </div>
      </div>
    </div>
     
      <div>
        <ContactsComponent />
      </div>
      <Footer />
      <div></div>
    </>
  );
}

export default ProductPage;
