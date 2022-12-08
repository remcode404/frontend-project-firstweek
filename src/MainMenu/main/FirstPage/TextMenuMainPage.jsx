import { Link } from "react-router-dom";
import style from "./Main.module.scss";
import { motion } from "framer-motion"

function TextMenuMainPage({ modalWindow, setModalWindow }) {
  const handleOpenWindow = () => {
    setModalWindow(!modalWindow);
  };
  return (
    <div className={style.textMenu}>
      <Link to='/products' >
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} 
        className={style.btnTextMenu}>Меню</motion.button>
      </Link>
      <motion.button 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }} 
      className={style.btnTextMenu}>Войти</motion.button>
      
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} 
        className={style.btnTextMenu}>О нас</motion.button>
      <motion.button 
        whileHover={{ scale: 1 }}
        whileTap={{ scale: 0.9 }} 
        onClick={() => handleOpenWindow()} className={style.btnBron}>
        Забронировать
      </motion.button>
    </div>
  );
}

export default TextMenuMainPage;
