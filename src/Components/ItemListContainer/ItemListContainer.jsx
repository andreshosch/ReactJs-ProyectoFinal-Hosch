import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where} from 'firebase/firestore';
import BaseDatos from '../../services/Firebase';
 const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const{idCategoria}=useParams();  
   
  const getProd = async (category) =>{
    try {
     
      const document = category ? query(collection(BaseDatos,"Productos"),where('Categoria','==',category)):collection(BaseDatos,"Productos")
      const col = await getDocs(document)
      const FirebaseData = col.docs.map((doc) => doc = { id:doc.id,...doc.data()})
      setProducts(FirebaseData)
    } catch (error) {
      console.log(error)
    }
  }  
   
    useEffect(() => {
      getProd(idCategoria)
    }, [idCategoria])
    
    return (
      <>
        { <ItemList products={products} />}
      </>
    );
  };
  
  export default ItemListContainer;
  