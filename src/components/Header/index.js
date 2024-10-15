import { useContext, useEffect, useState } from 'react';
import styles from './Header.module.css';
import { CiTextAlignCenter,CiTextAlignLeft } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from '../../contexts/usercontext';
import { PageContext } from '../../contexts/pageContext';
import { hundlerPathChanger } from '../../utils/PagePathChanger';
import { AsideContext } from '../../contexts/asideContext';

import { CiLogout } from "react-icons/ci";
import { removeLocal } from '../../utils/LocalStorage';

const Header = () => {
    const { user, setUser } = useContext(UserContext);
    const { page, setPage } = useContext(PageContext);
    const { menu, setMenu } = useContext(AsideContext);
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname == '/' ? 'dashboard' : location.pathname.replace('/','');

    useEffect(() => {
        hundlerPathChanger(path, setPage);
    }, [path]);

    const logout = () => {
        setUser(null);
        removeLocal('user');
    }
    

    const iconChangeHandler = () => {
        const changeTo = menu == 'opened' ? 'closed' : 'opened';
        setMenu(changeTo);
    };
    return (
        <header className={styles.header}>
            <div className={styles.breadcrumps}>
                <div className={styles.breadcrumpIcon} onClick={iconChangeHandler}>
                    {menu == "opened" ? <CiTextAlignCenter /> : <CiTextAlignLeft />}
                </div>
                <h6 className={styles.breadcrumpTitle}>{path}</h6>
            </div>
            <div className={styles.user}>
                <h6 className={styles.userName}>{`Olá, ${user.username}`} </h6>
                <CiLogout onClick={logout} title='Logout' className={styles.userIcon}/>
            </div>
        </header>
    )
}

export default Header;