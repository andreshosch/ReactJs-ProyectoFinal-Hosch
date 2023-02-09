import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
      <div>
    <footer className="color_redes text-center">

    <div className=" text-center text-white mt-4">
           
        <div className=" d-flex justify-content-center container_footer">
            <div className="mail">
                <a href="mailto:farmaciatonini@hotmail.com ">
                    <img src="../images/mail_azul.png " alt="icono mail" height="30 " width="30 "/></a>
            </div>
            <div className="instagram">
                <a href="https://www.instagram.com/farmacia.tonini/?hl=es " target="_blank ">
                    <img src="../images/instagram_azul.png " alt="icono instagram" height="30 " width="30 "/></a>
    
            </div>
            <div className="whatsapp">
                <a href="https://api.whatsapp.com/send?phone=+5493424689790 " target="_blank ">
                    <img src="../images/whatsapp_azul.png " alt="icono whatsapp" height="30 " width="30 " /></a>
            </div>
        </div>
        <div className="copyright">
            Copyright© 2022 Copyright Farmacia Tonini - Pagina Desarrollada por Andrés Hosch </a>
    
        </div>
        </div>
        
    </footer>
    </div>
    
    
    
     
  )
}

    

