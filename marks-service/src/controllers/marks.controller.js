import Marks from "../models/marks.model.js";

export const uploadMarks = async (
    req,
    res
) => {

    try {

        const {
            studentId,
            subject,
            marks
        } = req.body;

        const teacherId =
            req.user.userId;

        const createdMarks =
            await Marks.create({
                studentId,
                teacherId,
                subject,
                marks
            });

        return res.status(201).json({
            message:
                "Marks Uploaded Successfully",
            createdMarks
        });

    }
    catch (err) {

        return res.status(500).json({
            message:
                "Marks Upload Failed"
        });

    }

};


export const getStudentMarks =
async (
    req,
    res
) => {

    try {

        const marks =
            await Marks.find({
                studentId:
                    req.params.studentId
            });

        return res.status(200).json(
            marks
        );

    }
    catch (err) {

        return res.status(500).json({
            message:
                "Failed To Fetch Marks"
        });

    }

};



export const getPercentage =
async (
    req,
    res
) => {

    try {

        const marks =
            await Marks.find({
                studentId:
                    req.params.studentId
            });

        if (
            marks.length === 0
        ) {

            return res.status(404).json({
                message:
                    "No Marks Found"
            });

        }

        const totalObtained =
            marks.reduce(
                (sum, record) =>
                    sum + record.marks,
                0
            );

        const totalMarks =
            marks.length * 100;

        const percentage =
            (
                totalObtained /
                totalMarks
            ) * 100;

        return res.status(200).json({
            percentage:
                percentage.toFixed(2)
        });

    }
    catch (err) {

        return res.status(500).json({
            message:
                "Percentage Calculation Failed"
        });

    }

};


export const getTopPerformer =
async (
    req,
    res
) => {

    try {

        const allMarks =
            await Marks.find();

        const studentMap = {};

        allMarks.forEach(
            (record) => {

                if (
                    !studentMap[
                        record.studentId
                    ]
                ) {

                    studentMap[
                        record.studentId
                    ] = [];

                }

                studentMap[
                    record.studentId
                ].push(
                    record.marks
                );

            }
        );

        let topStudent = null;

        let highestPercentage = 0;

        for (
            const studentId
            in studentMap
        ) {

            const marks =
                studentMap[
                    studentId
                ];

            const obtained =
                marks.reduce(
                    (a, b) => a + b,
                    0
                );

            const total =
                marks.length * 100;

            const percentage =
                (
                    obtained /
                    total
                ) * 100;

            if (
                percentage >
                highestPercentage
            ) {

                highestPercentage =
                    percentage;

                topStudent =
                    studentId;

            }

        }

        return res.status(200).json({
            studentId:
                topStudent,

            percentage:
                highestPercentage.toFixed(
                    2
                )
        });

    }
    catch (err) {

        return res.status(500).json({
            message:
                "Failed To Fetch Top Performer"
        });

    }

};