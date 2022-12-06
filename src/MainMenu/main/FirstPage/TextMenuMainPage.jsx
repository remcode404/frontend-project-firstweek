import style from "./Main.module.scss";

function TextMenuMainPage({ modalWindow, setModalWindow }) {
  const handleOpenWindow = () => {
    setModalWindow(!modalWindow);
  };
  return (
    <div className={style.textMenu}>
      <button className={style.btnTextMenu}>Меню</button>
      <button className={style.btnTextMenu}>Доставка</button>
      <button className={style.btnTextMenu}>О нас</button>
      <button onClick={() => handleOpenWindow()} className={style.btnBron}>
        Забронировать
      </button>
    </div>
  );
}

export default TextMenuMainPage;
