import { Link } from "react-router-dom";
import style from "./Main.module.scss";
import { motion } from "framer-motion";
import Entry from '../../../Authorization/EntryWindow/Entry'
import { useState } from "react";
function TextMenuMainPage({ modalWindow, entryWindow, setEntryWindow, setModalWindow,  }) {

 
const handleEntryWindow = () => {
  setEntryWindow(!entryWindow)
  console.log(entryWindow)
}


  const handleOpenWindow = () => {
    setModalWindow(!modalWindow);
  };
  return (
    <div className={style.textMenu}>
      <Link className={style.btnMenuLink} to="/products">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={style.btnTextMenu}
        >
          Меню
        </motion.button>
      </Link>
      <button
      onClick={() => handleEntryWindow()}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={style.btnTextMenu}
        
      >
        Войти
      </button>
      

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={style.btnTextMenuAll}
      >
        О нас
      </motion.button>
      <motion.button
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => handleOpenWindow()}
        className={style.btnBron}
      >
        Забронировать
      </motion.button>
    </div>
  );
}

export default TextMenuMainPage;
