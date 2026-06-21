import Attendance from "../models/attendance.model.js";

export const markAttendance = async (req, res) => {
  try {
    const { date, attendance } = req.body;

    const teacherId = req.user.userId;

    const attendanceRecords = attendance.map((student) => ({
      studentId: student.studentId,

      teacherId,

      date,

      status: student.status,
    }));

    await Attendance.insertMany(attendanceRecords);

    return res.status(201).json({
      message: "Attendance Marked Successfully",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Attendance Marking Failed",
    });
  }
};

export const getAttendanceByStudent = async (req, res) => {
  try {
    const attendance = await Attendance.find({
      studentId: req.params.studentId,
    });

    return res.status(200).json(attendance);
  } catch (err) {
    return res.status(500).json({
      message: "Failed To Fetch Attendance",
    });
  }
};

export const getAttendancePercentage = async (req, res) => {
  try {
    const attendance = await Attendance.find({
      studentId: req.params.studentId,
    });

    const totalDays = attendance.length;

    const presentDays = attendance.filter(
      (record) => record.status === "PRESENT",
    ).length;

    const attendancePercentage =
      totalDays === 0 ? 0 : (presentDays / totalDays) * 100;

    return res.status(200).json({
      attendancePercentage: attendancePercentage.toFixed(2),
    });
  } catch (err) {
    return res.status(500).json({
      message: "Failed To Calculate Attendance",
    });
  }
};

export const getAverageAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find();

    const totalDays = attendance.length;

    const presentDays = attendance.filter(
      (record) => record.status === "PRESENT",
    ).length;

    const averageAttendance =
      totalDays === 0 ? 0 : (presentDays / totalDays) * 100;

    return res.status(200).json({
      averageAttendance: averageAttendance.toFixed(2),
    });
  } catch (err) {
    return res.status(500).json({
      message: "Failed To Calculate Average Attendance",
    });
  }
};
