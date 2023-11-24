import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Cadastro from '../components/Cadastro/cadastro';
import Login from '../components/Login/Login';
import CdtProduto from '../components/CdtProduto/CdtProduto';


function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path='*' element={<Login />}/>
            <Route path='/cadastro' element={<Cadastro />}/>      
            <Route path='/' element={<Login/>}/>
            <Route path='/cadastroDeProdutos' element={<CdtProduto/>}/> 
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;