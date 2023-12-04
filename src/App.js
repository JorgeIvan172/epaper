
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
import login from './Components/InicioSesion';
import Registro from './Components/CrearCuenta';
import Carrito from './Components/CarritoDeCompras';
import Favoritos from './Components/Favoritos';
import Perfil from './Components/Perfil';
import {ShoppingCartProvider} from './Components/Contexts/CarritoDeCompasContext';


//Agregao xd
import Title1 from './Components/Title';
import CarouselComponent from './Components/Carusel';

import ProductList_2 from './Components/Carts_2';

import Cookies from './Components/Cookies';

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { useState } from 'react';
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
                  <ShoppingCartProvider>
                  <GoogleAnalytics />
                  <BrowserRouter>
                  <Menu />
                  <Cookies />
                  <Routes>
                    <Route path="/contacto" Component={Somos} />
                    <Route path="/productos" Component={ProductList} />
                    <Route path="/administrador" Component={Admin} />
                    <Route path="/favoritos" Component={Favoritos} />
                    <Route path="/producto/:id" Component={Product} />
                    <Route path='/epaper' Component={Principal}/>
                    <Route path='/iniciarsesion' Component={login}/>
                    <Route path='/crearcuenta' Component={Registro}/>
                    <Route path='/carrito' Component={Carrito}/>
                    <Route path='/perfil' Component={Perfil}/>

                  </Routes>
                  <Footer />
                  </BrowserRouter>
                  </ShoppingCartProvider>
 
                </>
              );
            }

export default App;