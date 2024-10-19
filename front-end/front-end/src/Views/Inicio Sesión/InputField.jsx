function InputField({
  id, // Añadimos el prop id
  type,
  placeholder,
  value,
  onChange,
  icon,
  togglePasswordVisibility,
  error,
}) {
  return (
    <div className="control-group">
      <input
        id={id} // Usamos el id pasado como prop
        type={type}
        className={`login-field ${error ? "error-border" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {icon && (
        <label className="login-field-icon" onClick={togglePasswordVisibility}>
          <i className={`fa ${icon}`} style={{ cursor: "pointer" }}></i>
        </label>
      )}
      {<span className="error-message">{error}</span>}
    </div>
  );
}

export default InputField;
