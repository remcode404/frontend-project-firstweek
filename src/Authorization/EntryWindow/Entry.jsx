import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn } from "../../reducers/Slice/registrationSlice";
import styles from "../EntryWindow/Entry.module.scss";
import entryX from "../EntryWindow/files/eva_close-fill.png";
import logo from "../EntryWindow/files/logo.png";
import { motion } from "framer-motion";

function Entry({ entryWindow, setEntryWindow, registration, setRegistration }) {
  const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const handleEntry = () => {
    setEntryWindow(false);
  };

  const handleRegistration = () => {
    setEntryWindow(false);
    setRegistration(true);
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
    console.log(error);
  };

  return (
    <div
      drag
      dragConstraints={{
        top: -150,
        left: -150,
        right: 150,
        bottom: 150,
      }}
      className={styles.entryParent}
    >
      <div variants={animationConfiguration} className={styles.blockEntry}>
        <button className={styles.divX} onClick={() => handleEntry()}>
          X
        </button>
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
            <button
              className={styles.registrationBtn}
              onClick={() => handleRegistration()}
            >
              Зарегистрироваться
            </button>
            <button className={styles.btnEntry} type="submit">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Entry;
