import React from 'react'
import './Spinner.css'
 import 'bootstrap/dist/css/bootstrap.min.css'
  import {Spinner} from 'reactstrap';


function cargando ()  {
  return (
    
     <div className='contenedorSpinner'>
        <div className='spinner'>
             <Spinner color="secondary"/>   
         </div>
       </div>
  )
  
}

export default cargando
