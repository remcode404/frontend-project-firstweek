import React, { useState } from "react";
import styles from "../AuthorizationWindow/Window.module.scss";
import logo from "../AuthorizationWindow/files/logo.png";
import authX from "../AuthorizationWindow/files/eva_close-fill.png";

import { useDispatch } from "react-redux";
import { authSignUp } from "../../reducers/Slice/registrationSlice";

import { motion } from "framer-motion";

function Window() {
  const [phone, setPhone] = useState("");
  const [usersName, setUsersName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(authSignUp({ phone, email, usersName, password }));
  };


  const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      drag
      dragConstraints={{
        top: -150,
        left: -150,
        right: 150,
        bottom: 150,
      }}
      className={styles.parentAuth}
    >
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1.5 }}
        className={styles.blockAuth}
      >
        <div className={styles.blockX}>
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className={styles.imgX}
            src={authX}
            alt="x"
          />
        </div>
/////////
        <div className={styles.divLogo}>
          <img className={styles.imgLogo} src={logo} alt="logo" />
        </div>

        <div className={styles.blockTextAuth}>
          <div className={styles.textAuth}>Авторизация</div>
        </div>

        <form onSubmit={handleSignUp}>
        <div className={styles.blockName}>
          <input
            className={styles.inpName}
            value={usersName}
            type="text"
            placeholder="   Введите имя..."
            onChange={(e) => setUsersName(e.target.value)}
          />
        </div>

        <div className={styles.divPhone}>
          <input
            className={styles.inpPhone}
            value={phone}
            type="text"
            placeholder="   +7 (999) 999 99-99"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className={styles.divEmail}>
          <input
              className={styles.inpEmail}
              value={email}
              type="text"
              placeholder="   Эл.почта..."
              onChange={(e) => setEmail(e.target.value)}
          />
        </div>



        <div className={styles.divPassword}>
          <input
            className={styles.inpPassword}
            value={password}
            type="password"
            placeholder="   Придумайте пароль..."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className={styles.blockBtnAuth}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.btnAuth}
            type="submit"
          >
            Зарегистрироваться
          </motion.button>
        </div>
        </form>


        <div className={styles.blockLoginBtn}>
          <div className={styles.textLogin}>Уже есть аккаунт?</div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.btnLogin}
          >
            Войти
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Window;
