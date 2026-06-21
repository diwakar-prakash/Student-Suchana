import { Router } from "express";

import authMiddleware
from "../middleware/auth.middleware.js";

import {
    createStudent,
    getAllStudents,
    getStudentCount,
    getStudentProfile,
    getStudentByAuthUserId,
    getStudentById,
    updateStudent,
    deleteStudent
}
from "../controllers/student.controllers.js";

const router = Router();

router.post(
    "/",
    createStudent
);

router.get(
    "/",
    getAllStudents
);

router.get(
    "/count",
    getStudentCount
);

router.get(
    "/profile",
    authMiddleware,
    getStudentProfile
);


router.get(
    "/:id",
    getStudentById
);

router.put(
    "/:id",
    updateStudent
);

router.delete(
    "/:id",
    deleteStudent
);

export default router;
