import styles from "../scssFiles/AboutRestaurant.module.scss";
import ContactsComponent from "../../../../components/Contacts";
import DeliveryService from "./DeliveryService";
import MenuComponent from "./MenuComponent";
function AboutRestaurant() {
  return (
    <div className={styles.our}>
      <div className={styles.aboutRestaurant}>
        <div className={styles.ourRestaurant}>
          <header className={styles.header}>
            <p className={styles.restaurantText}>
              {" "}
              O Ресторане <hr className={styles.line}></hr>{" "}
            </p>
          </header>
          <div className={styles.nameAndDescription}>
            <div className={styles.nameRestaurant}>
              <h2>Food Exxe Relo</h2>
            </div>
            <p className={styles.restaurantDescription}>
              Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh. In
              lectus phasellus non ornare eget velit. Facilisi urna, tristique
              dui, rhoncus, dolor. Tincidunt enim gravida dignissim leo pulvinar
              sit volutpat nulla vestibulum. Morbi pellentesque enim massa
              laoreet vel id. Lectus ac, facilisis neque turpis. Morbi massa
              enim nullam sem vehicula. Amet quis pellentesque enim porttitor
              lectus interdum. Nisi, faucibus pharetra at porttitor. Fringilla
              luctus pretium in viverra. In adipiscing tempor amet malesuada
              ullamcorper ut sagittis. Dui, scelerisque vulputate risus massa
              dictum. Cras at quis in eu, faucibus feugiat vel. At.
            </p>
          </div>
        </div>
        <MenuComponent />
        <DeliveryService/>
        <ContactsComponent />
      </div>
    </div>
  );
}

export default AboutRestaurant;
