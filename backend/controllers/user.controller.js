import { validationResult } from "express-validator"
import { UserModel } from "../models/user.model.js";
import {createUser} from '../services/user.service.js';


const register = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }

    const { fullName, email, password} = req.body;

    const isUserExist = await UserModel.findOne({email});
    if (isUserExist) {
        return res.status(400).json({message: "User already exist"});
    }

    const hashedPassword = await UserModel.hashPassword(password);

    const user = await createUser({
        firstName: fullName.firstName,
        lastName: fullName.lastName,
        email,
        password: hashedPassword
    })

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
}

export {register}