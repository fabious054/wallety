import { useContext, useEffect, useState } from 'react';
import styles from './Header.module.css';
import { CiTextAlignCenter,CiTextAlignLeft } from "react-icons/ci";
import { useLocation, useParams } from "react-router-dom";
import { UserContext } from '../../contexts/usercontext';
import { IoIosArrowDropdown,IoIosArrowDropdownCircle  } from "react-icons/io";
import { PageContext } from '../../contexts/pageContext';
import { hundlerPathChanger } from '../../utils/PagePathChanger';

const Header = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { user, setUser } = useContext(UserContext);
    const { page, setPage } = useContext(PageContext);
    
    const location = useLocation();
    const path = location.pathname == '/' ? 'dashboard' : location.pathname.replace('/','');

    useEffect(() => {
        hundlerPathChanger(path, setPage);
    }, [path]);
    

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