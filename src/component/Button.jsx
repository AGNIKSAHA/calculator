import styles from "./Button.module.css";
const Button = ({ buttonName, onButtonclick }) => {
  return (
    <button className={styles.button} onClick={() => onButtonclick(buttonName)}>
      {buttonName}
    </button>
  );
};
export default Button;
