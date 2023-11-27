import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';
import MerchEdit from './Edit_Users';

export default function Producto() {

    const [show, setShow] = useState(false);
    const [registroEdit, setRegistroEdit] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [merchs, setMerch] = useState([
        {
            id: 1, 
            nombre: "Iván",
            apellido: "Herrera Gonzaléz",
            correo: "ivan.herrera.g19@gmail.com",
            contraseña: "negocios8",
            edad: 22,
            direccion: "Marcelina C. Sanches #105"
        },
        {
            id: 2, 
            nombre: "Yahel",
            apellido: "Luevano Garcia",
            correo: "yahel.luevano.g19@gmail.com",
            contraseña: "negocios8",
            edad: 21,
            direccion: "La barranca #110"
        },
        {
            id: 3, 
            nombre: "Leon",
            apellido: "Muñoz",
            correo: "leon.muños.19@gmail.com",
            contraseña: "negocios8",
            edad: 21,
            direccion: "Rancho 'Pabeyork'"
        }
    ]);

    function deleteTest(id) {
        setMerch(merchs.filter(merch => merch.id !== id))
    }

    function editTest(datos) {
        setMerch(merchs.map(merch => merch.id === datos.id ? datos : merch));
        handleClose();
    }

    function dataTransfer(datos) {
        handleShow();
        setRegistroEdit(datos);
    }


    return (
        <>
            <Container fluid>
                <caption align="center"></caption>
                <Table striped bordered hover variant="ligth"
                    style={{
                        background: "#a5edff",
                        borderColor: "gray"
                    }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                            <th>Direccion</th>
                            <th>Borrar</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    <tbody style={{ justifyContent: "center" }}>
                        {
                            merchs.map((merch, i) => {
                                return <tr>
                                    <td>{merch.id}</td>
                                    <td>{merch.nombre}</td>
                                    <td>{merch.apellido}</td>
                                    <td>{merch.correo}</td>
                                    <td>{merch.direccion}</td>
                                    <td><button className="btn btn-danger" onClick={() => deleteTest(merch.id)}>Borrar</button></td>
                                    <td><button className="btn btn-primary" onClick={() => dataTransfer(merch)}>Editar</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
                <MerchEdit show={show} handleClose={handleClose} editTest={editTest} registroEdit={registroEdit} />
            </Container>
        </>
    );
}