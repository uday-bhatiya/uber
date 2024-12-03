import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user.model.js';

const AuthUser = async (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
       return res.status(401).json({
        success: false,
        message: "Unauthorized: No token provided"
       })
    }

    try {
        const decodedToken = await jwt.verify(token,process.env.JWT_SECRET);
        if (!decodedToken) {
            return res.status(401).json({ 
                success: false, 
                message: "Unauthorized: Invalid token" });
        }

        const user = await UserModel.findById(decodedToken._id);
        if (!user) {
            return res.status(401).json({ 
                success: false, 
                message: "Unauthorized: User not found" });
        }

        req.user = user;

        return next();
    } catch (error) {
        return res.status(401).json({ 
            success: false,
            message: "Unauthorized: Token verification failed" });
    }
}