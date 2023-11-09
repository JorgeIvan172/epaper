import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Importar Componentes.
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import GoogleAnalytics from './Components/Analytics';
import Product from './Components/Product';
import ProductList from './Components/Carts';
import Somos from './Components/Epaper';
//Agregao xd
import Title1 from './Components/Title';
import CarouselComponent from './Components/Carusel';

import ProductList_2 from './Components/Carts_2';

import { BrowserRouter, Route, Routes} from 'react-router-dom';
function Principal(){
  return(
   <>
    <CarouselComponent />
    <Title1 text="Las Mejores Productos." />
    <ProductList_2 />
   </>
  )
 }






 function App() {
   return (
     <>
       <GoogleAnalytics />
       <BrowserRouter>
       <Menu />
       <Routes>
         <Route path="/epaper" Component={Principal} />
         <Route path="/productos" Component={ProductList} />
         <Route path="/producto" Component={Product} />
         <Route path='/' Component={Somos}/>
       </Routes>
       <Footer />
       </BrowserRouter>
     </>
   );
 }

export default App;
