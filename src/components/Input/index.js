import { useEffect, useState } from "react";
import styles from "./Input.module.css";
import { FaEye } from "react-icons/fa";

const Input = ({ text, type, icon, action, changeType = false, mask = false,currentValue }) => {
  const [inputType, setInputType] = useState(type);
  const [eye, setEye] = useState(icon);
  const [value, setValue] = useState(currentValue);

  const formatDateFromDB = (dateString) => {
    const date = new Date(dateString); // Converte a string ISO em um objeto Date
    const formattedDate = date.toLocaleDateString('pt-BR', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit'
    });
    return formattedDate;
}

  useEffect(() => {
    if(mask === 'date'){
        setValue(formatDateFromDB(currentValue));
    }
  },[currentValue]);


  const changeTypeFnc = () => {
    if (changeType) {
      if (inputType === "password") {
        setInputType("text");
        setEye(<FaEye />);
      } else {
        setInputType("password");
        setEye(icon);
      }
    }
  };

  const handleInputChange = (e) => {
    let inputValue = e.target.value;

    // Se o mask for "date", formata a data para dd/mm/yyyy
    if (mask === "date") {
      inputValue = inputValue.replace(/\D/g, ""); // Remove tudo que não for número
      if (inputValue.length > 2 && inputValue.length <= 4) {
        inputValue = inputValue.slice(0, 2) + "/" + inputValue.slice(2); // Formata para dd/mm
      } else if (inputValue.length > 4) {
        inputValue = inputValue.slice(0, 2) + "/" + inputValue.slice(2, 4) + "/" + inputValue.slice(4, 8); // Formata para dd/mm/yyyy
      }
    }

    setValue(inputValue); // Atualiza o valor do campo com a formatação
    action(inputValue); // Passa o valor formatado para a função action
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
        value={value} // Exibe o valor formatado no campo
        maxLength={mask === "date" ? 10 : undefined} // Limita o campo para 10 caracteres no formato de data
      />
    </div>
  );
};

export default Input;
