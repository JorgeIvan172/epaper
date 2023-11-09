import React, { useState } from 'react';
import { Modal, Button, CloseButton } from 'react-bootstrap';
import "./Styles/Cookies.css";


const Cookies = () => {
    const [showAlert, setShowAlert] = useState(true);
    const alertClose = () => setShowAlert(false);
    return (
        <Modal show={showAlert} onHide={alertClose} >
            <Modal.Header style={{ background: "#303333", color: "#FFFFFF" }}>
                <Modal.Title>Cookies E-Paper. </Modal.Title>
                <CloseButton variant='white' onClick={alertClose}  ></CloseButton>
            </Modal.Header>
            <Modal.Body style={{ background: "#303333", color: "#FFFFFF" }} >
                <h6>Usamos cookies propias y de terceros que entre otras cosas recogen datos sobre sus hábitos de navegación para
                    mostrarle publicidad personalizada y realizar análisis de uso de nuestro sitio.
                    <br />
                    Si continúa navegando consideramos que acepta su uso.</h6>
            </Modal.Body>
            <Modal.Footer style={{ background: "#303333", color: "#FFFFFF" }}>
                <Button variant="primary" className="bg-okay" onClick={alertClose} >Aceptar</Button>
                <Button variant="primary" className="bg-okay" onClick={alertClose}
                    href="http://www.google.com/intl/es-419/policies/technologies/types/"
                    alt="Cookies"
                    title="Link Cookies"> Más información
                </Button>
            </Modal.Footer>
        </Modal>
    );

}

export default Cookies;

