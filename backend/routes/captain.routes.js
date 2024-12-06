import express from 'express';
import { body } from 'express-validator';
import { registerCaptain, captainLogin, getCaptainProfile, logout } from '../controllers/captain.controller.js';
import { AuthCaptain } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({min:8}).withMessage('Password must be at least 8 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be at least 3 characters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vehicle.vehicleType').isIn([ 'car', 'motorcycle', 'auto' ]).withMessage('Invalid vehicle type')
], registerCaptain );

router.get('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:8}).withMessage("Password must be at least 8 characters long"),
], captainLogin );

router.get('/profile', AuthCaptain, getCaptainProfile );

router.get('/logout', AuthCaptain, logout );

export default router;