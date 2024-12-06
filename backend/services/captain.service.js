import { CaptainModel } from '../models/captain.model.js';

const createCaptain = async ({ firstName, lastName, email, password, ltd, lng, status, color, plate, capacity, vehicleType }) => {
    if (!firstName || !email || !password, !color || !plate || !capacity || !vehicleType) {
        throw new Error("All fields are requred!");
    }

    const captain = CaptainModel.create({
        fullName: {
            firstName,
            lastName
        },
        email,
        password,
        location: {
            ltd,
            lng, 
        },
        status,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    });

    return captain;
}

export { createCaptain }