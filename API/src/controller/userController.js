import User from '../model/User.js';

async function getUsers(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.log(`Erro ao buscar usuários // ${error}`);
    }
};

async function createUser(req, res) {
    try {
        const newUser = new User(req.body);
        const criar = await newUser.save();
        res.json({ message: "Usuário criado com sucesso!" });
    } catch (error) {
        console.log(`Erro ao criar usuario // ${error}`);
    }
};

async function removeUser(req, res) {
    try {
        const remove = await User.findByIdAndDelete(req.params._id);
        res.json({ message: "Usuario removido com sucesso!" });
    } catch (error) {
        console.log(`Erro ao remover usuario // ${error}`);
    }
};

export { getUsers, createUser, removeUser };