import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <Link className={styles.button} to="/">Voltar</Link>
        </div>
    )
}

export default NotFound;