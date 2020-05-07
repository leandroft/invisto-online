import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

/* Importar Imagens
import profile1 from '../../assets/img/profile1.jpg';
import profile2 from '../../assets/img/profile2.jpg';
import profile3 from '../../assets/img/profile3.jpg';
import profile4 from '../../assets/img/profile4.jpg';
*/

import {FiMessageSquare, FiSearch} from 'react-icons/fi';

import api from '../../services/api';

import './style.css'



export default function Profile() {
    
  const [users, setUsers] = useState([]);
  useEffect(() => {
    api.get('user').then(response => {
      setUsers(response.data);
    })
  }, []);

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
            <td className="responsivo"><a>Advogados</a></td>
            <td className="responsivo"><a>Agropecuária</a></td>
            <td><a>+</a></td>
          </tr>

          <tr>
            <th><b>Expertise</b></th>
            <td><a>Renda Fixa</a></td>
            <td><a>Renda Variável</a></td>
            <td className="responsivo"><a>Ações</a></td>
            <td className="responsivo"><a>Internacional</a></td>
            <td className="responsivo"><a>Câmbio</a></td>
            <td className="responsivo"><a>Imóveis</a></td>
            <td><a>+</a></td>
          </tr>
          </table>

          <div className="users">
            {users.map(user => (
              <div className="profile" key={user.id}>
                <div className="imgPerfil">
                  <img src={user.profile_picture} alt="Foto do perfil"/>
                </div>
                <div className="descricao">
                  <h1>{user.name}</h1>
                  <h2>{user.kind_professional}</h2>
                  <p>{user.specialization}</p>
                  <p><FiMessageSquare color="rgb(44, 44, 44)"/> 3 Avaliações de Clientes</p>
                  {user.user_pro ? <a>PRO</a> : null}
                </div>
              </div>
            ))}
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