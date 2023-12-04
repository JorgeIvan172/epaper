

import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'; // Importa el hook useState
import './Styles/IniciarSesion.css';
import icono2 from '../img/icono2.png';

export default function Login() {
  // Estados para los campos del formulario y mensajes de error
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos
    if (!email || !password) {
      setError('Por favor, llene todos los campos.');
      return;
    }

    // Aquí puedes realizar la lógica de autenticación o enviar los datos al servidor
    // ...

    // Limpiar errores si todo está bien
    setError('');
  };

  return (
    <>

<img src={icono2} alt="icono2" id="miIcono" className=''  />


<div className="container  mt-5" style={{maxWidth: '500px'}}  >
      
     
        <h2 className="fw-normal">Iniciar Sesión</h2>
        <h5 className="fw-light">Inserta tus datos en el siguiente formulario</h5>
        <br />

        <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="p-2 flex-fill">
            <Link to="/contacto" className="btn tienda">
              Iniciar Sesión
            </Link>

            
          </div>

            {/* Mostrar mensaje de error si existe */}
            {error && <p className="text-danger">{error}</p>}
          </form>
        </div>

        <div className="d-flex">
          <div className="p-2 flex-fill">
            <p className="text-body-secondary">
              ¿No tienes cuenta?{' '}
              <Link to="/crearcuenta" className="text-reset">
                Regístrate aquí
              </Link>
              
            </p>
          </div>
          <div className="p-2 flex-fill">
            <Link to="/" className="btn tienda">
              Volver a la tienda
            </Link>

            
          </div>
        </div>
      </div>
      
    </>

    
  );
}




