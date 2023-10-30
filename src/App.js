import './App.css';
//Importar Componentes.
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import GoogleAnalytics from './Components/Analytics';
import Cart from './Components/Carts';

import { BrowserRouter, Route, Routes} from 'react-router-dom'; // Importar Rutas




function Admins(){

  const numCart = 10; // Cambia este número según cuántas instancias desees

  const cart= Array.from({ length: numCart }, (_, index) => (
    <Cart key={index} />
  ));

  return(
    <>
      <div className="cart-container center">
        {cart}
    </div>
    </>
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
    <Menu />
    <div style={body}>
      
    <BrowserRouter>
      <Routes>
        <Route path='epaper/productos' element={<Admins />} />
      </Routes>
      </BrowserRouter>
    </div>
    <Footer />
    </>
  );
}

export default App;
