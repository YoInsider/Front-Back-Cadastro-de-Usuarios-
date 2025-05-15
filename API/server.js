import express from 'express';
import connect from './src/db/db.js';
import router from './src/router/router.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
connect();





app.listen(3000, () => {
    try {
        console.log("Servidor online!");
    } catch (error) {
        console.log(`Falha ao ligar servidor // ${error}`);
    }
});