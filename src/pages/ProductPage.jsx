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
import Lottie from "lottie-react";

function ProductPage() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categoryReducer.category);
  const products = useSelector((state) => state.productSlice.products);
  const error = useSelector((state) => state.productSlice.error);
  const preloader = useSelector((state) => state.productSlice.loading);
  const [search, setSearch] = useState("");
  const [menuWindow, setMenuWindow] = useState(false);
  const [modalWindow, setModalWindow] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [sorted, setSorted] = useState([]);

  const onClickCategory = (id) => {
    setActiveIndex(id);
    console.log(id);
  };

  // const sorted = products.filter((item) =>
  //   !activeIndex ? item : item.categoryId[0] === activeIndex
  // );

  useEffect(() => {
    dispatch(fetchCategory());
    dispatch(fetchProducts());
    setSorted(
      products.filter((item) =>
        !activeIndex ? item : item.categoryId[0] === activeIndex
      )
    );
  }, [activeIndex, dispatch]);

  const hundleSearch = (e) => {
    setSearch(e.target.value);
    e.preventDefault();
  };

  const filterR = sorted.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  if (error) {
    <h1>{error}</h1>;
  }

  return (
    <>
      <div className={style.mainProductPage}>
        <SideMenuMainPage
          setMenuWindow={setMenuWindow}
          menuWindow={menuWindow}
        />

        <div className={style.openMenuWindow}>
          {" "}
          {menuWindow ? (
            <Menu setMenuWindow={setMenuWindow} menuWindow={menuWindow} />
          ) : null}
        </div>
        <div className={style.content}>
          <div className={style.categories}>
            <button
              className={style.allButton}
              onClick={() => setActiveIndex(null)}
            >
              Все
            </button>
            {category.map((item) => (
              <button
                onClick={() => onClickCategory(item._id)}
                key={item._id}
                className={style.category}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className={style.searchItem}>
            <input
              className={style.liveSearch}
              value={search}
              type="text"
              placeholder="поиск"
              onChange={hundleSearch}
            />
          </div>
          <div className={style.products}>
            {preloader ? <span class={style.loader}></span> : null}

            {filterR.map((item) => (
              <div key={item._id} className={style.itemProduct}>
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

      <div className={style.ContactsComponentMenu}>
        <ContactsComponent />
      </div>
      <Footer />
      <div></div>
    </>
  );
}

export default ProductPage;
