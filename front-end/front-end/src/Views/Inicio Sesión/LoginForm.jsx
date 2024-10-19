import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import LoginLink from "./LoginLink";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [userType, setUserType] = useState(null); // Inicializado como null para que ninguno esté preseleccionado
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleLogin = () => {
    const newErrors = {};
    if (!validateEmail(email)) {
      newErrors.email = "Correo electrónico no válido";
    }
    if (password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }
    if (!userType) {
      newErrors.userType = "Debes seleccionar si eres pyme o coach";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Simulación de solicitud de inicio de sesión al backend
      fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, userType }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Error en la respuesta del servidor");
          }
          return res.json();
        })
        .then((data) => {
          console.log("Datos recibidos:", data); // Verificar los datos recibidos
          if (data.error) {
            alert(data.message); // Mostrar mensaje de error desde el servidor
          } else {
            // Redirigir al usuario según el userType y userId recibidos
            const { userType, userId } = data.data;
            if (userType === "pyme" && userId) {
              navigate(`/miperfilPyme/${userId}`);
            } else if (userType === "coach" && userId) {
              navigate(`/miperfilCoach/${userId}`);
            } else {
              alert(
                "Error al obtener datos de usuario. Por favor, intenta nuevamente."
              );
            }
          }
        })
        .catch((error) => {
          console.error("Error en la solicitud:", error); // Mostrar el error en la consola
          alert("Error en el inicio de sesión. Por favor, intenta nuevamente.");
        });
    }
  };

  return (
    <div className="login">
      <div className="login-screen">
        <div className="app-title">
          <h1>Inicia Sesión</h1>
        </div>
        <div className="login-form">
          <InputField
            id="email"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon="fa-envelope"
            error={errors.email}
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <InputField
            id="password"
            type={passwordVisible ? "text" : "password"}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={passwordVisible ? "fa-eye-slash" : "fa-eye"}
            togglePasswordVisibility={togglePasswordVisibility}
            error={errors.password}
          />
          {errors.password && <span className="error">{errors.password}</span>}
          <p className="user-type-title">Selecciona si eres pyme o coach:</p>
          <div className="user-type-selector">
            <label>
              <input
                type="radio"
                value="pyme"
                checked={userType === "pyme"}
                onChange={() => setUserType("pyme")}
              />
              Pyme
            </label>
            <label>
              <input
                type="radio"
                value="coach"
                checked={userType === "coach"}
                onChange={() => setUserType("coach")}
              />
              Coach
            </label>
          </div>
          {errors.userType && <span className="error">{errors.userType}</span>}
          <Button text="Inicia Sesión" onClick={handleLogin} />
          <LoginLink href="#" text="¿Olvidaste tu contraseña?" />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;