import React from "react";
import ImgPrincipal from "../imgs/trabalho.jpg"


export default function LoginCadastro(){
    return(
        <section>
            <form id="form">
                <div>   
                    <div id="social-container1">
                        <div>
                            <h2 id="p" className="pLogin">Faça login ou cadastre-se.</h2>
                            <h4 id="h4">Ao continuar você aceita nossos <a href="/">Termos de Uso</a> e <a href="/">Política de Privacidade</a>.</h4>
                        </div>                    
                    </div>
                    <div id="social-container2">
                            <i className="bi bi-facebook btn"><h5 className="h5Facebook">Continuar com Facebook</h5></i>
                            <i className="bi bi-github btn"><h5 className="h5GitHub">Continuar com GitHub</h5></i> 
                            <i className="bi bi-google btn"><h5 className="h5Google">Continuar com Google</h5></i>
                            <i className="bi bi-linkedin btn"><h5 className="h5LinkedIn">Continuar com LinkedIn</h5></i>
                        </div>
                </div>          
            </form> 
            <div >
                <img src={ImgPrincipal} alt="Imagem de um homem trabalhando" id="imgPrincipal"/>
            </div>
        </section>
    )
}
