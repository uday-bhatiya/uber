import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const captainSchema = new Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters long']
        },
        lastName: {
            type: String,
            minlength: [3, 'First name must be at least 3 characters long']
        }
    },

    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at least 5 characters long']
    },

    password: {
        type: String,
        required: true,
        minlength: [8, 'Password must be at least 8 characters long'],
        Selection: false
    },

    socketId: {
        type: String
    },

    location: {
        ltd: {
            type: Number
        },
        lng: {
            type: Number
        }
    },

    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'Color must be atleast 3 characters long']
        },

        plate: {
            type: String,
            required: true,
            minlength: [3, 'Place must be 3 characters long']
        },

        capacity: {
            type: Number,
            required: true,
            minlength: [1, 'Capacity must be at least 1']
        },

        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto']
        }
    }
});

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });

    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10)
}

export const CaptainModel = mongoose.model('captain', captainSchema);