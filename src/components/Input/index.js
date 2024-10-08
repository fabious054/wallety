import styles from "./Input.module.css";

const Input = ({text,type,icon,action}) => {

  const handleInputChange = (e) => {
    action(e.target.value); 
  };

  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>
        {icon}
      </label>
      <input
        onChange={(e) => handleInputChange(e)}
        className={styles.input}
        type={type}
        placeholder={text}
      />
    </div>
  );
};

export default Input;