import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://habibi:lucas2207@bancodedados.witzqwl.mongodb.net/?retryWrites=true&w=majority&appName=BancoDeDados');
        console.log("Banco de dados conectado!");
    } catch (error) {
        console.log(`Erro ao conectar ao banco de dados // ${error}`);
    }
};

export default connect;