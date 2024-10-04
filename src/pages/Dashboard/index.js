import { useContext } from 'react';
import styles from './Dashboard.module.css';
import { UserContext } from '../../contexts/usercontext';

const Dashboard = () => {
    const { user, setUser } = useContext(UserContext);
    console.log(setUser);
    const urlapi = process.env.REACT_APP_API_URL;
    
    
    return (
        <div className={styles.login}>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard;