import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
    {
        authUserId: {
            type: String,
            required: true
        },

        name: {
            type: String,
            required: true
        },

        employeeId: {
            type: String,
            required: true,
            unique: true
        },

        department: {
            type: String,
            required: true
        },

        subject: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        phoneNumber: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model(
    "Teacher",
    teacherSchema
);