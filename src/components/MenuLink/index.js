import { useContext } from "react";
import { PageContext } from "../../contexts/pageContext";
import styles from "./MenuLink.module.css";
import { AsideContext } from "../../contexts/asideContext";
import { useNavigate } from "react-router-dom";

const MenuLink = ({ title, icon,path,linkTo }) => {
    const {page} = useContext(PageContext);
    const { menu } = useContext(AsideContext);
    const navigate = useNavigate();

    const openPage = () =>{
      navigate(linkTo);
    }

    return (
        <li onClick={openPage} className={`${styles.link} ${styles[menu]} ${page === path ? styles.active : ""}` }>
            {page === path && <span className={styles.selected}></span>}
           <span className={styles.icon}>{icon}</span>
            <h6>{title}</h6>
        </li>
    );
}

export default MenuLink;