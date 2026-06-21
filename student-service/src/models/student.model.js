import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        authUserId: {
            type: String,
            required: true
        },

        name: {
            type: String,
            required: true
        },

        rollNumber: {
            type: String,
            required: true,
            unique: true
        },

        branch: {
            type: String,
            required: true
        },

        semester: {
            type: Number,
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
    "Student",
    studentSchema
);
