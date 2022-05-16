import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
 import Spinner from '../Spinner/Spinner'
 import {getProd} from '../../services/productos';
import { useParams } from 'react-router-dom';
 
 const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const[carga, setCarga]=useState(true);
  const{idCategoria}=useParams();
 
  useEffect(() => {
    getProd(idCategoria)
      .then(response => {setProducts(response)
        setCarga(false)})
      
      .catch(error => console.log("error: ", error));
  }, [idCategoria]);

  return (
    <>
     {carga? <Spinner/> :<ItemList products={products}></ItemList> 
    }
    </>
  );
};
export default ItemListContainer;