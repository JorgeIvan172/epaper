import './App.css';
//Importar Componentes.
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import GoogleAnalytics from './Components/Analytics';
import Cart from './Components/Carts';


import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function CartsProducts(){
  const numCart = 10; // Cambia este número según cuántas instancias desees

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
    <Menu />
    
    <Router>
    <div style={body}>
         <Routes>
           <Route path='/' element={<CartsProducts />} />
         </Routes>
       </div>    
    </Router>
    <Footer />
    </>
  );
}

export default App;
