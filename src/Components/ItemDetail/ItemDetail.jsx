import React, { useState,useContext } from 'react';
import './ItemDetail.css'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../Store/CartContext';
const ItemDetail = ({ item }) => {
   const Cart= useContext(CartContext);
   const [acumulador, setacumulador] =useState(0);
  
     function carrito(countProductosCarro) {
         Cart.addItem({Cantidad: countProductosCarro,...item})
         setacumulador(countProductosCarro)
         
    }
   
 return (
   <>
   
   <div className='contenedorItem'>
   <div className="muestraItem">
   <div className="imgMuestra1"><img src={item?.Img2}/></div>
   <div className="imgMuestra1"><img src={item?.Img3}/></div>
   </div>
   <div className="contenedorImagen">
   <div className="imagenItem"><img src={item?.Img1}  alt="Imagen Producto"/></div>
   <div className="descripcionItem">{item?.Descripcion}</div>
   </div>
   <div className="datosItem">
   <div className="tituloItem">{item?.Titulo}</div>
     <div className="nombreItem">{item?.Nombre}</div>
     <div className="precioItem">$ {item?.Precio}</div>
     <div className="stockItem">Stock: {item?.Stock}</div>
    
    {acumulador!==0?(<button  className='botonCarrito'><Link to='/Cart' style={{ color: '#00264D' }}>Ir al Carrito</Link></button>): <ItemCount initial={1} stock={item?.Stock} onAdd={carrito}></ItemCount>}
    
   </div>
     </div>
     
   </>
 );
};
export default ItemDetail;