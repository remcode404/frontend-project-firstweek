import style from "./../scssFiles/MenuComponent.module.scss";
import firstrectengle from "../../../files/Rectangle1.png";
import secondRectengle from "../../../files/Rectangle2.png";
import { motion } from "framer-motion"

function MenuComponent() {
  return (
    <div className={style.our}>
      <div className={style.ourRestaurant}>
        <header className={style.header}>
          <p className={style.MenuText}>
            {" "}
            меню <hr className={style.line}></hr>{" "}
          </p>
        </header>
        <div className={style.nameAndDescription}>
          <div className={style.nameRestaurant}>
            <h2 className={style.titleMenu}>Меню</h2>
          </div>
          <p className={style.restaurantDescription}>
            At faucibus nullam mauris vitae ut non. Augue libero non nibh nec,
            et eget erat. Nascetur nunc neque, varius massa aliquam interdum
            turpis massa. Ac tortor aliquam risus, interdum nisl mauris sit. Ut
            placerat fermentum pellentesque ac at. Vitae venenatis faucibus urna
            mi eget vitae quam eu. Euismod sed mauris id turpis iaculis. Erat
            rutrum dolor, vitae morbi. Nunc cras cras aliquet blandit faucibus
            massa sagittis semper.
          </p>
        </div>
        <div className={style.rectangles}>
          <div className={style.firstRectangles}>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              className={style.firstrectengle}
              src={firstrectengle}
              alt="f"
            />
          </div>
          <div className={style.secondRectangles}>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              className={style.secondRectengle}
              src={secondRectengle}
              alt="f"
            />
          </div>
        </div>

        <div className={style.menuAndBar}>
          <p>
            Основное меню <hr className={style.hr}></hr>
          </p>
          <p>
            Барная карта <hr className={style.hr}></hr>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenuComponent;
