import styles from "./Aside.module.css";
import logo from "../../imgs/logo-blue.png";
import { AsideContext } from "../../contexts/asideContext";
import { useContext } from "react";
import MenuLink from "../MenuLink";

import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { CiCreditCard1 } from "react-icons/ci";

const Aside = () => {
    const { menu } = useContext(AsideContext);
    
    return (
        <aside className={`${styles.aside} ${styles[menu]}`}>
            <div className={styles.triangle}></div>
            <div className={styles.box}>
                <div className={styles.header}>
                    <img src={logo} alt="Wallety" />
                </div>
                <div className={styles.menu}>
                    <ul>
                       <MenuLink linkTo="/" path="dashboard" title="Dashboard" icon={<IoHomeOutline />}  />
                       <MenuLink linkTo="/money" path="money" title="Dinheiro" icon={<RiMoneyDollarCircleLine />}  />
                       <MenuLink linkTo="/cards" path="cards" title="Cartões" icon={<CiCreditCard1  />}  />
                       <MenuLink linkTo="/profile" path="profile" title="Perfil" icon={<FaRegUser />}  />
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default Aside;