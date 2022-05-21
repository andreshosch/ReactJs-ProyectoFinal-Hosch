import React, { useState, useContext} from 'react'
import CartContext from '../../Store/CartContext';
import './Checkout.css'
import BaseDatos from '../../services/Firebase';
import { collection, addDoc} from 'firebase/firestore';




export const Checkout = () => {
    
    const {ProductosCarrito,TotalCompra,clear}= useContext(CartContext)
    
   
    const [idOrden, setidOrden] = useState()
    
    const [buyer, setBuyer] = useState({
        Nombre:'',
        Email:'',
        Telefono:''
    })

    const {Apellido,Nombre, Email, Telefono, Mensaje} = buyer

    const Input = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]:e.target.value
        }))
    }

    const generarPedido = async(data) => {
       
        try {
            const col = collection(BaseDatos,"Orders")
            const order = await addDoc(col,data) 
            setidOrden(order.id)
             clear()
           
        } catch (error) {
            console.log(error)
        }
    }

    const Enviar = (e) => {
        e.preventDefault()
        const dia = new Date()
         const items = ProductosCarrito.map(e=> {return {id:e.id,Titulo:e.Nombre,Precio:e.Precio,Cantidad:e.Cantidad}})
        const total = TotalCompra()
        const data = {buyer,dia,items,total}
        generarPedido(data)
    }
    
  return (
    <div className="contenedor">
                 <div className="wrapper animated bounceInLeft">
                     <div className="info-empresa">
                         <h4 className="m-4">Finalizar Compra</h4> 
                     </div>
                        <form  onSubmit={Enviar} className="formulario">
                             <p>
                                 <label>Apellido</label>
                                 <input type="text" name="Apellido"  value={Apellido}
                            onChange={Input}required/>
                             </p>
                            <p>
                                 <label>Nombre</label>
                                 <input type="text" name="Nombre"value={Nombre}  onChange={Input}
                           required/>
                             </p> 
                             <p>
                                 <label>Correo</label>
                                 <input type="email" name="Email" value={Email}
                            onChange={Input} required/>
                             </p>
                             <p>
                                 <label>Teléfono</label>
                                 <input type="number" name="Telefono" value={Telefono}
                            onChange={Input} required/>
                             </p>
                             <p className="full">
                                 <label>Mensaje</label>
                                 <textarea name="Mensaje"  value={Mensaje}
                            onChange={Input}placeholder="Opcional..."></textarea>
                             </p>
                            <p className="full">
                                 <button className="boton-enviar">Enviar</button>
                             </p>
                         </form>
                     
                 </div>
             </div>
  )
}
