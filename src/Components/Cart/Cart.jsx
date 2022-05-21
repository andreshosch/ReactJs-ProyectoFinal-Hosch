import React ,{useContext} from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../../Store/CartContext';
import CartItem from "../CartItem/CartItem";
import "./Cart.css";

const Cart = () => {
  const {clear,ProductosCarrito,TotalCompra}= useContext(CartContext);
  
  return (

    <>
    {      ProductosCarrito.length !== 0 ?
        (
          <div className=''>
            <div className=''>
            <h1 className='TituloCarrito'>Carritos de Compras</h1>
            
              {ProductosCarrito.map((item) => <CartItem key={item.id} item={item} />)}
              <br/>
              
              <br/>
                 <div className='TotalCompra'>Total Compra: $ {TotalCompra()}</div>
              <button className="VaciarCart" onClick={clear}>Vaciar Carrito</button>
            </div>
            <button className="VaciarCart"><Link to={'/Checkout'}>Terminar Compra</Link></button>
          </div>
        ) : (
          <div className='contenedorCart'>
           <div> <h3 className='CarroVacio'>Carrito Vacio</h3></div>
            <div className='botonCarroVacio'><button ><Link to={'/'}>Seguir comprando</Link></button></div>
            <div><img className='FotoCarroVacio' src='../images/carritoVacio.png'></img></div>
          </div>
        )
    }
    
  </>
  )

}
  
export default Cart
  