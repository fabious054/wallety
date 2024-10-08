import { useContext,useState } from 'react';
import styles from './Login.module.css';
import { UserContext } from '../../contexts/usercontext';
import { Link, Navigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaEyeLowVision } from "react-icons/fa6";

import imgCloud from '../../imgs/cloudImg.png';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { alert } from '../../utils/Alert';

import axios from 'axios';
import { login } from '../../utils/Requests';

const Login = () => {
    const { user, setUser } = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const  loginFnc = async (e) => {
        e.preventDefault();
        console.log(username, password);
        // alert();
        const response = await login(username, password);
        console.log(response);
      
    }

    return (
        <div className={styles.loginScreen}>
            <div style={{backgroundImage:`url(${imgCloud})`}} className={styles.login}>
                <h1>Login</h1>
                <Form onSubmit={loginFnc}>
                    <Input action={setUsername} text="Username" type="text" icon={<FaUser/>}/>
                    <Input action={setPassword} text="Password" type="password" icon={<FaEyeLowVision/>} />
                    <Button>Login</Button>
                </Form>
            </div>
        </div>
    )
}

export default Login;