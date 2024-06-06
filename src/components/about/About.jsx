import React from "react";
import "./about.css"
import facebook from "../../assets/images/facebook.png"
import whatsapp from "../../assets/images/whatsapp.png"
import gorjeo from "../../assets/images/gorjeo.png"
import instagram from "../../assets/images/instagram.png"


const About=()=>{
    return(
        <div className="about">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                <div className="sb_footer-links_div">
                        <h4>Ayuda</h4>
                        <a href="/employer">
                            <p>¿Como comprar?</p>
                        </a>
                        <a href="/employer">
                            <p>¿Como vender?</p>
                        </a> 
                        <a href="/employer">
                            <p>Central de ayuda</p>
                        </a>
                        <a href="/employer">
                            <p>Guia de Seguridad</p>
                        </a>
                        <a href="/employer">
                            <p>Canal de Etica</p>
                        </a>
                        <a href="/employer">
                            <p>Politica de Privacidad</p>
                        </a>
                        <a href="/employer">
                            <p>Politica de Tratamiento de Datos Personales</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Eventos</h4>
                        <a href="/employer">
                            <p>Subastas</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                         <h4>Categorias</h4>
                         <a href="/employer">
                            <p>Obras de arte</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Sobre o grupo</h4>
                        <a href="/employer">
                            <p>¿quienes Somos?</p>
                        </a>
                        <a href="/employer">
                            <p>Prensa</p>
                        </a>
                        <a href="/employer">
                            <p>Blog</p>
                        </a>
                        <a href="/employer">
                            <p>Cultura y Carrera</p>
                        </a>
                    </div>
                </div>
                <hr></hr>
                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Copyright reserved.
                        </p>
                    </div>
                    <div className="sb_footer-links_div">
                    <div className="socialmedia">
                            <p><img src={facebook} alt=""/></p>
                            <p><img src={gorjeo} alt=""/></p>
                            <p><img src={instagram} alt=""/></p>
                            <p><img src={whatsapp} alt=""/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;