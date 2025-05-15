import './style.css';
import Trash from '../../assets/trash.svg';
import api from '../../services/api.js';
import { useEffect } from 'react';

function Home() {

  let users = [];

  async function getUsers() {
    const usersFromApi = await api.get('/users');
    users = usersFromApi.data;
    console.log(users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='container'>
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input type="text" name='name' placeholder='Name' />
        <input type="number" name='age' placeholder='Age' />
        <input type="email" name='email' placeholder='Email' />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div className='card'>
          <div>
            <p>Nome: <span>{user.nome}</span></p>
            <p>Idade: <span>{user.idade}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} alt="" width={30} height={30} />
          </button>
        </div>
      ))};



    </div>
  )
};

export default Home;