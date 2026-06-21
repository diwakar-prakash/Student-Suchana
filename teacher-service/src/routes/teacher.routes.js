import { Router } from "express";

import authMiddleware
from "../middleware/auth.middleware.js";

import {
    createTeacher,
    getAllTeachers,
    getTeacherCount,
    getTeacherProfile,
    getTeacherByAuthUserId,
    getTeacherById,
    updateTeacher,
    deleteTeacher
}
from "../controllers/teacher.controllers.js";

const router = Router();

router.post(
    "/",
    createTeacher
);

router.get(
    "/",
    getAllTeachers
);

router.get(
    "/count",
    getTeacherCount
);

router.get(
    "/profile",
    authMiddleware,
    getTeacherProfile
);

router.get(
    "/:id",
    getTeacherById
);

router.put(
    "/:id",
    updateTeacher
);

router.delete(
    "/:id",
    deleteTeacher
);

export default router;