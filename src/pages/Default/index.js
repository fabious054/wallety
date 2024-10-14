import { Outlet } from "react-router-dom";
import styles from "./Default.module.css";
import Header from "../../components/Header";
import Aside from "../../components/Aside";

const Default = () => {
    return (
        <div className={styles.defaultPage}>
            <Header />
            <div className={styles.defaultContent}>
                <Aside />
                <Outlet className={styles.outlet} />
            </div>
        </div>
    );
}

export default Default;