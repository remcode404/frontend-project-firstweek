import { Link } from "react-router-dom";
import style from "./Main.module.scss";

function TextMenuMainPage({ modalWindow, setModalWindow }) {
  const handleOpenWindow = () => {
    setModalWindow(!modalWindow);
  };
  return (
    <div className={style.textMenu}>
      <Link to='/products' >
      <button className={style.btnTextMenu}>Меню</button>
      </Link>
      <button className={style.btnTextMenu}>Войти</button>
      <button className={style.btnTextMenu}>О нас</button>
      <button onClick={() => handleOpenWindow()} className={style.btnBron}>
        Забронировать
      </button>
    </div>
  );
}

export default TextMenuMainPage;
