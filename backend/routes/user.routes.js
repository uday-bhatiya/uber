import express from 'express';
import { body } from 'express-validator';
import { register, userLogin, getProfile, logout } from '../controllers/user.controller.js';
import { AuthUser } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min:8}).withMessage('Password must be at least 8 characters long')
], register );

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:8}).withMessage("Password must be 8 characters long")
], userLogin);

router.get('/profile', AuthUser, getProfile );

router.get('/logout', AuthUser, logout );

export default router;