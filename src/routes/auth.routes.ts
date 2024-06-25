import { login, logout } from '../auth';
import { Router } from 'express';

const authRoutes = Router();

authRoutes.post('/login', login);
authRoutes.post('/logout', logout);

export default authRoutes;
