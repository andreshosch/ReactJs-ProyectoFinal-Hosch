import React, { useState } from 'react'

import './ItemCount.css'
function ItemCount ({stock,initial,onAdd}) {
  const [count, setCount]=useState(initial);

  function sumaProducto(){
    if (count<stock){
      setCount(count + 1);
    }
  }

  function restaProducto(){
    if (count>initial){
      setCount(count - 1);
   }
  }
  // function onAdd(contador){


  //   // if (count===1){
  //   // alert(`Se agregó ${count} producto al carrito`)
  //   // }
  //   // else
  //   // alert(`Se agregaron ${count} productos al carrito`)
  // }
  return (
    <div>
      <button className='restar' onClick={()=> restaProducto()}>-</button>
      <input className='input'  readOnly value={count}></input>
      <button className='sumar'  onClick={()=> sumaProducto()}>+</button>
      <div>
      <button className='botonCarrito' onClick={()=> onAdd(count)}>Agregar al Carrito</button>
      </div>
     
    </div>
  )
}

export default ItemCount







// import React, { useState } from 'react'
// import './ItemCount.css'

// const ItemCount = () => {
//   const[cantidad, setCantidad]=useState(1);
//   return (
//     <div className='contenedor'>
//     <div className='card'>
//   <button className='cantProductos' onClick={()=> setCantidad(cantidad - 1)}>-</button>
//          <input className='input' type="number" Value={cantidad}></input> 
//       <button className='cantProductos'  onClick={()=> setCantidad(cantidad + 1)}>+</button>
//        <button  className='boton' onClick={()=>alert("hola")}>Agregar Al Carrito</button>
//       </div>
//       </div>
   
//   )
// }

// export default ItemCount
