import styles from "./Aside.module.css";
import logo from "../../imgs/logo-blue.png";
import { AsideContext } from "../../contexts/asideContext";
import { useContext } from "react";

const Aside = () => {
    const { menu, setMenu } = useContext(AsideContext);

    console.log(menu);
    
    return (
        <aside className={styles.aside}>
            <div className={styles.triangle}></div>
            <div className={styles.box}>
                <div className={styles.header}>
                    <img src={logo} alt="Wallety" />
                </div>
            </div>
        </aside>
    );
}

export default Aside;