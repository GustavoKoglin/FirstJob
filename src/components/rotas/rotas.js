import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Index from '../pages/Index';
import LoginCadastro from '../pages/LoginCadastro';

export default function Rotas(){
    return(
        
        <Routes>
            <Route element={<Index/>}>
                <Route path='/' element={<LoginCadastro/>}/>
            </Route>                
        </Routes>
        
    )
}