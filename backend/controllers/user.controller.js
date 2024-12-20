import { validationResult } from "express-validator"
import { UserModel } from "../models/user.model.js";
import { createUser } from '../services/user.service.js';
import { BlacklistTokenModel } from '../models/blacklistToken.model.js';


const register = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }

        const { fullName, email, password } = req.body;

        const isUserExist = await UserModel.findOne({ email });
        if (isUserExist) {
            return res.status(400).json({
                success: false,
                message: "User already exist"
            });
        }

        const hashedPassword = await UserModel.hashPassword(password);

        const user = await createUser({
            firstName: fullName.firstName,
            lastName: fullName.lastName,
            email,
            password: hashedPassword
        })

        const token = user.generateAuthToken();

        return res.status(201).json({
            success: true,
            message: "User registered succussfully",
            token,
            user: {
                id: user._id,
                firstName: fullName.firstName,
                lastName: fullName.lastName,
                email: user.email,
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

const userLogin = async (req, res, next) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!",
            })
        }

        const user = await UserModel.findOne({ email }).select('+password');
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Failed to fetch user",
            })
        }

        const isPasswordCorrect = await user.comparePassword(password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            })
        }

        const token = user.generateAuthToken();

        res.cookie('token', token, {
            httpOnly: true
        });

        return res.status(200).json({
            success: true,
            message: "User logged in successfully",
            user: {
                id: user._id,
                email: user.email,
            },
            token
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

const getProfile = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: User not found in request"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Fetched user successfully",
            user: req.user
        })
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

const logout = async (req, res, next) => {
 try {
       const token = req.cookies?.token || req.headers.authorization.split(' ')[1];
       if (!token) {
           return res.status(401).json({
               success: false,
               message: "Failed to get token"
           })
       }
       res.clearCookie('token');
   
       await BlacklistTokenModel.create({ token });

       return res.status(200).json({
        success: true,
        message: "User logged out"
       })
 } catch (error) {
    console.error(error);
    return res.status(500).json({
        success: false,
        message: "Internal server error"
    })
 }

}

export { register, userLogin, getProfile, logout }