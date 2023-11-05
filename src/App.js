import './App.css';

//Importar Componentes.
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import GoogleAnalytics from './Components/Analytics';
import Product from './Components/Product';
import Cart from './Components/Carts';
import 'bootstrap/dist/css/bootstrap.min.css';
//Agregao xd
import Title1 from './Components/Title';
import CarouselComponent from './Components/Carusel';


import { BrowserRouter, Route, Routes} from 'react-router-dom';

function Principal(){
 return(
  <>
  
  </>
 )

}



function CartsProducts(){
  const numCart = 16; // Cambia este número según cuántas instancias desees

  const cart = Array.from({ length: numCart }, (_, index) => (
    <Cart key={index} />
  ));

  return (
    <div className="cart-container center">
      {cart}
    </div>
  );
}



function App() {

  const body = {
    backgroundColor: '#cccccc',
    padding: '40px 60px 40px 60px',
    
  }

  return (
    <>
      <GoogleAnalytics />
      <BrowserRouter>
      <Menu />
    <div style={body}>
    
      <Routes>
        <Route path="/productos" Component={CartsProducts} />
        <Route path="/producto" Component={Product} />
      </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
