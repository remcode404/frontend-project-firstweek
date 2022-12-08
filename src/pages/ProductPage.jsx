import ContactsComponent from "../components/Contacts";
import SideMenuMainPage from "../components/SideMenuMainPage";
import Footer from "../MainMenu/footer/Footer";
import style from "./StylesPage/ProductPage.module.scss";
import logoUser from "../MainMenu/files/logoUser.svg";
import logoBasket from "../MainMenu/files/logoBasket.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCategory } from "../reducers/Slice/categorySlice";
import { fetchProducts } from "../reducers/Slice/productSlice";
import Menu from "../MainMenu/OpenMenu/Menu";
function ProductPage() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.reducerCategory.category);
  const products = useSelector((state) => state.reducerProduct.products);
  const error = useSelector((state) => state.reducerProduct.error);

  const [menuWindow, setMenuWindow] = useState(false);
  const [modalWindow, setModalWindow] = useState(false);
  console.log(products);

  if (error) {
    <h1>{error}</h1>;
  }
  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <div className={style.mainProductPage}>
       
       <SideMenuMainPage  setMenuWindow={setMenuWindow}
          menuWindow={menuWindow} />
        
        <div className={style.openMenuWindow}>
          {" "}
          {menuWindow ? (
            <Menu setMenuWindow={setMenuWindow} menuWindow={menuWindow} />
          ) : null}
        </div>
        <div className={style.content}>
          <div className={style.categories}>
            {category.map((item) => (
              <button className={style.category}>{item.name}</button>
            ))}
          </div>
          <div className={style.products}>
            {products.map((item) => (
              <div className={style.itemProduct}>
                <div>
                  <img className={style.img} src={item.img} alt="f" />
                </div>
                <p className={style.ItemName}>{item.name}</p>
                <div className={style.priceAndButton}>
                  {" "}
                  <p className={style.ItemPrice}>{item.price}₽</p>{" "}
                  <button className={style.basketButton}>В Корзину</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <header className={style.contentMenuProduct}>
          <img src={logoUser} alt="d" />
          <img src={logoBasket} alt="d" />
        </header>
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
