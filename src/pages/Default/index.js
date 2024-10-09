import { Outlet } from "react-router-dom";
import styles from "./Default.module.css";
import Header from "../Header";

const Default = () => {
    return (
        <div className={styles.defaultPage}>
            <Header />
            <Outlet />
        </div>
    );
}

export default Default;