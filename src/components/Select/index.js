import { useEffect, useState } from "react";
import styles from "./Select.module.css";
import { getStatesByCountry,getCitiesByState } from "../../utils/Requests";

const Select = ({optionsType,action,stateId = false}) => {
  const [options, setOptions] = useState([]);

  const handleInputChange = (e) => {
    action(e.target.value); 
  };

  useEffect(() => {
    if(optionsType === 'states'){
      getStatesByCountry().then((response) => {
        setOptions(response.data);
      });
    }
    if(optionsType === 'cities'){
      getCitiesByState(stateId).then((response) => {
        setOptions(response.data);
      });
    }

  }
  ,[optionsType]);  

  return (
    <select onChange={(e) => handleInputChange(e)} className={styles.select}>
      <option value="0">
        {optionsType === 'states' ? 'Selecione o estado' : 'Selecione a cidade'}
      </option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;