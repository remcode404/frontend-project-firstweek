import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn } from "../../reducers/Slice/registrationSlice";
import styles from "../EntryWindow/Entry.module.scss";
import entryX from "../EntryWindow/files/eva_close-fill.png";
import logo from "../EntryWindow/files/logo.png";
import { motion } from "framer-motion";

function Entry() {
  const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state) => state.registration.error);

  const dispatch = useDispatch();

  const handleSetLogin = (e) => {
    setValue(e.target.value);
  };

  function checkEmail(value) {
    const emailRegExp = /\S+@\S+\.\S+/;
    const isEmail = emailRegExp.test(value);
    const type = isEmail ? "email" : "phone";
    return type;
  }

  const handleSignIn = (e) => {
    e.preventDefault();
    if (checkEmail(value) === "email") {
      dispatch(authSignIn({ phone: "", email: value, password: password }));
    } else {
      dispatch(authSignIn({ phone: +value, email: "", password: password }));
    }
    if (error) {
      return <div>{error}</div>;
    }
  };

  return (
    <motion.div drag
    dragConstraints={{
      top: -150,
      left: -150,
      right: 150,
      bottom: 150,
    }} className={styles.entryParent}>
      <motion.div variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1.5 }} className={styles.blockEntry}>
        <div className={styles.divX}>
          <motion.img
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className={styles.imgX}
            src={entryX}
            alt="x"
          />
        </div>

        <div className={styles.divLogo}>
          <img className={styles.imgLogo} src={logo} alt="logo" />
        </div>

        <div className={styles.blockEntryText}>
          <div className={styles.entryText}>Вход</div>
        </div>
        <form onSubmit={handleSignIn}>
          <div className={styles.blockInpLogin}>
            <input
              className={styles.inpLogin}
              type="text"
              value={value}
              placeholder="   Hомер телефона или email..."
              onChange={handleSetLogin}
            />
          </div>
          <div className={styles.blockInpPassword}>
            <input
              className={styles.inpPassword}
              type="password"
              value={password}
              placeholder="   Введите пароль..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.blockBtnEntry}>
            <motion.button whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} className={styles.btnEntry} type="submit">
              Войти
          </motion.button>
        </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Entry;