function Button({ text, onClick }) {
  return (
    <a
      className="btn btn-primary btn-large btn-block inicia-sesion"
      href="#"
      onClick={onClick}
    >
      {text}
    </a>
  );
}

export default Button;
