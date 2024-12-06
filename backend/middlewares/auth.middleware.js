import jwt from 'jsonwebtoken';
import { UserModel } from '../models/user.model.js';
import { BlacklistTokenModel } from '../models/blacklistToken.model.js';
import { CaptainModel } from '../models/captain.model.js';

const AuthUser = async (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
       return res.status(401).json({
        success: false,
        message: "Unauthorized: No token provided"
       })
    }

    const isBlacklisted = await BlacklistTokenModel.findOne({ token });
    if (isBlacklisted) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        })
    }

    try {
        const decodedToken = jwt.verify(token,process.env.JWT_SECRET);
        if (!decodedToken) {
            return res.status(401).json({ 
                success: false, 
                message: "Unauthorized: Invalid token" });
        }

        const user = await UserModel.findById(decodedToken._id).select('-password');
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

const AuthCaptain = async (req, res, next) => {
    const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized: No token provided"
        })
    }

    const isBlacklisted = await BlacklistTokenModel.findOne({ token });
    if (isBlacklisted) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized"
        })
    }

    try {
        const decodedToken = jwt.verify(token,process.env.JWT_SECRET);
        if (!decodedToken) {
            return res.status(401).json({ 
                success: false, 
                message: "Unauthorized: Invalid token" });
        }

        const captain = await CaptainModel.findById(decodedToken._id).select('-password');
        if (!captain) {
            return res.status(401).json({ 
                success: false, 
                message: "Unauthorized: Captain not found" });
        }

        req.captain = captain;

        return next();
    } catch (error) {
        return res.status(401).json({ 
            success: false,
            message: "Unauthorized: Token verification failed" });
    }
}

export  { AuthUser, AuthCaptain };