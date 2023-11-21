import { Table } from 'react-bootstrap';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './Styles/Table_Coments.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function MyVerticallyCenteredModal({show, onHide, onAddComment}) {

  const [nombre, setNombre] = useState('');
  const [opinion, setOpinion] = useState('');

  const handleAddComment = () => {
    // Validar que se ingresaron datos antes de agregar a la tabla
    if (nombre && opinion) {
      onAddComment({ nombre, opinion });
      onHide();
    } else {
      // Puedes agregar lógica aquí para manejar casos en los que los campos están vacíos
      console.log('Por favor, completa todos los campos.');
    }
  };

  return (
    <Modal
      {...{ show, onHide }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Queremos Conocer Tu Opinion!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Nombre Completo.</Form.Label>
        <Form.Control type="email" placeholder="" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Experiencia.</Form.Label>
        <Form.Control as="textarea" rows={3} value={opinion} onChange={(e) => setOpinion(e.target.value)}/>
      </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={handleAddComment}>Agregar Comentario</Button>
        <Button onClick={onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Tabl() {

  const [modalShow, setModalShow] = useState(false);
  const [comments, setComments] = useState([
    { nombre: 'Leon Andrey Muños', opinion: 'Excelente Producto!' },
    { nombre: 'Orlando Yhael Luevano', opinion: 'Esta bien, pero esperaba mas.' },
  ]);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div className='centro'>
<Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Nombre Completo.</th>
          <th>Opinion.</th>
        </tr>
      </thead>
      <tbody>
        {comments.map((comment, index) => (
            <tr key={index}>
              <td>{comment.nombre}</td>
              <td>{comment.opinion}</td>
            </tr>
          ))}
       
      </tbody>
    </Table>

    <Button variant="primary" className='comentario' onClick={() => setModalShow(true)}>
        Añade Un Comentario.
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onAddComment={handleAddComment}
      />

    </div>
    
  );
}

export default Tabl;