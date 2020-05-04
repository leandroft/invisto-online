import React from 'react';
import { Link } from "react-router-dom";

import './style.css'

import profile1 from '../../assets/img/profile1.jpg';
import profile2 from '../../assets/img/profile2.jpg';
import profile3 from '../../assets/img/profile3.jpg';
import profile4 from '../../assets/img/profile4.jpg';

import {FiChevronDown} from 'react-icons/fi';

export default function Directory() {
    return (
        <div className="container-fluid">
            <header>
                <h1>Directory - Header</h1>
            </header>
            <main>
                <div className="banner">
                    <div className="acao">
                        <logo><a>invisto</a>.online</logo>
                        <p>Encontre um profissional de investimentos que combina com você</p>
                        <button className='btn-default'><Link to="/list"><a>Buscar Profissional de Investimento</a></Link></button>
                        <p>É um acessor ou consultor?</p>
                        <button className='btn-default'>Cadastre-se na Plataforma</button>
                    </div>
                    <div className="perfil">
                        <h1>Michael Moskovitz</h1>
                        <a>PRO</a>
                        <h2>Agente Autôno de Investimento</h2>
                        <p>Especializado em Profissionais Autônomos</p>
                    </div>    
                </div>

                <div className="buscaPerfil">
                    <h1>Encontre um profissional de investimentos</h1>
                    <p>Milhares de pessoas encontram em um profissional de investimentos a solução perfeita para sua caminhada como investidores</p>
                </div>

                <div className="destaque">
                    <h1>Profissionais em Destaque</h1>
                    <div className="imgDestaque">
                        <img src={profile1} alt="Foto do perfil"/>
                        <img src={profile2} alt="Foto do perfil"/>
                        <img src={profile3} alt="Foto do perfil"/>
                        <img src={profile4} alt="Foto do perfil"/>
                    </div>
                    <h2>Profissionais por Cidade</h2>
                    <p>
                        <a>São Paulo (SP)</a>
                        <a>Rio de Janeiro (RJ)</a>
                        <a>Minas Gerais (MG)</a>
                        <a>Curitiba (PR)</a>
                        <a>Porto Alegre (RS)</a>
                        <a>Florianópolis (SC)</a>
                        <a>Campinas (SP)</a>
                        <a>Brasília (DF)</a>
                    </p>
                    <p><a>Ver mais Cidades <FiChevronDown /></a></p>

                    <h2>Profissionais por Estado</h2>
                    <p>
                        <a>São Paulo (SP)</a>
                        <a>Rio de Janeiro (RJ)</a>
                        <a>Minas Gerais (MG)</a>
                        <a>Paraná (PR)</a>
                        <a>Rio Grande do Sul (RS)</a>
                        <a>Santa Catarina (SC)</a>                        
                    </p>
                    <p><a>Ver mais Estados <FiChevronDown /></a></p>
                    
                    <h2>Profissionais por Especialidades</h2>
                    <p>
                        <a>Médicos</a>
                        <a>Advogados</a>
                        <a>Empresários</a>
                        <a>Funcionários Públicos</a>
                        <a>Funcionários Privados</a>
                        <a>Agropecuários</a>
                    </p>
                    <p><a>Ver mais Especialidades <FiChevronDown /></a></p>

                </div>
            </main>
            
        </div>
    )
}