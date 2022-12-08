import { YMaps, Map } from "react-yandex-maps";
import style from "./Contacts.module.scss";
import iconTele from "../MainMenu/files/iconTelephone.svg";
import iconMap from "../MainMenu/files/iconMap.svg";
function ContactsComponent() {
  return (
    <div className={style.MapMain}>
      <header className={style.contactAndLine}>
        <p>Контакты</p> <hr className={style.lineContact}></hr>
      </header>
      {/* <div> */}
      <div className={style.timeAndMap}>
        <div className={style.travelTimeRestaurant}>
          <div className={style.firstTimeRestaurant}>
            <div>
              <div>
                <h1>2</h1>
                <h2>мин</h2>
              </div>
              <p className={style.outPlace}>из центра Грозного</p>
            </div>
            <div>
              <div>
                <h1>12</h1>
                <h2>мин</h2>
              </div>
              <p className={style.outPlace}>от Ленты</p>
            </div>
          </div>
          <div className={style.secondTimeRestaurant}>
            <div className={style.timeText}>
              <div>
                <h1>42</h1>
                <h2>мин</h2>
              </div>
              <p className={style.outPlace}>из Гудермеса</p>
            </div>
            <div>
              <div className={style.Kurchaloy}>
                <h1>52</h1>
                <h2>мин</h2>
              </div>
              <p className={style.outPlace}>из Курчалоя</p>
            </div>
            {/* end */}
          </div>
        </div>
        <div>
          <div className={style.shortInformationCart}>
            <div className={style.adresTime}>
              <div className={style.iconText}>
                <div className={style.iconMapDiv}><img className={style.iconMap} src={iconMap} alt="f" /></div>
                <p className={style.textAdress}>Санкт-Петербург, Северная дорога, 11 </p>
              </div>
              <div  className={style.iconText2}>
               <div className={style.iconTeleDiv}><img className={style.iconTele} src={iconTele} alt="d" /></div>  <p className={style.phoneNumber}>+7 (925) 807-89-79</p>
              </div>
              <p className={style.colorText}>Время работы</p>
              <p className={style.colorText}>Пн-Вск с 09:00 до 00:00</p>
              <div className={style.buttonsAdress}>
                <dutton className={style.adressBtn}>Бронь столика</dutton>
                <dutton className={style.adressBtn}>Задать вопрос</dutton>
              </div>
            </div>
          </div>
          <YMaps>
            <div>
              <Map
                className={style.Ymaps}
                defaultState={{ center: [43.324675, 45.692376], zoom: 15 }}
              />
            </div>
          </YMaps>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default ContactsComponent;
