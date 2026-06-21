import Teacher from "../models/teacher.model.js";

// create a teacher
export const createTeacher = async (
    req,
    res
) => {

    try {

        const teacher =
            await Teacher.create(
                req.body
            );

        return res.status(201).json({
            message:
                "Teacher Created Successfully",
            teacher
        });

    }
    catch (err) {

        return res.status(500).json({
            message:
                "Teacher Creation Failed"
        });

    }

};

// get all the teachers
export const getAllTeachers = async (
    req,
    res
) => {

    try {

        const teachers =
            await Teacher.find();

        return res.status(200).json(
            teachers
        );

    }
    catch (err) {

        return res.status(500).json({
            message:
                "Failed To Fetch Teachers"
        });

    }

};

// get the teachers count
export const getTeacherCount = async (
    req,
    res
) => {

    try {

        const totalTeachers =
            await Teacher.countDocuments();

        return res.status(200).json({
            totalTeachers
        });

    }
    catch (err) {

        return res.status(500).json({
            message:
                "Count Failed"
        });

    }

};

// get teacher profile
export const getTeacherProfile = async (
    req,
    res
) => {

    try {

        const teacher =
            await Teacher.findOne({
                authUserId:
                    req.user.userId
            });

        if (!teacher) {

            return res.status(404).json({
                message:
                    "Teacher Not Found"
            });

        }

        return res.status(200).json(
            teacher
        );

    }
    catch (err) {

        return res.status(500).json({
            message:
                "Failed To Fetch Profile"
        });

    }

};


// get teacher via id
export const getTeacherById = async (
    req,
    res
) => {

    try {

        const teacher =
            await Teacher.findById(
                req.params.id
            );

        if (!teacher) {

            return res.status(404).json({
                message:
                    "Teacher Not Found"
            });

        }

        return res.status(200).json(
            teacher
        );

    }
    catch (err) {

        return res.status(500).json({
            message:
                "Failed To Fetch Teacher"
        });

    }

};

// updateteacher
export const updateTeacher = async (
    req,
    res
) => {

    try {

        const teacher =
            await Teacher.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new: true
                }
            );

        return res.status(200).json({
            message:
                "Teacher Updated Successfully",
            teacher
        });

    }
    catch (err) {

        return res.status(500).json({
            message:
                "Update Failed"
        });

    }

};

// delete Teacher
export const deleteTeacher = async (
    req,
    res
) => {

    try {

        await Teacher.findByIdAndDelete(
            req.params.id
        );

        return res.status(200).json({
            message:
                "Teacher Deleted Successfully"
        });

    }
    catch (err) {

        return res.status(500).json({
            message:
                "Delete Failed"
        });

    }

};