import { useContext, useState } from 'react';
import styles from './Header.module.css';
import { CiTextAlignCenter,CiTextAlignLeft } from "react-icons/ci";
import { useLocation, useParams } from "react-router-dom";
import { UserContext } from '../../contexts/usercontext';
import { IoIosArrowDropdown,IoIosArrowDropdownCircle  } from "react-icons/io";

const Header = () => {
    const [isOpen, setIsOpen] = useState(true);
    
    const { user, setUser } = useContext(UserContext);
    
    // pegar o path da url
    const location = useLocation();
    const path = location.pathname == '/' ? 'Dashboard' : location.pathname.replace('/','');
    

    const iconChangeHandler = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className={styles.header}>
            <div className={styles.breadcrumps}>
                <div className={styles.breadcrumpIcon} onClick={iconChangeHandler}>
                    {isOpen ? <CiTextAlignCenter /> : <CiTextAlignLeft />}
                </div>
                <h6 className={styles.breadcrumpTitle}>{path}</h6>
            </div>
            <div className={styles.user}>
                <h6 className={styles.userName}>{`Olá, ${user.username}`} </h6>
                <IoIosArrowDropdownCircle  className={styles.userIcon}/>
            </div>
        </header>
    )
}

export default Header;