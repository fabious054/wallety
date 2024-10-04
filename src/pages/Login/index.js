import { useContext } from 'react';
import styles from './Login.module.css';
import { UserContext } from '../../contexts/usercontext';

const Login = () => {
    const { user, setUser } = useContext(UserContext);
    console.log(setUser);
    const urlapi = process.env.REACT_APP_API_URL;
    
    
    return (
        <div className={styles.login}>
            <h1>Login</h1>
            <p>API URL: {urlapi}</p>
            <p>
                {user ? `You are logged in as ${user.username}` : 'Please login'}
            </p>
            <button onClick={() => setUser({id: 1, username: 'john_doe'})}>Login</button>
        </div>
    )
}

export default Login;