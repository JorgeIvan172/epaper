
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/CrearCuenta.css'; // Asegúrate de importar tus estilos
import icono2 from '../img/icono2.png';
import user from '../img/perfil.jpg';

const UserProfile = () => {
  const initialUserData = {
    "id": 1,
    "nombre": "Leon",
    "apellido": "Muñoz",
    "correo": "leon.muños.19@gmail.com",
    "contraseña": "negocios8",
    "edad": 22,
    "direccion": "Rancho Pabellon"
  };

  const [userData, setUserData] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Aquí podrías guardar los datos editados, ya sea en el estado local o en algún servicio/API.
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <div className="container mt-5" style={{ maxWidth: '550px' }}>
        <div className="user-info-container">
          <h1 className="fw-bold">Perfil del Usuario</h1>
          <h5 className="fw-light">Datos del usuario</h5>
          <br />
          <img src={user} alt="Usuario" className="user-image p-5" style={{ width: '250px', height: '250px' }} />

          <div className="shadow p-5 mb-5 bg-body-tertiary rounded">
            <div className="mb-3 fw-bold">
              <p>Nombre: {isEditing ? <input type="text" name="nombre" value={userData.nombre} onChange={handleInputChange} /> : userData.nombre}</p>
            </div>

            <div className="mb-3 fw-bold">
              <p>Apellido: {isEditing ? <input type="text" name="apellido" value={userData.apellido} onChange={handleInputChange} /> : userData.apellido}</p>
            </div>

            <div className="mb-3 fw-bold">
              <p>Correo: {isEditing ? <input type="text" name="correo" value={userData.correo} onChange={handleInputChange} /> : userData.correo}</p>
            </div>

            <div className="mb-3 fw-bold">
              <p>Edad: {isEditing ? <input type="text" name="edad" value={userData.edad} onChange={handleInputChange} /> : userData.edad}</p>
            </div>

            <div className="mb-3 fw-bold">
              <p>Dirección: {isEditing ? <input type="text" name="direccion" value={userData.direccion} onChange={handleInputChange} /> : userData.direccion}</p>
            </div>

            {isEditing ? (
              <div className="p-2 flex-fill">
                <button className="btn tienda" onClick={handleSave}>
                  Guardar Cambios
                </button>
              </div>
            ) : (
              <div className="p-2 flex-fill">
                <button className="btn tienda" onClick={handleEdit} style={{ marginRight: '24px' }}>
                  Editar Datos 
                </button>

                <Link to="/contacto" className="btn tienda ml-2">
                  Comprar Productos
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;