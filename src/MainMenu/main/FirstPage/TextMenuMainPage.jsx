import style from "./Main.module.scss";

function TextMenuMainPage() {
  return (
    <div className={style.textMenu}>
      <button className={style.btnTextMenu}>Меню</button>
      <button className={style.btnTextMenu}>Доставка</button>
      <button className={style.btnTextMenu}>Оплата</button>
      <button className={style.btnBron}>Забронировать</button>
    </div>
  );
}

export default TextMenuMainPage;
