import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
 import{Link, NavLink} from 'react-router-dom';
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light estilo_barra ">
            <div className="container-fluid ">
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                            <NavLink to={'./'} className="nav-link" >Inicio</NavLink>
                        </li>
                           <li className="nav-item">
                            <NavLink to={'/categoria/Cuidado'} className="nav-link" aria-current="page">Cuidado Personal</NavLink>
                        </li>
                        <li className="nav-item">
                            <Link to={'/categoria/Suplementos'} className="nav-link">Suplementos y Nutrición</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/categoria/Bebe'} className="nav-link">Bebe y Maternidad</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to={'/categoria/Dermocosmetica'} className="nav-link">Dermocosmetica</Link>
                        </li>
                      
                        <li className="nav-item">
                            <Link to={'/categoria/Perfumes'} className="nav-link">Perfumes y Fragancias</Link>
                        </li>
                       
                    </ul>
                     <CartWidget/>  
                         
                    
                </div>
               
            </div>
            
        </nav>
  )
}
export default NavBar

