import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importar Componentes.
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import GoogleAnalytics from './Components/Analytics';
import Product from './Components/Product';
import Cart from './Components/Carts';
import Somos from './Components/Epaper';
//Agregao xd
import Title1 from './Components/Title';
import CarouselComponent from './Components/Carusel';


import { BrowserRouter, Route, Routes} from 'react-router-dom';

function Principal(){
  return(
   <>
    <CarouselComponent />
   
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
   return (
     <>
       <GoogleAnalytics />
       <BrowserRouter>
       <Menu />
       <Routes>
         <Route path="/" Component={Principal} />
         <Route path="/productos" Component={CartsProducts} />
         <Route path="/producto" Component={Product} />
         <Route path='/epaper' Component={Somos}/>
       </Routes>
       <Footer />
       </BrowserRouter>
     </>
   );
 }

export default App;
