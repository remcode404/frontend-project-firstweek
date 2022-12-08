import styles from "./Side.module.scss";
import vk from "../MainMenu/files/vk.svg";
import youtube from "../MainMenu/files/youtube.svg";
import telegram from "../MainMenu/files/telegram.svg";
import logo from "../MainMenu/files/logo.svg";
import btnLogo from "../MainMenu/files/btnLogo.svg";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../reducers/Slice/productSlice";
import { motion } from "framer-motion"


function SideMenuMainPage({menuWindow, setMenuWindow }) {
  const dispatch = useDispatch()
useEffect(()=>{
dispatch(fetchProducts())
},[dispatch])
const handleOpenWindow = () => {
  setMenuWindow(!menuWindow)
}


//  console.log(MenuWindow)
  return (
    <div className={styles.sideMenu}>
      <div className={styles.logo}>
        <img className={styles.logos} src={logo} alt="" />
        <motion.button 
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleOpenWindow()} className={styles.btnLogo}>
            <img className={styles.btnLogos} src={btnLogo} alt="logo" />
        </motion.button>
      </div>

      <div className={styles.socialNetworks}>
       
         <a href="https://www.youtube.com/@user-ru8oy3op1s">
         <img className={styles.socialMedia} src={youtube} alt="" />
         </a>

     
        
         <a href="https://vk.com/dukha_vaha">  <img className={styles.socialMedia} src={vk} alt="" /> </a>  
       <a href="https://t.me/izn0795"> <img className={styles.socialMedia} src={telegram} alt="" />  </a>   
      </div>
    </div>
  );
}

export default SideMenuMainPage;
