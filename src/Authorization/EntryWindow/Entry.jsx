import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignIn } from "../../reducers/Slice/registrationSlice";
import styles from "../EntryWindow/Entry.module.scss";
import entryX from "../EntryWindow/files/eva_close-fill.png";
import logo from "../EntryWindow/files/logo.png";

const Entry = () => {
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
    <div className={styles.entryParent}>
      <div className={styles.blockEntry}>
        <div className={styles.divX}>
          <img className={styles.imgX} src={entryX} alt="x" />
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
            <button className={styles.btnEntry} type="submit">
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Entry;
