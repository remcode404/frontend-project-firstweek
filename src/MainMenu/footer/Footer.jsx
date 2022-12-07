import logo from '../files/logo.svg'
import style from './Footer.module.scss'
function Footer() {
return(
    <div className={style.footer}>
        <div className={style.footerContent}>

        <div><img src={logo} alt='d'/></div>
        <p className={style.footerText}>Политика конфиденциальности</p>
        <p className={style.footerText}>@izn0795</p>

        </div>
   
    </div>
    )
}

export default Footer