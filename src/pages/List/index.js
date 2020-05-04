import React from 'react';
import { Link } from "react-router-dom";

import profile1 from '../../assets/img/profile1.jpg';
import profile2 from '../../assets/img/profile2.jpg';
import profile3 from '../../assets/img/profile3.jpg';
import profile4 from '../../assets/img/profile4.jpg';

import {FiMessageSquare, FiSearch} from 'react-icons/fi';

import './style.css'


export default function Profile() {
    return (
        <div className="container">
            <h1>List Page</h1>

            <main>
              <div className="busca">
                <p>
                <a>Profissionais de Investimento</a>
                <b>></b> 
                <a>Sâo Paulo (SP)</a>
                <b>></b> 
                <a>São Paulo (SP)</a>
                </p>
                <form>
                  <input placeholder="Especialidade do Profissional     |      Localização do Profissional"></input>
                  <div className="icoSearch"><FiSearch /></div>
                </form>
              </div>
              <div className="resultado">
                
                <h1>Profissionais de Investimento Disponíveis</h1>
                <p>Estes foram os profissionais encontrados pela sua busca</p>

                <table>
                <tr>
                  <th><b>Tipo de Profissional</b></th>
                  <td><a>Consultor</a></td>
                  <td><a>Asessor</a></td>
                </tr>

                <tr>
                  <th><b>Especialidade</b></th>
                  <td><a>Autônomos</a></td>
                  <td><a>Médicos</a></td>
                  <td><a>Advogados</a></td>
                  <td><a>Agropecuária</a></td>
                  <td><a>+</a></td>
                </tr>

                <tr>
                  <th><b>Expertise</b></th>
                  <td><a>Renda Fixa</a></td>
                  <td><a>Renda Variável</a></td>
                  <td><a>Ações</a></td>
                  <td><a>Internacional</a></td>
                  <td><a>Câmbio</a></td>
                  <td><a>Imóveis</a></td>
                  <td><a>+</a></td>
                </tr>
                </table>

                <div className="profile">
                  <div className="imgPerfil">
                    <img src={profile1} alt="Foto do perfil"/>
                  </div>
                  <div className="descricao">
                    <h1>Pedro Aguilar</h1>
                    <h2>Consultor de Investimentos</h2>
                    <p>Especialista em Profissionais Autônomos</p>
                    <p><FiMessageSquare color="rgb(44, 44, 44)"/> 3 Avaliações de Clientes</p>
                    <a>PRO</a>
                  </div>
                </div>

                <div className="profile">
                  <div className="imgPerfil">
                    <img src={profile2} alt="Foto do perfil"/>
                  </div>
                  <div className="descricao">
                    <h1>Daniela Almeida</h1>
                    <h2>Assessora Autônomo de Investimentos</h2>
                    <p>Especialista em Profissionais de Saúde</p>
                    <p><FiMessageSquare color="rgb(44, 44, 44)"/> 7 Avaliações de Clientes</p>
                    <a>PRO</a>
                  </div>
                </div>

                <div className="profile">
                  <div className="imgPerfil">
                    <img src={profile3} alt="Foto do perfil"/>
                  </div>
                  <div className="descricao">
                    <h1>Rafael dos Santos</h1>
                    <h2>Assessora Autônomo de Investimentos</h2>
                    <p>Especialista em Funcionários Privados</p>
                    <p><FiMessageSquare color="rgb(44, 44, 44)"/> 1 Avaliações de Clientes</p>
                    
                  </div>
                </div>

                <div className="profile">
                  <div className="imgPerfil">
                    <img src={profile4} alt="Foto do perfil"/>
                  </div>
                  <div className="descricao">
                    <h1>Débora Alves</h1>
                    <h2>Consultora de Investimentos</h2>
                    <p>Especialista em Grandes Patrimônios</p>
                    <p><FiMessageSquare color="rgb(44, 44, 44)"/> 15 Avaliações de Clientes</p>
                    
                  </div>
                </div>

                <div className="paginacao">
                  <a>1</a>
                  <p>2</p>
                  <p>3</p>
                </div>

                <div className="cadastro">
                  <p>É um assessor ou consultor?</p>
                  <button className="btn-default">Cadastre-se Gratuitamente</button>
                </div>
              </div>



            </main>
        </div>
        
    )
}