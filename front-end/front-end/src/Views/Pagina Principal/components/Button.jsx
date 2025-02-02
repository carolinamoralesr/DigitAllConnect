
import "./Button.css";

const Button = ({ label, onClick }) => (
  <button className="custom-button" onClick={onClick}>
    {label}
  </button>
);

export default Button;
