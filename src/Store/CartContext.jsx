import  { useState,createContext } from 'react'


export const CartContext= createContext({
ProductosCarrito:[]

});


  export const CartContextProvider=({children})=> {
  const [productosLista ,setProductosLista]=useState([]);
  
  const addItem=(Product)=>{
  const productoRepetido= productosLista.findIndex(producto=>producto.id===Product.id)
  if (productoRepetido !== -1) {

    setProductosLista(productosLista.map(prod => prod.id === Product.id ? {...prod, cantidad: prod.cantidad + Product.cantidad} : prod));
} else {
    setProductosLista([Product, ...productosLista]);
}
}
  const removeItem =(id)=>{
    setProductosLista(productosLista.filter((i)=>i.id!==id))
    

  }

  const clear=()=>{
    setProductosLista([]);
  };

  const AcumularCarro=()=>{
    let total=0;
    productosLista.forEach((e)=>total=total+e.Cantidad)
    
    return total
  }

  const TotalCompra=()=>{
    let total=0;
    productosLista.forEach((e)=>total=total+ parseFloat(e.Cantidad*e.Precio))
    
    return total
  }
 
 
  
  return (
    <CartContext.Provider value={{
       ProductosCarrito:productosLista,
       addItem,
       removeItem,
       clear,
       AcumularCarro,
       TotalCompra
       
    }}>
      {children}
    </CartContext.Provider>
  )
}




export default CartContext;


