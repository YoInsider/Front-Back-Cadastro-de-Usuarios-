import './style.css';
import Trash from '../../assets/trash.svg';
import api from '../../services/api.js';
import { useEffect, useState, useRef } from 'react';

function Home() {
  const [users, setUsers] = useState([]);

  const inputNome = useRef();
  const inputIdade = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    const usersFromApi = await api.get('/users');

    setUsers(usersFromApi.data);
  }

  async function createUser() {
    await api.post('/users', {
      nome: inputNome.current.value,
      idade: inputIdade.current.value,
      email: inputEmail.current.value
    })

    getUsers();
  }

  async function removeUser(_id) {
    await api.delete(`/users/${_id}`);

    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className='container'>
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input type="text" name='name' placeholder='Name' ref={inputNome} required/>
        <input type="number" name='age' placeholder='Age' ref={inputIdade} required/>
        <input type="email" name='email' placeholder='Email' ref={inputEmail} required/>
        <button type='button' onClick={createUser}>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div className='card' key={user._id}>
          <div>
            <p>Nome: <span>{user.nome}</span></p>
            <p>Idade: <span>{user.idade}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => removeUser(user._id)}>
            <img src={Trash} alt="" width={30} height={30} />
          </button>
        </div>
      ))};



    </div>
  )
};

export default Home;