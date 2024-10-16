
import { useContext, useState } from 'react';
import Form from '../../components/Form';
import { UserContext } from '../../contexts/usercontext';
import styles from './Profile.module.css';
import { FaUser } from 'react-icons/fa';
import Input from '../../components/Input';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import Select from '../../components/Select';
import Button from '../../components/Button';
import { alert } from '../../utils/Alert';
import { editUser } from '../../utils/Requests';
import { setLocal } from '../../utils/LocalStorage';


const Profile = () => {
    const { user, setUser } = useContext(UserContext);

    const [name, setName] = useState(user.name);
    const [lastName,setLastname] = useState(user.lastname);
    const [username, setUsername] = useState(user.username);
    const [born , setBorn] = useState(user.born);
    const [email, setEmail] = useState(user.email);
    const [state, setState] = useState(user.id_state);
    const [city, setCity] = useState(user.id_city);
    

    const changePorfile = async (e) => {
        e.preventDefault();
        console.log('Profile updated');
        const response = await editUser(user.id, name, lastName, username, email, born, 8, state, city);
        alert(response.status, response.message);      
        
        if(response.status === 200){
            setUser(response.data);
            setLocal('user', response.data);
        }  
        
        if(response.message === 'Expired token'){
            setUser(null);
            setLocal('user', null);
        }

    };
    return (
        <div className={styles.container}>
            <div className={styles.formBox}>
                <h1>Perfil</h1>
                <Form onSubmit={changePorfile}>
                    <div className='input-groups'>
                        <Input currentValue={name} action={setName} text="Nome" type="text" icon={<FaUser/>} />
                        <Input currentValue={lastName} action={setLastname} text="Sobrenome" type="text" icon={<FaUser/>} />
                    </div>
                    <div className='input-groups'>
                        <Input currentValue={username} action={setUsername} text="Username" type="text" icon={<FaUser/>} />
                        <Input currentValue={born} action={setBorn} text="Nascimento" type="text" mask="date" icon={<FaUser/>} />
                    </div>
                    <Input currentValue={email} action={setEmail} text="Email" type="email" icon={<MdOutlineAlternateEmail />} />
                    <div className='select-groups'>
                        <Select selected={state} action={setState} optionsType="states" />
                        {state !== 0 && state !== "0"  ? <Select selected={city} action={setCity} optionsType="cities" stateId={state} /> : null}
                    </div>
                    <Button>Salvar</Button>
                </Form>
            </div>
        </div>
    )
}

export default Profile;