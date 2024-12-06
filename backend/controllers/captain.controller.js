import { validationResult } from "express-validator";
import { CaptainModel } from '../models/captain.model.js';
import { createCaptain } from '../services/captain.service.js';
import { BlacklistTokenModel } from "../models/blacklistToken.model.js";

const registerCaptain = async (req, res, next) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            })
        }

        const { fullName, email, password, location, status, vehicle } = req.body;

        const isCaptainExist = await CaptainModel.findOne({ email });
        if (isCaptainExist) {
            return res.status(400).json({
                success: false,
                message: "Captain already exist"
            });
        }

        const hashedPassword = await CaptainModel.hashPassword(password);

        const captain = await createCaptain({
            firstName: fullName.firstName,
            lastName: fullName.lastName,
            email,
            password: hashedPassword,
            ltd: location?.ltd,
            lng: location?.lng,
            status,
            color: vehicle.color,
            plate: vehicle.plate,
            capacity: vehicle.capacity,
            vehicleType: vehicle.vehicleType
        });
        if (!captain) {
            return res.status(400).json({
                success: false,
                message: "Failed to register captain"
            })
        }
        const token = captain.generateAuthToken();

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Failed to generate token"
            });
        }

        return res.status(201).json({
            success: true,
            message: "Captain registered successfully",
            token,
            captain: {
                id: captain._id,
                firstName: captain.fullName.firstName,
                lastNameName: captain.fullName.lastName,
                email: captain.email,
                ltd: captain.location.ltd,
                lng: captain.location.lng,
                status: captain.status,
                color: vehicle.color,
                plate: captain.vehicle.plate,
                capacity: captain.vehicle.capacity,
                vehicleType: captain.vehicle.vehicleType
            }
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

const captainLogin = async (req, res, next) => {

    try {
        const errrors = validationResult(req);
        if (!errrors.isEmpty) {
            return res.status(401).json({
                success: false,
                errrors: errrors.array()
            });
        }

        const { email, password } = req.body;

        const captain = await CaptainModel.findOne({ email }).select('+password');
        if (!captain) {
            return res.status(401).json({
                success: false,
                message: "Failed to fetch captain"
            });
        }

        const isPasswordCorrect = await captain.comparePassword(password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: "Invalid password"
            });
        }

        const token = await captain.generateAuthToken();
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Failed to generate token"
            });
        }

        res.cookie('token', token, {
            httpOnly: true
        });

        return res.status(200).json({
            success: true,
            message: "Captain logged in successfully",
            captain: {
                id: captain._id,
                email: captain.email
            }
        });


    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

const getCaptainProfile = async (req, res, next) => {
    try {
        if (!req.captain) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: Captain not found in request"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Fetched Captain successfully",
            captain: req.captain
        });
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
            message: "Captain logged out"
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }
}

export { registerCaptain, captainLogin, getCaptainProfile, logout }