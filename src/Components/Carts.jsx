import Card from 'react-bootstrap/Card';
import './Styles/Carts.css';
import Victus from '../img/Victus.png';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import ListGroup from 'react-bootstrap/ListGroup';

function Cart() {

    const navigate = useNavigate(); // Inicializa la instancia de useNavigate

  const handleButtonClick = () => {
    // Aquí puedes definir la lógica de lo que sucede al hacer clic en el botón
    // Por ejemplo, puedes redirigir a otra página
    navigate('/producto'); // Cambia '/otra-pagina' por la ruta a la que quieres redirigir
  }

    
  return (
    <Card className="card-with-border">
      <Card.Img className="img img-center" src={Victus} />
      <Card.Body>
        <Card.Title className="title">Laptop Gammer HP Victus.</Card.Title>
        <Card.Title className="title">$ 14,000.</Card.Title>
        <Card.Text>
        La laptop HP Victus 15-FA0031DX es una solución tanto para trabajar y estudiar como para entretenerte.
        </Card.Text>
      </Card.Body>
      {/*<ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>*/}

<button onClick={handleButtonClick}
className='comprar'
>Comprar</button>

      
    </Card>
  );
}

export default Cart;