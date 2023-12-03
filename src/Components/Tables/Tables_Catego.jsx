import React, { useState } from 'react';
import { Container, Table, Button, Row, Col, Modal } from 'react-bootstrap';
import MerchEdit from './Edit_Catego';

export default function Categoria() {

    const [show, setShow] = useState(false);
    const [registroEdit, setRegistroEdit] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [merchs, setMerch] = useState([
        {
            id: 1,
            nombre: "Laptops",
            descripcion: "Equipos portátiles potentes para satisfacer tus necesidades informáticas en movimiento."
        },
        {
            id: 2,
            nombre: "Lápices",
            descripcion: "Instrumentos de escritura esenciales para expresar tus ideas de manera creativa y eficiente."
        },
        {
            id: 3,
            nombre: "Cuadernos",
            descripcion: "Libretas y blocs de notas para tomar apuntes y organizar tus pensamientos."
        },
        {
            id: 4,
            nombre: "Accesorios PC",
            descripcion: "Complementos y periféricos para mejorar tu experiencia con la computadora."
        },
        {
            id: 5,
            nombre: "Mochilas",
            descripcion: "Bolsos espaciosos y cómodos diseñados para transportar tus pertenencias con facilidad."
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
                            <th>Categoria</th>
                            <th>Descripcion</th>
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
                                    <td>{merch.descripcion}</td>
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