import { useContext, useState } from 'react';
import styles from './Register.module.css';
import { UserContext } from '../../contexts/usercontext';

import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import imgCloud from '../../imgs/cloudImg.png';

import { FaUser } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaEyeLowVision } from 'react-icons/fa6';
import { Link, Navigate } from 'react-router-dom';
import Select from '../../components/Select';
import { createAccount } from '../../utils/Requests';
import { alert } from '../../utils/Alert';
import { setLocal } from '../../utils/LocalStorage';

const Register = () => {
    const { user, setUser } = useContext(UserContext);

    const [name, setName] = useState('');
    const [lastName,setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [born , setBorn] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [state, setState] = useState(0);
    const [city, setCity] = useState(0);

    const submitHandler = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert(400, 'As senhas não coincidem');
            return;
        }
        if(password.length < 6){
            alert(400, 'A senha deve ter no mínimo 6 caracteres');
            return;
        }

        const response = await createAccount( name, lastName,username,email,born,8 ,state,city,password);
        alert(response.status, response.message);      
        
        if(response.status === 200){
            setUser(response.data);
            setLocal('user', response.data);
        }   
    };
    if (user) {
        return <Navigate to="/" />;
    }
    
    
    return (
        <div className={styles.registerScreen}>
            <div style={{backgroundImage:`url(${imgCloud})`}} className={styles.login}>
                <h1>Criar conta</h1>
                <Form onSubmit={submitHandler}>
                    <div className='input-groups'>
                        <Input action={setName} text="Nome" type="text" icon={<FaUser/>} />
                        <Input action={setLastname} text="Sobrenome" type="text" icon={<FaUser/>} />
                    </div>
                    <div className='input-groups'>
                        <Input action={setUsername} text="Username" type="text" icon={<FaUser/>} />
                        <Input action={setBorn} text="Nascimento" type="text" mask="date" icon={<FaUser/>} />
                    </div>
                        <Input action={setEmail} text="Email" type="email" icon={<MdOutlineAlternateEmail />} />
                    <div className='input-groups'>
                        <Input changeType={true} action={setPassword} text="Senha" type="password" icon={<FaEyeLowVision/>} />
                        <Input changeType={true} action={setConfirmPassword} text="Confirmar senha" type="password" icon={<FaEyeLowVision/>} />
                    </div>
                    <div className='select-groups'>
                        <Select action={setState} optionsType="states" />
                        {state !== 0 && state !== "0"  ? <Select action={setCity} optionsType="cities" stateId={state} /> : null}
                    </div>
                    <Button>Criar</Button>
                </Form>
                <Link className={styles.link} to="/login">Já tenho conta</Link>
            </div>
        </div>
    )
}

export default Register;