import { useContext } from 'react';
import styles from './Login.module.css';
import { UserContext } from '../../contexts/usercontext';
import { Link, Navigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";

import imgCloud from '../../imgs/cloudImg.png';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
    const { user, setUser } = useContext(UserContext);
    console.log(setUser);
    const urlapi = process.env.REACT_APP_API_URL;

    return (
        <div className={styles.loginScreen}>
            <div style={{backgroundImage:`url(${imgCloud})`}} className={styles.login}>
                <h1>Login</h1>
                <Form>
                    <Input text="Username" type="text" icon={<FaUser/>}/>
                    <Input text="Password" type="password" icon={<FaEyeLowVision/>} />
                    <Button>Login</Button>
                </Form>
            </div>
        </div>
    )
}

export default Login;