import styles from "../scssFiles/DeliveryService.module.scss";
import { motion } from "framer-motion"

function DeliveryService() {
  return (
    <div className={styles.our}>
      <div className={styles.aboutRestaurant}>
        <div className={styles.ourRestaurant}>
          <header className={styles.header}>
            <p className={styles.DeliveryText}>
              {" "}
              доставка <hr className={styles.line}></hr>{" "}
            </p>
          </header>
          <div className={styles.nameAndDescription}>
            <div className={styles.nameRestaurant}>
              <h2 className={styles.DeliveryServiceText}  >Служба доставки</h2>
            </div>
            <div className={styles.textAndButton}>
            <p className={styles.restaurantDescription}>
              Phasellus diam, ultrices lobortis integer et. Diam, purus vel
              sagittis, non, a. In risus, venenatis enim vitae mauris aliquet
              orci. Consectetur nibh interdum nullam ut lobortis eu etiam sem.
              Et in vitae pellentesque non, lectus orci natoque faucibus
              suspendisse. Semper aliquam id et ultrices velit donec lacus. In
              odio sit nibh volutpat cras placerat sit feugiat dignissim. Rutrum
              et suspendisse tortor, lobortis eleifend in fringilla. Egestas
              cursus imperdiet cursus dui, nulla id massa. Hendrerit nam enim
              semper porttitor imperdiet diam semper. Nulla sit etiam cras morbi
              enim elementum euismod sapien.
            </p>
       <div className={styles.ServicesButtons}>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              className={styles.serviceButton}>Подробнее</motion.button>

            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.9 }}
              className={styles.ifServicesButton} >Условия доставки</motion.button>
       </div>
            </div>
           
           
          </div>
   
        </div>
      </div>
    </div>
  );
}

export default DeliveryService;
