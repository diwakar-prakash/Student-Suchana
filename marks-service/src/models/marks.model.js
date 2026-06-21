import mongoose from "mongoose";

const marksSchema = new mongoose.Schema(
    {
        studentId: {
            type: String,
            required: true
        },

        teacherId: {
            type: String,
            required: true
        },

        subject: {
            type: String,
            required: true
        },

        marks: {
            type: Number,
            min: 0,
            max: 100,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model(
    "Marks",
    marksSchema
);