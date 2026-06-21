import Student from "../models/student.model.js";

export const createStudent = async (
    req,
    res
) => {

    try {

        const student =
            await Student.create(req.body);

        return res.status(201).json({
            message:
                "Student Created Successfully",
            student
        });

    }
    catch (err) {

        return res.status(500).json({
            message:
                "Student Creation Failed"
        });

    }

};

// get student bhai loog

export const getAllStudents = async (
    req,
    res
) => {

    try {

        const students =
            await Student.find();

        return res.status(200).json(
            students
        );

    }
    catch (err) {

        return res.status(500).json({
            message:
                "Failed To Fetch Students"
        });

    }

};

// ab we will be counting students 
export const getStudentCount = async (
    req,
    res
) => {

    try {

        const totalStudents =
            await Student.countDocuments();

        return res.status(200).json({
            totalStudents
        });

    }
    catch (err) {

        return res.status(500).json({
            message:
                "Count Failed"
        });

    }

};

// we are going to get the student profile
export const getStudentProfile = async (
    req,
    res
) => {

    try {

        const student =
            await Student.findOne({
                authUserId:
                    req.user.userId
            });

        if (!student) {

            return res.status(404).json({
                message:
                    "Student Not Found"
            });

        }

        return res.status(200).json(
            student
        );

    }
    catch (err) {

        return res.status(500).json({
            message:
                "Failed To Fetch Profile"
        });

    }

};

// get student id

export const getStudentById = async (
    req,
    res
) => {

    try {

        const student =
            await Student.findById(
                req.params.id
            );

        if (!student) {

            return res.status(404).json({
                message:
                    "Student Not Found"
            });

        }

        return res.status(200).json(
            student
        );

    }
    catch (err) {

        return res.status(500).json({
            message:
                "Failed To Fetch Student"
        });

    }

};

// update student
export const updateStudent = async (
    req,
    res
) => {

    try {

        const student =
            await Student.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true
                }
            );

        return res.status(200).json({
            message:
                "Student Updated Successfully",
            student
        });

    }
    catch (err) {

        return res.status(500).json({
            message:
                "Update Failed"
        });

    }

};

// delete student 
export const deleteStudent = async (
    req,
    res
) => {

    try {

        await Student.findByIdAndDelete(
            req.params.id
        );

        return res.status(200).json({
            message:
                "Student Deleted Successfully"
        });

    }
    catch (err) {

        return res.status(500).json({
            message:
                "Delete Failed"
        });

    }

};

