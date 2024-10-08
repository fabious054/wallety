import styles from "./Input.module.css";

const Input = ({text,type,icon}) => {

  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>
        {icon}
      </label>
      <input
        className={styles.input}
        type={type}
        placeholder={text}
      />
    </div>
  );
};

export default Input;