import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './Components/Administrador';

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

import Cookies from './Components/Cookies';

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
                  <Cookies />
                  <Routes>
                    <Route path="/epaper" Component={Principal} />
                    <Route path="/productos" Component={ProductList} />
                    <Route path="/administrador" Component={Admin} />
                    <Route path="/producto/:id" Component={Product} />
                    <Route path='/' Component={Somos}/>
                  </Routes>
                  <Footer />
                  </BrowserRouter>
                  
                </>
              );
            }

export default App;
