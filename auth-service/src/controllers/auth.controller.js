import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js";

export const signUp = async (req, res) => {
    try {

        const { email, password, role } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Insufficient Credentials"
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: "User Already Exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            email,
            password: hashedPassword,
            role:"STUDENT"
        });

        return res.status(201).json({
            message: "User Created Successfully",
            email: user.email,
            role: user.role
        });

    }
    catch (err) {

        return res.status(500).json({
            message: "Signup Failed"
        });

    }
};

export const logIn = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Insufficient Credentials"
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "User Does Not Exist"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Incorrect Password"
            });
        }

        const token = jwt.sign(
            {
                userId: user._id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        return res.status(200).json({
            message: "Login Successful",
            token,
            role: user.role
        });

    }
    catch (err) {

        return res.status(500).json({
            message: "Login Failed"
        });

    }
};

export const verify = async (req, res) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({
                valid: false
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        return res.status(200).json({
            valid: true,
            userId: decoded.userId,
            role: decoded.role
        });

    }
    catch (err) {

        return res.status(401).json({
            valid: false
        });

    }
};
