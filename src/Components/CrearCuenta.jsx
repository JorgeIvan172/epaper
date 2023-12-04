
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import './Styles/CrearCuenta.css';
import icono2 from '../img/icono2.png';

export default function Registro() {
  // Estados para los campos del formulario y mensajes de error
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');

  // Manejador de envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos
    if (!name || !email || !password || !passwordConfirmation) {
      setError('Por favor, llene todos los campos.');
      return;
    }

    // Validación de contraseña
    if (password !== passwordConfirmation) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // Aquí puedes realizar la lógica de autenticación o enviar los datos al servidor
    // ...

    // Limpiar errores si todo está bien
    setError('');
  };

  return (
    <>
      <img src={icono2} alt="icono2" id="miIcon" className='' />

      <div className="container  mt-5" style={{maxWidth: '500px'}}  >
        <h2 className="fw-normal">Crea Una Cuenta</h2>
        <h5 className="fw-light">Inserta tus datos en el siguiente formulario</h5>
        <br />

        <form onSubmit={handleSubmit}>

        <div className="shadow p-5 mb-5 bg-body-tertiary rounded   ">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          
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

            <div className="mb-3">
              <label htmlFor="password_confirmation" className="form-label">
                Repite tu Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password_confirmation"
                name="password_confirmation"
                placeholder=""
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>

            <div className="p-2 flex-fill">
            <Link to="/iniciarsesion" className="btn tienda">
              Registrarse
            </Link>

            
          </div>
            {/* Mostrar mensaje de error si existe */}
            {error && <p className="text-danger">{error}</p>}
          </div>
          
        </form>

        <div className="d-flex">
          <div className="p-2 flex-fill">
          <p className="text-body-secondary">
              ¿Ya tienes cuenta?{' '}
              <Link to="/iniciarsesion" className="text-reset">
                Inicia Sesion aquí
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



