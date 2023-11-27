import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Row, Col, Modal, Form } from 'react-bootstrap';


function Example(props) {

    const [valores, setValores] = useState(props.registroEdit);

    useEffect(() => {
        setValores(props.registroEdit);
    }, [props.registroEdit]);


    console.log(props);

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body><Form>

                    <Form.Group className="mb-3" controlId="modelo">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" value={valores?.nombre} onChange={(e) => setValores({ ...valores, nombre: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="apellido">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder="apellido" value={valores?.apellido} onChange={(e) => setValores({ ...valores, apellido: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="correo">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control type="text" placeholder="correo" value={valores?.correo} onChange={(e) => setValores({ ...valores, correo: e.target.value })} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="direccion">
                        <Form.Label>Direccion</Form.Label>
                        <Form.Control type="text" placeholder="direccion" value={valores?.direccion} onChange={(e) => setValores({ ...valores, direccion: e.target.value })} />
                    </Form.Group>

                </Form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={() => props.editTest(valores)}>
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example