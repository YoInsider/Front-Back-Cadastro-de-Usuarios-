import { Router } from 'express';
import { getUsers, createUser, removeUser } from '../controller/userController.js';

const router = Router();

router.get('/users', getUsers);
router.post('/users', createUser);
router.delete('/users/:_id', removeUser);

export default router;