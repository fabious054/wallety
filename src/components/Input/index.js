import { useState } from "react";
import styles from "./Input.module.css";
import { FaEye } from "react-icons/fa";

const Input = ({text,type,icon,action,changeType = false}) => {
const [inputType, setInputType] = useState(type);
const [eye, setEye] = useState(icon);

  const changeTypeFnc = () => {
    if(changeType){
      if(inputType === 'password'){
        setInputType('text');
        setEye(<FaEye/>);
      }else{
        setInputType('password');
        setEye(icon);
      }
    }
  }
  const handleInputChange = (e) => {
    action(e.target.value); 
  };

  return (
    <div className={styles.inputGroup}>
      <label onClick={() => changeTypeFnc()} className={styles.label}>
        {eye}
      </label>
      <input
        onChange={(e) => handleInputChange(e)}
        className={styles.input}
        type={inputType}
        placeholder={text}
      />
    </div>
  );
};

export default Input;