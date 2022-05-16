import React, { useContext, useEffect, useState } from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
 import {getItem} from '../../services/productos';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner'

 
 const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const{id}=useParams();
  const[carga, setCarga]=useState(true);
 

 
  useEffect(() => {
   getItem(id)
      .then(response => {setProducts(response)
      setCarga(false)})
      .catch(error => console.log("error: ", error));
  }, [id])

  return (
    <>
    {carga? <Spinner/> :<ItemDetail item={products}></ItemDetail> }

        
    </>
  );
};
export default ItemDetailContainer;
