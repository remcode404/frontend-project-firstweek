import React from "react";
import styles from '../AuthorizationWindow/Window.module.scss'
import logo from '../AuthorizationWindow/files/logo.png'
import authX from '../AuthorizationWindow/files/eva_close-fill.png'

function Window() {
    return (
        <div className={styles.parentAuth}>
            <div className={styles.blockAuth}>

                <div className={styles.blockX}>
                    <img className={styles.imgX} src={authX} alt="x" />
                </div>

                <div className={styles.divLogo}>
                    <img className={styles.imgLogo} src={logo} alt="logo" />
                </div>

                <div className={styles.blockTextAuth}>
                    <div className={styles.textAuth}>Авторизация</div>
                </div>

                <div className={styles.blockName}>
                    <input className={styles.inpName} type="text" placeholder="   Введите имя..." />
                </div>

                <div className={styles.divPhone}>
                    <input className={styles.inpPhone} type="text" placeholder="   +7 (999) 999 99-99" />
                </div>
                
                <div className={styles.divEmail}>
                    <input className={styles.inpEmail} type="text" placeholder="   Эл.почта..." />
                </div>

                <div className={styles.divPassword}>
                    <input className={styles.inpPassword} type="password" placeholder="   Придумайте пароль..." />
                </div>

                <div className={styles.blockBtnAuth}>
                    <button className={styles.btnAuth}>Зарегистрироваться</button>
                </div>

                <div className={styles.blockLoginBtn}>
                    <div className={styles.textLogin}>Уже есть аккаунт?</div>
                    <button className={styles.btnLogin}>Войти</button>
                </div>

            </div>
        </div>
    );
}

export default Window;