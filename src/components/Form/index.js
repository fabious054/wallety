import styles from "./Form.module.css";

const Form = ({children,onSubmit}) => {
  return (
    <form className={styles.form}>
      {children}
    </form>
  );
};

export default Form;