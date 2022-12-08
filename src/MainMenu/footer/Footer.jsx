import logo from '../files/logo.svg'
import style from './Footer.module.scss'
import { motion } from "framer-motion"

function Footer() {
    const textAnimation = {
        hidden: {
          y: 15,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: { type: "spring", stiffness: 100 },
        },
      };
    
return(
    <motion.div 
        variants={textAnimation}
        viewport={{ once: false }}
        initial="hidden"
          whileInView="visible"
        className={style.footer}>
        <div className={style.footerContent}>

        <div><img src={logo} alt='d'/></div>
        <p className={style.footerText}>Политика конфиденциальности</p>
        <p className={style.footerText}>@izn0795</p>

        </div>
   
    </motion.div>
    )
}

export default Footer